goog.provide( 'NicePageBuilder.html2json' );
goog.provide( 'NicePageBuilder.html2json.gulp' );

goog.require( 'html2json' );
goog.require( 'NicePageBuilder.module' );
goog.require( 'NicePageBuilder.srcRootPath' );
goog.require( 'NicePageBuilder.util.normalizePath' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.requireType( 'NicePageOptions' );
goog.requireType( 'NicePageOrTemplete' );
goog.requireType( 'Mixin' );
goog.requireType( 'sourceRootRelativePath' );
goog.require( 'STAT_INDEXES' );
goog.require( 'getJsonScriptElement' );
goog.require( 'getSLotElement' );

/**
 * @param {string} htmlString
 * @param {boolean} allowInvalidTree
 * @param {!Object=} opt_options
 * @return {!Array}
 */
NicePageBuilder.html2json = function( htmlString, allowInvalidTree, opt_options ){
    const htmlJson = html2json( htmlString, allowInvalidTree, opt_options )

    const result = getJsonScriptElement( /** @type {!Array} */ (htmlJson) );

    if( result ){
        const scriptJSONNode = /** @type {!Array} */ (result[ 0 ]);
        const parentJSONNode = /** @type {!Array} */ (result[ 1 ]);

        let myIndex = /** @type {number} */ (result[ 2 ]);

        parentJSONNode.splice( myIndex, 1 );

        // [ 11, [ 'script', {}, {...} ], [ 'p' ] ]
        // ↓
        // [ {...}, [ 'p' ] ]

        // [ 9, 'xhtml', [ 'script', {}, {...} ], [ 'p' ] ]
        // ↓
        // [ {...}, 9, 'xhtml', [ 'p' ] ]
        if( scriptJSONNode && scriptJSONNode.length === 3 ){
            const options = eval( '(' + scriptJSONNode[ 2 ] + ');' ); // TODO JSON.parse()

            if( !m_isArray( options ) && m_isObject( options ) ){
                htmlJson.unshift( options );
            };
        };
    };
    return htmlJson;
};

NicePageBuilder.html2json.gulp = function( _options ){
    function toAbsolutePath( filePath ){
        return NicePageBuilder.util.normalizePath( Path.resolve( filePath ) );
    };

    function toSourceRootRelativePath( basePath, filePath ){
        return NicePageBuilder.util.isRelativePath( filePath ) ? NicePageBuilder.util.relativePathToSrcRootRelativePath( basePath, filePath ) : filePath;
    };

    const pluginName  = 'gulp-nice-page-builder',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     ),
          Path        = require( 'path'         );

    const options     = _options || {},
          srcRootPath = toAbsolutePath( options[ 'srcRootPath' ] || './' ) + '/'; // 'src' -> 'C://XX/XX/MyWebSiteProject/src/'

    NicePageBuilder.srcRootPath = srcRootPath;

    const allPagesPath     = options[ 'allPagesPath' ] &&
                             toSourceRootRelativePath( '/', options[ 'allPagesPath'     ]                          ),
          allMixinsPath    = toSourceRootRelativePath( '/', options[ 'allMixinsPath'    ] || 'all.mixins.json'    ),
          allTempletesPath = toSourceRootRelativePath( '/', options[ 'allTempletesPath' ] || 'all.templetes.json' );

    /** @type {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} */
    const PAGES_OR_TEMPLETES = {};

    /** @type {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} */
    const TEMPLETE_LIST = {};

    /** @type {!Object.<sourceRootRelativePath, !Mixin>} */
    const MIXIN_LIST = {};

    return through.obj(
        /**
         * @this {stream.Writable}
         * @param {!Vinyl} file
         * @param {string} encoding
         * @param {function()} callback
         */
        function( file, encoding, callback ){
            const filePath = NicePageBuilder.util.normalizePath( file.path );

            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };
            if( filePath.indexOf( srcRootPath ) !== 0 ){
                this.emit( 'error', new PluginError( pluginName, '"' + filePath + '" is outside of srcRootPath:"' + options.srcRootPath + '"' ) );
                return callback();
            };
    
            const contents         = file.contents.toString( encoding ),
                  createdTimeMs    = parseInt( file.stat.birthtimeMs, 10 ),
                  updatedTimeMs    = parseInt( file.stat.ctimeMs, 10 ),
                  rootRelativePath = NicePageBuilder.util.absolutePathToSrcRootRelativePath( filePath );

            switch( file.extname ){
                case '.html'  :
                case '.htm'   :
                case '.xhtml' :
                case '.php'   :
                    const htmlJson = NicePageBuilder.html2json( contents, false, options );

                    PAGES_OR_TEMPLETES[ rootRelativePath ] = [ htmlJson, createdTimeMs, updatedTimeMs ];
                    break;
                case '.json' :
                    const mixinJson = JSON.parse( contents );

                    if( m_isObject( mixinJson ) ){
                        MIXIN_LIST[ rootRelativePath ] = [ /** @type {!NicePageOptions} */ (mixinJson), createdTimeMs, updatedTimeMs ];
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

                let pageOptions = NicePageBuilder.util.getNiceOptions( pageOrTemplete );

                if( !pageOptions ){
                    continue;
                };

                checkMixins( pageOrTempletePath, pageOptions.MIXINS, !!pageOptions.TEMPLETE, false );
                checkTemplete( pageOrTempletePath, pageOptions.TEMPLETE, pageOptions );

                if( PAGES_OR_TEMPLETES[ pageOrTempletePath ] ){
                    pageOrTemplete.push( true ); // isPage
                };
            };

            /**
             * @param {string} pageOrTempletePath
             * @param {!Array.<sourceRootRelativePath> | void} mixinPathList
             * @param {boolean} skipTemplete
             * @param {boolean} skipMixins
             */
            function checkMixins( pageOrTempletePath, mixinPathList, skipTemplete, skipMixins ){
                if( mixinPathList ){
                    for( let i = 0, l = mixinPathList.length; i < l; ++i ){
                        const mixinPath = mixinPathList[ i ];
                        const path      = toSourceRootRelativePath( pageOrTempletePath, mixinPath );
                        const mixin     = MIXIN_LIST[ path ];
                        
                        mixinPathList[ i ] = path; // toSourceRootRelativePath
                        if( mixin && mixin.length === STAT_INDEXES.UPDATED_AT + 1 ){
                            mixin.push( true ); // used
                            const mixinOptions = /** @type {!NicePageOptions} */ (mixin[ STAT_INDEXES.MIXIN_OPTIONS ]);
                            if( !skipMixins ){
                                checkMixins( path, mixinOptions.MIXINS, skipTemplete, true );
                            } else {
                                if( mixinOptions.MIXINS ){
                                    console.log( 'Mixin:"' + path + '" cannot have MIXINS property!' );
                                    delete mixinOptions.MIXINS;
                                };
                            };
                            if( !skipTemplete ){
                                checkTemplete( path, mixinOptions.TEMPLETE, mixinOptions );
                            };
                        } else if( !mixin ){
                            throw 'Mixin:"' + path + '" required by "' + pageOrTempletePath + '" does not exist!';
                        };
                    };
                };
            };

            /**
             * @param {string} pageOrTempletePath
             * @param {string | void} templetePath
             * @param {!NicePageOptions} pageOptions
             */
            function checkTemplete( pageOrTempletePath, templetePath, pageOptions ){
                while( templetePath ){
                    const path     = toSourceRootRelativePath( pageOrTempletePath, templetePath );
                    const templete = PAGES_OR_TEMPLETES[ path ];

                    if( templete ){
                        delete PAGES_OR_TEMPLETES[ path ];
                        TEMPLETE_LIST[ path ] = templete;
                        pageOptions.TEMPLETE = pageOrTempletePath = path; // toSourceRootRelativePath
                        /** @suppress {checkTypes} */
                        pageOptions = NicePageBuilder.util.getNiceOptions( templete );
                        if( pageOptions ){
                            checkMixins( pageOrTempletePath, pageOptions.MIXINS, !!pageOptions.TEMPLETE, false );
                            /** @suppress {checkTypes} */
                            templetePath = pageOptions.TEMPLETE;
                        } else {
                            break;
                        };
                    } else if( !TEMPLETE_LIST[ path ] ){
                        throw 'Templete:"' + path + '" required by "' + pageOrTempletePath + '" does not exist!';
                    } else {
                        break;
                    };
                };
            };

        // 使用していない TEMPLETE と MIXIN を削除
            for( const mixinPath in MIXIN_LIST ){
                const mixin = MIXIN_LIST[ mixinPath ];
                if( mixin.length === STAT_INDEXES.UPDATED_AT + 1 ){
                    if( NicePageBuilder.DEFINE.DEBUG ){
                        console.log( 'Unused mixin found! ' + mixinPath );
                    };
                    delete MIXIN_LIST[ mixinPath ];
                };
            };

            for( const pageOrTempletePath in PAGES_OR_TEMPLETES ){
                const pageOrTemplete = PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                const htmlJson       = NicePageBuilder.util.getHTMLJson( pageOrTemplete );

                if( pageOrTemplete.length === STAT_INDEXES.UPDATED_AT + 1 ){ // NicePageOrTemplete[4] use templete == false
                    if( getSLotElement( htmlJson ) ){
                        if( NicePageBuilder.DEFINE.DEBUG ){
                            console.log( 'Unused templete found! ' + pageOrTempletePath );
                        };
                        delete PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                    };
                };
            };

        // 書出し
            const self = this;

            if( allPagesPath ){
                writeFile( allPagesPath, PAGE_LIST );
            };
            writeFile( allMixinsPath, MIXIN_LIST );
            writeFile( allTempletesPath, TEMPLETE_LIST );

            for( const filePath in PAGE_LIST ){
                const nicePage = PAGE_LIST[ filePath ];
                delete PAGE_LIST[ filePath ];

                const htmlJson     = nicePage[ STAT_INDEXES.HTML_JSON ];
                const pathElements = filePath.split( '/' );

                let pageOptions = htmlJson[ 0 ];
                pageOptions = !m_isArray( pageOptions ) && m_isObject( pageOptions ) ? pageOptions : {};
                pageOptions.FILE_PATH   = filePath;
                // pageOptions.FILE_NAME   = pathElements.pop();
                // pageOptions.FOLDER_PATH = pathElements.join( '/' );
                // pageOptions.URL         = NicePageBuilder.util.filePathToURL( filePath );
                pageOptions.CREATED_AT  = /** @type {number} */ (nicePage[ STAT_INDEXES.CREATED_AT ]);
                pageOptions.MODIFIED_AT = /** @type {number} */ (nicePage[ STAT_INDEXES.UPDATED_AT ]);

                if( pageOptions !== htmlJson[ 0 ] ){
                    htmlJson.unshift( pageOptions );
                };

                writeFile( filePath + '.json', htmlJson );
            };

            callback();

            function writeFile( filePath, json ){
                const pathElements = filePath.split( '/' );
                pathElements.pop();

                const file = new _Vinyl(
                    {
                        base     : pathElements.join( '/' ) || '/',
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