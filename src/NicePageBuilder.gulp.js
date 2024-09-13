goog.provide( 'NicePageBuilder.gulp' );

goog.require( 'htmljson.base' );
goog.require( 'NicePageBuilder.module' );
goog.require( 'NicePageBuilder.srcRootPath' );
goog.require( 'NicePageBuilder.util.normalizePath' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.requireType( 'NicePageOptions' );
goog.requireType( 'NicePageOrTemplete' );
goog.requireType( 'Mixin' );
goog.requireType( 'sourceRootRelativePath' );
goog.require( 'getJsonScriptElement' );
goog.require( 'getSLotElement' );

NicePageBuilder.gulp = function( _options ){
    const pluginName  = 'gulp-nice-page-builder',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     ),
          Path        = require( 'path'         );

    const options         = _options || {},
          allPagesPath    = options[ 'allPagesPath' ],
          allMixinPath    = options[ 'allMixinPath' ],
          allTempletePath = options[ 'allTempletePath' ],
          srcRootPath     = NicePageBuilder.util.normalizePath( Path.resolve( options[ 'srcRootPath' ] || './' ) ) + '/'; // 'src' -> 'C://XX/XX/MyWebSiteProject/src/'

    /** @type {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} */
    const PAGES_OR_TEMPLETES = {};

    /** @type {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} */
    const TEMPLETE_LIST = {};

    /** @type {!Object.<sourceRootRelativePath, !Mixin>} */
    const MIXIN_LIST = {};

    NicePageBuilder.srcRootPath = srcRootPath;

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
            if( file.extname !== '.json' ){
                this.push( file );
                return callback();
            };
            if( filePath.indexOf( srcRootPath ) !== 0 ){
                this.emit( 'error', new PluginError( pluginName, '"' + filePath + '" is outside of srcRootPath:"' + options.srcRootPath + '"' ) );
                return callback();
            };
    
            const json             = JSON.parse( file.contents.toString( encoding ) ),
                  createdTimeMs    = parseInt( file.stat.birthtimeMs, 10 ),
                  updatedTimeMs    = parseInt( file.stat.ctimeMs, 10 ),
                  rootRelativePath = NicePageBuilder.util.absolutePathToSrcRootRelativePath( filePath );
    
            if( m_isArray( json ) ){
                const result = getJsonScriptElement( /** @type {!Array} */ (json) );

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
                            json.unshift( options );
                        };
                    };
                };
                PAGES_OR_TEMPLETES[ NicePageBuilder.util.htmlJsonfilePathToHtmlFilePath( rootRelativePath ) ] = [ json, createdTimeMs, updatedTimeMs ];
            } else if( m_isObject( /** @type {!NicePageOptions} */ (json) ) ){
                MIXIN_LIST[ rootRelativePath ] = [ json, createdTimeMs, updatedTimeMs ];
            } else {
                // error
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

                checkMixins( pageOrTempletePath, pageOptions.MIXINS );
                checkTemplete( pageOrTempletePath, pageOptions.TEMPLETE, pageOptions );

                if( PAGES_OR_TEMPLETES[ pageOrTempletePath ] ){
                    pageOrTemplete.push( true ); // isPage
                };
            };

            function toSourceRootRelativePath( basePath, filePath ){
                return NicePageBuilder.util.isRelativePath( filePath ) ? NicePageBuilder.util.relativePathToSrcRootRelativePath( basePath, filePath ) : filePath;
            };

            /**
             * @param {string} pageOrTempletePath
             * @param {!Array.<sourceRootRelativePath> | void} mixinPathList
             */
            function checkMixins( pageOrTempletePath, mixinPathList ){
                if( mixinPathList ){
                    for( let i = 0, l = mixinPathList.length; i < l; ++i ){
                        const mixinPath = mixinPathList[ i ];
                        const path      = toSourceRootRelativePath( pageOrTempletePath, mixinPath );
                        const mixin     = MIXIN_LIST[ path ];
                        
                        mixinPathList[ i ] = path; // toSourceRootRelativePath
                        if( mixin && mixin.length === STAT_INDEXES.UPDATED_AT + 1 ){
                            mixin.push( true ); // used
                            const mixinOptions = /** @type {!NicePageOptions} */ (mixin[ STAT_INDEXES.MIXIN_OPTIONS ]);
                            checkMixins( path, mixinOptions.MIXINS );
                            checkTemplete( path, mixinOptions.TEMPLETE, mixinOptions );
                        } else if( !mixin ){
                            throw pageOrTempletePath + ' が要求する ' + path + ' が読み込まれていません!';
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
                            checkMixins( pageOrTempletePath, pageOptions.MIXINS );
                            /** @suppress {checkTypes} */
                            templetePath = pageOptions.TEMPLETE;
                        } else {
                            break;
                        };
                    } else if( !TEMPLETE_LIST[ path ] ){
                        throw pageOrTempletePath + ' が要求する ' + path + ' が読み込まれていません!';
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
                    // if( JSON.stringify( htmlJson ).indexOf( '"slot"' ) !== -1 ){ // mybe contains <slot>
                        if( getSLotElement( htmlJson ) ){
                            if( NicePageBuilder.DEFINE.DEBUG ){
                                console.log( 'Unused templete found! ' + pageOrTempletePath );
                            };
                            delete PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                        };
                    // };
                };
            };

        // 書出し
            if( allPagesPath ){
                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : allPagesPath,
                            contents : Buffer.from( JSON.stringify( PAGE_LIST ) )
                        }
                    )
                );
            };
            for( const filePath in PAGE_LIST ){
                const nicePage = PAGE_LIST[ filePath ];

                delete PAGE_LIST[ filePath ];

                const htmlJson = NicePageBuilder(
                        /** @type {!Array} */ (nicePage[ STAT_INDEXES.HTML_JSON  ]),
                        /** @type {number} */ (nicePage[ STAT_INDEXES.CREATED_AT ]),
                        /** @type {number} */ (nicePage[ STAT_INDEXES.UPDATED_AT ]),
                        filePath,
                        TEMPLETE_LIST, MIXIN_LIST
                    );
                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : filePath + '.json',
                            contents : Buffer.from( JSON.stringify( htmlJson ) )
                        }
                    )
                );
            };

            if( allMixinPath ){
                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : allMixinPath,
                            contents : Buffer.from( JSON.stringify( MIXIN_LIST ) )
                        }
                    )
                );
            };
            if( allTempletePath ){
                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : allTempletePath,
                            contents : Buffer.from( JSON.stringify( TEMPLETE_LIST ) )
                        }
                    )
                );
            };
            callback();
        }
    );
};