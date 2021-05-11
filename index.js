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
        rootPath    = toAbsolutePath( options.rootPath || './' ) + '/', // 'src' -> 'C://XX/XX/MyWebSiteProject/src/'
        jsonList    = options.json,
        SHOW_LOG    = options.log !== false;
console.log(rootPath)
    function toAbsolutePath( path ){
        if( rootPath ){
            path = rootPath + ( path.charAt( 0 ) === '/' ? path.substr( 1 ) : path ); // 頭に / がいる場合
        };
        return Path.resolve( path ).split( '\\' ).join( '/' );
    };

    function toProjectRootRelativePath( path ){
        return '/' + toAbsolutePath( path ).split( rootPath ).join( '' );
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
        if( !vinyl.path.indexOf( rootPath ) === 0 ){
            this.emit( 'error', new PluginError( pluginName, '"' + vinyl.path + '" is out of rootPath:"' + options.rootPath + '"' ) );
            return callback();
        };

        var html = toString( vinyl.contents ),
            path = toProjectRootRelativePath( vinyl.path ),
            result, importFiles, text, stat;

        if( html ){
            SHOW_LOG && console.log( path, html.length );
            // readHTML(path, htmlString, createTime, updatedTime )
            result = core.readHTML( path, html, vinyl.stat.birthtimeMs / 1000, vinyl.stat.ctimeMs / 1000 );

            if( result && ( importFiles = result.importFiles ) ){
                while( path = importFiles.shift() ){
                    path = toAbsolutePath( path );
                    text = toString( FS.readFileSync( path ) ); // Remove BOM
                    stat = FS.statSync( path );
                    if( text ){
                        SHOW_LOG && console.log( toProjectRootRelativePath( path ), text.length );
                        result = core.readHTML( toProjectRootRelativePath( path ), text, stat.birthtimeMs / 1000, stat.mtime.ctimeMs / 1000 );
                        if( result ){
                            importFiles.push.apply( importFiles, result.importFiles || [] );
                        };
                    } else {
                        this.emit( 'error', new PluginError( pluginName, 'json:{"' + path + '"} not found!' ) );
                        return callback();
                    };
                };
            };
        } else {
            this.push( vinyl );
        };
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