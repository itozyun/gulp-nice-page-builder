goog.provide( 'NicePageBuilder.html2json' );
goog.provide( '__NicePageBuilder_internal__.html2json' );

goog.require( 'html2json.main' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.INDEXES' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getOptions' );
goog.require( 'NicePageBuilder.util.getJsonScriptElement' );
goog.require( 'NicePageBuilder.util.getSLotElement' );

/**
 * @package
 * @this {NicePageBuilder.Context}
 *
 * @param {string} htmlString
 * @param {boolean} allowInvalidTree
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {!HTMLJson | !HTMLJsonWithOptions}
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
            const options = JSON.parse( /** @type {string} */ (scriptJSONNode[ 2 ]) );

            if( !m_isArray( options ) && m_isObject( options ) ){
                htmlJson.unshift( options );
            };
        };
    };
    return htmlJson;
};

/**
 * @package
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

    /** @type {!Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.NicePageOrTemplete>} */
    const TEMPLETE_LIST = context.templetes = context.templetes || {};

    /** @type {!Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.Mixin>} */
    const MIXIN_LIST = context.mixins = context.mixins || {};

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

                    if( m_isObject( mixinJson ) ){
                        MIXIN_LIST[ rootRelativeURL ] = [ /** @type {!NicePageBuilder.NicePageOptions} */ (mixinJson), createdTimeMs, updatedTimeMs ];
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
            for( let pageOrTempletePath in PAGES_OR_TEMPLETES ){
                const pageOrTemplete = PAGES_OR_TEMPLETES[ pageOrTempletePath ];

                let pageOptions = NicePageBuilder.util.getOptions( pageOrTemplete );

                if( !pageOptions ){
                    continue;
                };

                checkMixins( pageOrTempletePath, pageOptions.MIXINS, !!pageOptions.TEMPLETE );
                checkTemplete( pageOrTempletePath, pageOptions.TEMPLETE, pageOptions );

                if( PAGES_OR_TEMPLETES[ pageOrTempletePath ] ){
                    pageOrTemplete.push( true ); // isPage
                };
            };

            /**
             * @param {string} pageOrTempletePath
             * @param {!Array.<NicePageBuilder.RootRelativeURL> | void} mixinPathList
             * @param {boolean} skipTemplete
             */
            function checkMixins( pageOrTempletePath, mixinPathList, skipTemplete ){
                if( mixinPathList ){
                    for( let i = 0, l = mixinPathList.length; i < l; ++i ){
                        const mixinPath = mixinPathList[ i ];
                        const path      = context.path.toRootRelativeURL( pageOrTempletePath, mixinPath );
                        const mixin     = MIXIN_LIST[ path ];
                        
                        mixinPathList[ i ] = path; // toRootRelativeURL
                        if( mixin ){
                            const mixinOptions = /** @type {!NicePageBuilder.NicePageOptions} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_OPTIONS ]);

                            if( !skipTemplete ){
                                checkTemplete( path, mixinOptions.TEMPLETE, mixinOptions );
                            };

                            if( mixin.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){
                                mixin.push( true ); // used
                                if( mixinOptions.MIXINS ){
                                    if( NicePageBuilder.DEFINE.DEBUG ){
                                        console.log( 'Mixin:"' + path + '" cannot have MIXINS property!' );
                                    };
                                    delete mixinOptions.MIXINS;
                                };
                            };
                        } else if( NicePageBuilder.DEFINE.DEBUG ){
                            throw 'Mixin:"' + path + '" required by "' + pageOrTempletePath + '" does not exist!';
                        };
                    };
                };
            };

            /**
             * @param {string} basePath
             * @param {string | void} templetePath
             * @param {!NicePageBuilder.NicePageOptions} pageOptions
             */
            function checkTemplete( basePath, templetePath, pageOptions ){
                while( templetePath ){
                    const path     = context.path.toRootRelativeURL( basePath, templetePath );
                    const templete = PAGES_OR_TEMPLETES[ path ];

                    if( templete ){
                        delete PAGES_OR_TEMPLETES[ path ];
                        TEMPLETE_LIST[ path ] = templete;
                        pageOptions.TEMPLETE = basePath = path; // toRootRelativeURL
                        /** @suppress {checkTypes} */
                        pageOptions = NicePageBuilder.util.getOptions( templete );
                        if( pageOptions ){
                            checkMixins( basePath, pageOptions.MIXINS, !!pageOptions.TEMPLETE );
                            /** @suppress {checkTypes} */
                            templetePath = pageOptions.TEMPLETE;
                        } else {
                            break;
                        };
                    } else if( TEMPLETE_LIST[ path ] ){
                        pageOptions.TEMPLETE = path;
                        break;
                    } else if( NicePageBuilder.DEFINE.DEBUG ){
                        throw 'Templete:"' + path + '" required by "' + basePath + '" does not exist!';
                    };
                };
            };

        // 使用していない TEMPLETE と MIXIN を削除
            for( const mixinPath in MIXIN_LIST ){
                const mixin = MIXIN_LIST[ mixinPath ];
                if( mixin.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){
                    if( NicePageBuilder.DEFINE.DEBUG ){
                        console.log( 'Unused mixin found! ' + mixinPath );
                    };
                    delete MIXIN_LIST[ mixinPath ];
                } else {
                    mixin.pop(); // delete used flag
                };
            };

            for( const pageOrTempletePath in PAGES_OR_TEMPLETES ){
                const pageOrTemplete = PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                const htmlJson       = NicePageBuilder.util.getHTMLJson( pageOrTemplete );

                if( pageOrTemplete.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){ // NicePageBuilder.NicePageOrTemplete[4] use templete == false
                    if( NicePageBuilder.util.getSLotElement( htmlJson, false ) ){
                        if( NicePageBuilder.DEFINE.DEBUG ){
                            console.log( 'Unused templete found! ' + pageOrTempletePath );
                        };
                        delete PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                    };
                };
            };

        // 書出し
            const self = this;
            const ALL_PAGES   = {};
            const ALL_PAGE_OPTIONS = {};

            writeFile( context.allMixinsPath, MIXIN_LIST );
            writeFile( context.allTempletesPath, TEMPLETE_LIST );

            for( const rootRelativeURL in PAGE_LIST ){
                const nicePage = PAGE_LIST[ rootRelativeURL ];
                const filePath = context.path.urlToFilePath( rootRelativeURL );
                delete PAGE_LIST[ rootRelativeURL ];

                const htmlJson = nicePage[ NicePageBuilder.INDEXES.HTML_JSON ];

                let pageOptions = htmlJson[ 0 ];
                pageOptions = !m_isArray( pageOptions ) && m_isObject( pageOptions ) ? pageOptions : {};
                pageOptions.URL         = rootRelativeURL;
                pageOptions.CREATED_AT  = /** @type {number} */ (nicePage[ NicePageBuilder.INDEXES.CREATED_AT ]);
                pageOptions.MODIFIED_AT = /** @type {number} */ (nicePage[ NicePageBuilder.INDEXES.UPDATED_AT ]);

                if( pageOptions !== htmlJson[ 0 ] ){
                    htmlJson.unshift( pageOptions );
                };

                writeFile( filePath + '.json', htmlJson );

                delete pageOptions.URL;
                ALL_PAGES       [ rootRelativeURL ] = htmlJson;
                ALL_PAGE_OPTIONS[ rootRelativeURL ] = pageOptions;
            };

            if( context.allPagesPath ){
                writeFile( context.allPagesPath, ALL_PAGES );
            };

            context.allPageOptions = ALL_PAGE_OPTIONS;

            if( context.allPageOptionsPath ){
                writeFile( context.allPageOptionsPath, ALL_PAGE_OPTIONS );
            };

            callback();

            function writeFile( filePath, json ){
                const file = new _Vinyl(
                    {
                        base     : '/',
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