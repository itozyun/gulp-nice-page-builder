goog.provide( 'NicePageBuilder.builder' );
goog.provide( '__NicePageBuilder_internal__.builder' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplate' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.util.completePage' );

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata} htmlJson
 * @return {!HTMLJson | !HTMLJsonWithMetadata}
 */
__NicePageBuilder_internal__.builder = function( htmlJson ){
    if( !NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
        return htmlJson;
    };

    return NicePageBuilder.util.completePage( this, htmlJson );
};

/**
 * @this {NicePageBuilder.Context}
 */
__NicePageBuilder_internal__._builderGulpPlugin = function(){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.builder',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @const {!Array.<string | !HTMLJson | !HTMLJsonWithMetadata>} */
    const PAGE_FILE_LIST = [];

    return through.obj(
        /**
         * @this {stream.Writable}
         * @param {!Vinyl} file
         * @param {string} encoding
         * @param {function(Error=, Vinyl=)} callback
         */
        function( file, encoding, callback ){
            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };

            if( file.extname !== '.json' ){
                return callback( null, file );
            };
    
            const originalExtname = file.stem.split( '.' ).pop(); // _jsonFilePathToOriginalExtname
            const json = JSON.parse( file.contents.toString( encoding ) );

            switch( originalExtname ){
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    if( NicePageBuilder.util.isHTMLJsonWithMetadata( /** @type {!HTMLJson} */ (json) ) ){
                        PAGE_FILE_LIST.push( file.path, /** @type {!HTMLJsonWithMetadata} */ (json) );
                        return callback();
                    };
                    break;
                case context.keywordTemplates :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        for( const rootRelativeURL in json ){
                            if( !context.templates[ rootRelativeURL ] ){
                                context.templates[ rootRelativeURL ] = /** @type {!NicePageBuilder.NicePageOrTemplate} */ (json[ rootRelativeURL ]);
                            };
                        };
                    };
                    break;
                case context.keywordMixins :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        for( const rootRelativeURL in json ){
                            if( !context.mixins[ rootRelativeURL ] ){
                                context.mixins[ rootRelativeURL ] = /** @type {!NicePageBuilder.Mixin} */ (json[ rootRelativeURL ]);
                            };
                        };
                    };
                    break;
            };
            callback( null, file );
        },
        /**
         * @this {stream.Writable}
         * @param {function()} callback
         */
        function( callback ){
            context.storeMetadataOfNewPages( PAGE_FILE_LIST );

        // 書出し
            while( PAGE_FILE_LIST.length ){
                const filePath = PAGE_FILE_LIST.shift();
                const htmlJson = __NicePageBuilder_internal__.builder.call( context, /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (PAGE_FILE_LIST.shift()) );

                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : filePath,
                            contents : Buffer.from( JSON.stringify( htmlJson ) )
                        }
                    )
                );
            };

            callback();
        }
    );
};