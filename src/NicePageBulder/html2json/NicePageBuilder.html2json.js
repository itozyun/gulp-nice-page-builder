goog.provide( 'NicePageBuilder.html2json' );
goog.provide( '__NicePageBuilder_internal__.html2json' );

goog.require( 'html2json.main' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.INDEXES' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getMetadata' );
goog.require( 'NicePageBuilder.util.getJsonScriptElement' );
goog.require( 'NicePageBuilder.util.getSLotElement' );
goog.require( 'NicePageBuilder.util.isPrebuild' );
goog.require( 'NicePageBuilder.util.traverseMetadataStack' );

/**
 * @this {NicePageBuilder.Context}
 *
 * @param {string} htmlString
 * @param {boolean} allowInvalidTree
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {!HTMLJson | !HTMLJsonWithMetadata}
 */
__NicePageBuilder_internal__.html2json = function( htmlString, allowInvalidTree, opt_onError, opt_options ){
    const htmlJson = /** @type {!HTMLJson} */ (html2json.main( htmlString, allowInvalidTree, opt_onError, opt_options ));

    const result = NicePageBuilder.util.getJsonScriptElement( htmlJson );

    if( result ){
        const scriptJSONNode = /** @type {!HTMLJson} */ (result[ 0 ]);
        const parentJSONNode = /** @type {!HTMLJson} */ (result[ 1 ]);
        const myIndex        = /** @type {number}    */ (result[ 2 ]);

        parentJSONNode.splice( myIndex, 1 );

        // [ 11, [ 'SCRIPT', {}, {...} ], [ 'p' ] ]
        // ↓
        // [ {...}, [ 'p' ] ]

        // [ 9, '<!DOCTYPE html>', [ 'SCRIPT', {}, {...} ], [ 'p' ] ]
        // ↓
        // [ {...}, 9, '<!DOCTYPE html>', [ 'p' ] ]
        if( scriptJSONNode && scriptJSONNode.length === 3 ){
            const metadata = JSON.parse( /** @type {string} */ (scriptJSONNode[ 2 ]) );

            if( !m_isArray( metadata ) && m_isObject( metadata ) ){
                htmlJson.unshift( metadata );
            };
        };
    };
    return htmlJson;
};

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._html2jsonGulpPlugin = function( opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.html2json',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @type {!Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.NicePageOrTemplete>} */
    const PAGES_OR_TEMPLETES = {};

    const TEMPLETE_LIST = context.templetes;

    const MIXIN_LIST = context.mixins;

    return through.obj(
        /**
         * @this {stream.Writable}
         * @param {!Vinyl} file
         * @param {string} encoding
         * @param {function(Error=, Vinyl=)} callback
         */
        function( file, encoding, callback ){
            const filePath = context.path.normalizeFilePath( file.path );

            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };
            if( filePath.indexOf( context.srcRootPath ) !== 0 ){
                this.emit( 'error', new PluginError( pluginName, '"' + filePath + '" is outside of srcRootPath:"' + context.srcRootPath + '"' ) );
                return callback();
            };
    
            const contents        = file.contents.toString( encoding ),
                  createdTimeMs   = parseInt( file.stat.birthtimeMs, 10 ),
                  updatedTimeMs   = parseInt( file.stat.ctimeMs, 10 ),
                  rootRelativeURL = context.path.filePathToURL( context.path.absoluteFilePathToSrcRootRelativeFilePath( filePath ) );

            switch( file.extname ){
                case '.html'  :
                case '.htm'   :
                case '.xhtml' :
                case '.php'   :
                    const htmlJson = __NicePageBuilder_internal__.html2json.call( context, contents, false, opt_onError, opt_options );

                    PAGES_OR_TEMPLETES[ rootRelativeURL ] = [ htmlJson, createdTimeMs, updatedTimeMs ];
                    break;
                case '.json' :
                    const json = JSON.parse( contents );

                    switch( file.stem ){
                        case context.keywordTempletes :
                            if( !m_isArray( json ) && m_isObject( json ) ){
                                for( const rootRelativeURL in json ){
                                    if( !context.templetes[ rootRelativeURL ] ){
                                        context.templetes[ rootRelativeURL ] = /** @type {!NicePageBuilder.NicePageOrTemplete} */ (json[ rootRelativeURL ]);
                                    };
                                };
                                this.push( file );
                            } else if( NicePageBuilder.DEFINE.DEBUG ){
                                console.log( 'Invalid templetes ' + file.path );
                            };
                            break;
                        case context.keywordMixins :
                            if( !m_isArray( json ) && m_isObject( json ) ){
                                for( const rootRelativeURL in json ){
                                    if( !context.mixins[ rootRelativeURL ] ){
                                        context.mixins[ rootRelativeURL ] = /** @type {!NicePageBuilder.Mixin} */ (json[ rootRelativeURL ]);
                                    };
                                };
                                this.push( file );
                            } else if( NicePageBuilder.DEFINE.DEBUG ){
                                console.log( 'Invalid mixins ' + file.path );
                            };
                            break;
                        default :
                            if( !m_isArray( json ) && m_isObject( json ) ){
                                MIXIN_LIST[ rootRelativeURL ] = [ /** @type {!NicePageBuilder.Metadata} */ (json), createdTimeMs, updatedTimeMs ];
                            } else {
                                this.push( file );
                            };
                            break;
                    };
                    break;
                default :
                    this.push( file );
                    break;
            };
            callback();
        },
        /**
         * @this {stream.Writable}
         * @param {function()} callback
         */
        function( callback ){
            /**
             * @param {string} baseRootRelativeURL
             * @param {!NicePageBuilder.Metadata} metadata
             */
            function toShortestURL( baseRootRelativeURL, metadata ){
                function getShortestURL( baseURL, uriOrFilePath ){
                    var relativeURL     = context.path.toRelativeURL( baseURL, context.path.filePathToURL( uriOrFilePath ) ),
                        rootRelativeURL = context.path.toRootRelativeURL( baseURL, context.path.filePathToURL( uriOrFilePath ) );

                    return relativeURL.length < rootRelativeURL.length ? relativeURL : rootRelativeURL;
                };

                const mixinPathList = metadata.MIXINS;
                const templetePath  = metadata.TEMPLETE;

                if( mixinPathList ){
                    for( let i = 0, l = mixinPathList.length; i < l; ++i ){
                        mixinPathList[ i ] = getShortestURL( baseRootRelativeURL, mixinPathList[ i ] );
                    };
                };
                if( templetePath ){
                    metadata.TEMPLETE = getShortestURL( baseRootRelativeURL, templetePath );
                };
            };

            const PAGE_LIST = PAGES_OR_TEMPLETES;

        // 使用している TEMPLETE と MIXIN のチェック
            for( let pageOrTempleteRootRelativeURL in PAGES_OR_TEMPLETES ){
                const pageOrTemplete = PAGES_OR_TEMPLETES[ pageOrTempleteRootRelativeURL ];
                const metadata       = NicePageBuilder.util.getMetadata( pageOrTemplete );

                if( metadata && NicePageBuilder.util.isPrebuild( metadata ) ){
                    metadata.URL = pageOrTempleteRootRelativeURL;

                    toShortestURL( pageOrTempleteRootRelativeURL, metadata ); // TODO traverse

                    NicePageBuilder.util.traverseMetadataStack(
                        context, metadata,
                        /**
                         * 
                         * @param {NicePageBuilder.RootRelativeURL} mixinRootRelativeURL 
                         * @param {!NicePageBuilder.Metadata} metadataMixin
                         * @param {number} updatedAt
                         */
                        function( mixinRootRelativeURL, metadataMixin, updatedAt ){
                            toShortestURL( mixinRootRelativeURL, metadataMixin );

                            const mixin = MIXIN_LIST[ mixinRootRelativeURL ];
                            if( mixin.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){
                                mixin.push( true ); // used
                            };
                        },
                        /**
                         * 
                         * @param {NicePageBuilder.RootRelativeURL} templeteRootRelativeURL 
                         * @param {NicePageBuilder.Metadata | null} metadataTemplete
                         * @param {number} updatedAt
                         */
                        function( templeteRootRelativeURL, metadataTemplete, updatedAt ){
                            metadataTemplete && toShortestURL( templeteRootRelativeURL, metadataTemplete );

                            const templete = PAGES_OR_TEMPLETES[ templeteRootRelativeURL ];
                            if( templete ){
                                TEMPLETE_LIST[ templeteRootRelativeURL ] = templete;
                                delete PAGES_OR_TEMPLETES[ templeteRootRelativeURL ];
                            };
                        },
                        opt_onError,
                        PAGES_OR_TEMPLETES
                    );
                };

                if( PAGES_OR_TEMPLETES[ pageOrTempleteRootRelativeURL ] ){
                    pageOrTemplete.push( true ); // isPage
                };
            };

        // 使用していない TEMPLETE と MIXIN を削除
            for( const mixinRootRelativeURL in MIXIN_LIST ){
                const mixin = MIXIN_LIST[ mixinRootRelativeURL ];
                if( mixin.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){
                    if( NicePageBuilder.DEFINE.DEBUG ){
                        console.log( 'Unused mixin found! ' + mixinRootRelativeURL );
                    };
                    delete MIXIN_LIST[ mixinRootRelativeURL ];
                } else {
                    mixin.pop(); // delete used flag
                };
            };

            for( const pageOrTempleteRootRelativeURL in PAGES_OR_TEMPLETES ){
                const pageOrTemplete = PAGES_OR_TEMPLETES[ pageOrTempleteRootRelativeURL ];
                const htmlJson       = NicePageBuilder.util.getHTMLJson( pageOrTemplete );

                if( pageOrTemplete.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){ // NicePageBuilder.NicePageOrTemplete[4] use templete == false
                    if( NicePageBuilder.util.getSLotElement( htmlJson, false ) ){
                        if( NicePageBuilder.DEFINE.DEBUG ){
                            console.log( 'Unused templete found! ' + pageOrTempleteRootRelativeURL );
                        };
                        delete PAGES_OR_TEMPLETES[ pageOrTempleteRootRelativeURL ];
                    };
                };
            };

        // 書出し
            const self = this;

            for( const pageRootRelativeURL in PAGE_LIST ){
                const nicePage = PAGE_LIST[ pageRootRelativeURL ];
                const filePath = context.path.urlToFilePath( pageRootRelativeURL );
                delete PAGE_LIST[ pageRootRelativeURL ];

                const htmlJson = nicePage[ NicePageBuilder.INDEXES.HTML_JSON ];

                let metadata = htmlJson[ 0 ];
                metadata = !m_isArray( metadata ) && m_isObject( metadata ) ? metadata : {};
                metadata.CREATED_AT  = /** @type {number} */ (nicePage[ NicePageBuilder.INDEXES.CREATED_AT ]);
                metadata.MODIFIED_AT = /** @type {number} */ (nicePage[ NicePageBuilder.INDEXES.UPDATED_AT ]);

                if( metadata !== htmlJson[ 0 ] ){
                    htmlJson.unshift( metadata );
                };

                writeFile( filePath + '.json', htmlJson );

                // delete metadata.URL;
                if( context.allPagesPath ){
                    context.allPages[ pageRootRelativeURL ] = /** @type {!HTMLJsonWithMetadata} */ (htmlJson);
                };
                context.allPageMetadata[ pageRootRelativeURL ] = /** @type {!NicePageBuilder.Metadata} */ (metadata);
            };

            callback();

            function writeFile( filePath, json ){
                const file = new _Vinyl(
                    {
                        path     : filePath,
                        contents : Buffer.from( JSON.stringify( json ) )
                    }
                );
                file.extname = '.json';
                self.push( file );
            };
        }
    );
};