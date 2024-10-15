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
                    const mixinJson = JSON.parse( contents );

                    if( !m_isArray( mixinJson ) && m_isObject( mixinJson ) ){
                        MIXIN_LIST[ rootRelativeURL ] = [ /** @type {!NicePageBuilder.Metadata} */ (mixinJson), createdTimeMs, updatedTimeMs ];
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
            const PAGE_LIST = PAGES_OR_TEMPLETES;

        // 使用している TEMPLETE と MIXIN のチェック
            for( let pageOrTempleteRootRelativeURL in PAGES_OR_TEMPLETES ){
                const pageOrTemplete = PAGES_OR_TEMPLETES[ pageOrTempleteRootRelativeURL ];

                let metadata = NicePageBuilder.util.getMetadata( pageOrTemplete );

                if( !metadata ){
                    continue;
                };

                checkMixins( pageOrTempleteRootRelativeURL, metadata.MIXINS, !!metadata.TEMPLETE );
                checkTemplete( pageOrTempleteRootRelativeURL, metadata.TEMPLETE, metadata );

                if( PAGES_OR_TEMPLETES[ pageOrTempleteRootRelativeURL ] ){
                    pageOrTemplete.push( true ); // isPage
                };
            };

            /**
             * @param {string} baseURL root relative url
             * @param {string} url 
             * @return {string} */
            function getShortestURL( baseURL, url ){
                var relativeURL     = context.path.toRelativeURL( baseURL, url ),
                    rootRelativeURL = context.path.toRootRelativeURL( baseURL, url );

                return relativeURL.length < rootRelativeURL.length ? relativeURL : rootRelativeURL;
            };

            /**
             * @param {string} pageOrTempleteRootRelativeURL
             * @param {!Array.<NicePageBuilder.RootRelativeURL> | void} mixinPathList
             * @param {boolean} skipTemplete
             */
            function checkMixins( pageOrTempleteRootRelativeURL, mixinPathList, skipTemplete ){
                if( mixinPathList ){
                    for( let i = 0, l = mixinPathList.length; i < l; ++i ){
                        const mixinRootRelativeURL = context.path.toRootRelativeURL( pageOrTempleteRootRelativeURL, mixinPathList[ i ] );
                        const mixin                = MIXIN_LIST[ mixinRootRelativeURL ];
                        
                        mixinPathList[ i ] = getShortestURL( pageOrTempleteRootRelativeURL, mixinRootRelativeURL );
                        if( mixin ){
                            const mixinMetadata = /** @type {!NicePageBuilder.Metadata} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_OPTIONS ]);

                            if( !skipTemplete ){
                                checkTemplete( mixinRootRelativeURL, mixinMetadata.TEMPLETE, mixinMetadata );
                            };

                            if( mixin.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){
                                mixin.push( true ); // used
                                if( mixinMetadata.MIXINS ){
                                    if( NicePageBuilder.DEFINE.DEBUG ){
                                        console.log( 'Mixin:"' + mixinRootRelativeURL + '" cannot have MIXINS property!' );
                                    };
                                    delete mixinMetadata.MIXINS;
                                };
                            };
                        } else if( NicePageBuilder.DEFINE.DEBUG ){
                            throw 'Mixin:"' + mixinRootRelativeURL + '" required by "' + pageOrTempleteRootRelativeURL + '" does not exist!';
                        };
                    };
                };
            };

            /**
             * @param {string} rootRelativeURL
             * @param {string | void} templetePath
             * @param {!NicePageBuilder.Metadata} metadata
             */
            function checkTemplete( rootRelativeURL, templetePath, metadata ){
                while( templetePath ){
                    const templeteRootRelativeURL = context.path.toRootRelativeURL( rootRelativeURL, templetePath );
                    const templete                = PAGES_OR_TEMPLETES[ templeteRootRelativeURL ];

                    if( templete ){
                        metadata.TEMPLETE = getShortestURL( rootRelativeURL, templeteRootRelativeURL );
                        rootRelativeURL = templeteRootRelativeURL;

                        delete PAGES_OR_TEMPLETES[ templeteRootRelativeURL ];
                        TEMPLETE_LIST[ templeteRootRelativeURL ] = templete;

                        /** @suppress {checkTypes} */
                        metadata = NicePageBuilder.util.getMetadata( templete );
                        if( metadata ){
                            checkMixins( rootRelativeURL, metadata.MIXINS, !!metadata.TEMPLETE );
                            /** @suppress {checkTypes} */
                            templetePath = metadata.TEMPLETE;
                        } else {
                            break;
                        };
                    } else if( TEMPLETE_LIST[ templeteRootRelativeURL ] ){
                        metadata.TEMPLETE = getShortestURL( rootRelativeURL, templeteRootRelativeURL );
                        break;
                    } else if( NicePageBuilder.DEFINE.DEBUG ){
                        throw 'Templete:"' + templeteRootRelativeURL + '" required by "' + rootRelativeURL + '" does not exist!';
                    };
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
                metadata.URL         = pageRootRelativeURL;
                metadata.CREATED_AT  = /** @type {number} */ (nicePage[ NicePageBuilder.INDEXES.CREATED_AT ]);
                metadata.MODIFIED_AT = /** @type {number} */ (nicePage[ NicePageBuilder.INDEXES.UPDATED_AT ]);

                if( metadata !== htmlJson[ 0 ] ){
                    htmlJson.unshift( metadata );
                };

                writeFile( filePath + '.json', htmlJson );

                delete metadata.URL;
                if( context.allPagesPath ){
                    context.allPages[ pageRootRelativeURL ] = /** @type {!HTMLJsonWithMetadata} */ (htmlJson);
                };
                context.metadataOfAllPages[ pageRootRelativeURL ] = /** @type {!NicePageBuilder.Metadata} */ (metadata);
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