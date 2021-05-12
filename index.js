/**
 * https://qiita.com/morou/items/1297d5dd379ef013d46c
 *   gulpプラグインの基本構造（プラグイン開発者向け）
 */
 const pluginName  = 'gulp-nice-page-builder',
       PluginError = require( 'plugin-error' ),
       Vinyl       = require( 'vinyl'        ),
       through     = require( 'through2'     ),
       Path        = require( 'path'         ),
       FS          = require( 'fs'           ),
       core        = require( './NicePageBuilder.js' );

module.exports = function( _options ){
    var options     = _options || {},
        srcRootPath = toAbsolutePath( options.srcRootPath || './' ) + '/', // 'src' -> 'C://XX/XX/MyWebSiteProject/src/'
        jsonList    = options.json,
        SHOW_LOG    = options.log !== false;

    function toAbsolutePath( path ){
        if( srcRootPath ){
            path = srcRootPath + ( path.charAt( 0 ) === '/' ? path.substr( 1 ) : path ); // 頭に / がいる場合
        };
        return Path.resolve( path ).split( '\\' ).join( '/' );
    };

    function toSourceRootRelativePath( path ){
        return '/' + toAbsolutePath( path ).split( srcRootPath ).join( '' );
    };

    function toString( any ){
        return any.toString().split( String.fromCharCode( 65279 ) ).join( '' ); // Remove BOM
    };

    function transform( vinyl, encoding, callback ){
        if( vinyl.isNull() ) return callback();

        if( vinyl.isStream() ){
            this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
            return callback();
        };
        if( !vinyl.extname.match( 'html' ) && vinyl.extname !== '.htm' ){
            this.push( vinyl );
            return callback();
        };
        if( !vinyl.path.indexOf( srcRootPath ) === 0 ){
            this.emit( 'error', new PluginError( pluginName, '"' + vinyl.path + '" is out of srcRootPath:"' + options.srcRootPath + '"' ) );
            return callback();
        };

        var html          = toString( vinyl.contents ),
            createdTimeMs = vinyl.stat.birthtimeMs / 1000,
            updatedTimeMs = vinyl.stat.ctimeMs / 1000,
            importFiles   = [],
            _importFiles, srrPath, stat;

        do {
            if( srrPath ){
                html          = toString( FS.readFileSync( toAbsolutePath( srrPath ) ) ); // Remove BOM
                stat          = FS.statSync( toAbsolutePath( srrPath ) );
                createdTimeMs = stat.birthtimeMs / 1000;
                updatedTimeMs = stat.ctimeMs / 1000;
            } else {
                srrPath       = toSourceRootRelativePath( vinyl.path );
            };

            SHOW_LOG && console.log( srrPath, html.length );

            if( html ){
                _importFiles = core.readHTML( srrPath, html, createdTimeMs, updatedTimeMs );
                if( _importFiles ){
                    importFiles.push.apply( importFiles, _importFiles );
                };
            } else {
                this.emit( 'error', new PluginError( pluginName, 'json:{"' + srrPath + '"} not found!' ) );
                return callback();
            };
        } while( srrPath = importFiles.shift() );

        callback();
    };

    function flush( callback ){
        var jsonName, jsonPath, jsonString;

        for( jsonName in jsonList ){
            jsonPath   = jsonList[ jsonName ];
            jsonString = toString( FS.readFileSync( jsonPath ) );
            if( jsonString ){
                core.readJSON( jsonName, jsonString );
            } else {
                this.emit( 'error', new PluginError( pluginName, 'json:{"' + jsonName +'":' + '"' + jsonList[ jsonName ] + '"} not found!' ) );
                return callback();
            };
        };

        while( currentBuild = core.build() ){
            this.push(new Vinyl({
                base     : '/',
                path     : currentBuild.path,
                contents : Buffer.from( currentBuild.html )
            }));
        };
        callback();
    };

    return through.obj( transform, flush );
};