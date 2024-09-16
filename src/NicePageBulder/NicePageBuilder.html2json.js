goog.provide( 'NicePageBuilder.html2json' );
goog.provide( '__NicePageBuilder_internal__.html2json' );

goog.require( 'html2json' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.SourceRootRelativePath' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.INDEXES' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.require( 'NicePageBuilder.util.getJsonScriptElement' );
goog.require( 'NicePageBuilder.util.getSLotElement' );

/** @private */
NicePageBuilder.html2json = true;

/**
 * @package
 * @this {NicePageBuilder.Context}
 *
 * @param {string} htmlString
 * @param {boolean} allowInvalidTree
 * @param {!Object=} opt_options
 * @return {!Array}
 */
__NicePageBuilder_internal__.html2json = function( htmlString, allowInvalidTree, opt_options ){
    const htmlJson = html2json( htmlString, allowInvalidTree, opt_options )

    const result = NicePageBuilder.util.getJsonScriptElement( /** @type {!Array} */ (htmlJson) );

    if( result ){
        const scriptJSONNode = /** @type {!Array} */ (result[ 0 ]);
        const parentJSONNode = /** @type {!Array} */ (result[ 1 ]);

        let myIndex = /** @type {number} */ (result[ 2 ]);

        parentJSONNode.splice( myIndex, 1 );

        // [ 11, [ 'SCRIPT', {}, {...} ], [ 'p' ] ]
        // ↓
        // [ {...}, [ 'p' ] ]

        // [ 9, 'xhtml', [ 'SCRIPT', {}, {...} ], [ 'p' ] ]
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

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!Object=} options
 */
__NicePageBuilder_internal__._html2jsonGulpPlugin = function( options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.html2json',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @type {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.NicePageOrTemplete>} */
    const PAGES_OR_TEMPLETES = {};

    /** @type {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.NicePageOrTemplete>} */
    const TEMPLETE_LIST = {};

    /** @type {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.Mixin>} */
    const MIXIN_LIST = {};

    return through.obj(
        /**
         * @this {stream.Writable}
         * @param {!Vinyl} file
         * @param {string} encoding
         * @param {function()} callback
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
    
            const contents         = file.contents.toString( encoding ),
                  createdTimeMs    = parseInt( file.stat.birthtimeMs, 10 ),
                  updatedTimeMs    = parseInt( file.stat.ctimeMs, 10 ),
                  rootRelativePath = context.path.absoluteFilePathToSrcRootRelativeFilePath( filePath );

            switch( file.extname ){
                case '.html'  :
                case '.htm'   :
                case '.xhtml' :
                case '.php'   :
                    const htmlJson = __NicePageBuilder_internal__.html2json.call( context, contents, false, options );

                    PAGES_OR_TEMPLETES[ rootRelativePath ] = [ htmlJson, createdTimeMs, updatedTimeMs ];
                    break;
                case '.json' :
                    const mixinJson = JSON.parse( contents );

                    if( m_isObject( mixinJson ) ){
                        MIXIN_LIST[ rootRelativePath ] = [ /** @type {!NicePageBuilder.NicePageOptions} */ (mixinJson), createdTimeMs, updatedTimeMs ];
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
             * @param {!Array.<NicePageBuilder.SourceRootRelativePath> | void} mixinPathList
             * @param {boolean} skipTemplete
             * @param {boolean} skipMixins
             */
            function checkMixins( pageOrTempletePath, mixinPathList, skipTemplete, skipMixins ){
                if( mixinPathList ){
                    for( let i = 0, l = mixinPathList.length; i < l; ++i ){
                        const mixinPath = mixinPathList[ i ];
                        const path      = context.path.toSrcRootRelativeFilePath( pageOrTempletePath, mixinPath );
                        const mixin     = MIXIN_LIST[ path ];
                        
                        mixinPathList[ i ] = path; // toSrcRootRelativeFilePath
                        if( mixin && mixin.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){
                            mixin.push( true ); // used
                            const mixinOptions = /** @type {!NicePageBuilder.NicePageOptions} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_OPTIONS ]);
                            if( !skipMixins ){
                                checkMixins( path, mixinOptions.MIXINS, skipTemplete, true );
                            } else {
                                if( mixinOptions.MIXINS ){
                                    if( NicePageBuilder.DEFINE.DEBUG ){
                                        console.log( 'Mixin:"' + path + '" cannot have MIXINS property!' );
                                    };
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
             * @param {!NicePageBuilder.NicePageOptions} pageOptions
             */
            function checkTemplete( pageOrTempletePath, templetePath, pageOptions ){
                while( templetePath ){
                    const path     = context.path.toSrcRootRelativeFilePath( pageOrTempletePath, templetePath );
                    const templete = PAGES_OR_TEMPLETES[ path ];

                    if( templete ){
                        delete PAGES_OR_TEMPLETES[ path ];
                        TEMPLETE_LIST[ path ] = templete;
                        pageOptions.TEMPLETE = pageOrTempletePath = path; // toSrcRootRelativeFilePath
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
                if( mixin.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){
                    if( NicePageBuilder.DEFINE.DEBUG ){
                        console.log( 'Unused mixin found! ' + mixinPath );
                    };
                    delete MIXIN_LIST[ mixinPath ];
                };
            };

            for( const pageOrTempletePath in PAGES_OR_TEMPLETES ){
                const pageOrTemplete = PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                const htmlJson       = NicePageBuilder.util.getHTMLJson( pageOrTemplete );

                if( pageOrTemplete.length === NicePageBuilder.INDEXES.UPDATED_AT + 1 ){ // NicePageBuilder.NicePageOrTemplete[4] use templete == false
                    if( NicePageBuilder.util.getSLotElement( htmlJson ) ){
                        if( NicePageBuilder.DEFINE.DEBUG ){
                            console.log( 'Unused templete found! ' + pageOrTempletePath );
                        };
                        delete PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                    };
                };
            };

        // 書出し
            const self = this;

            if( context.allPagesPath ){
                writeFile( context.allPagesPath, PAGE_LIST );
            };
            writeFile( context.allMixinsPath, MIXIN_LIST );
            writeFile( context.allTempletesPath, TEMPLETE_LIST );

            for( const filePath in PAGE_LIST ){
                const nicePage = PAGE_LIST[ filePath ];
                delete PAGE_LIST[ filePath ];

                const htmlJson     = nicePage[ NicePageBuilder.INDEXES.HTML_JSON ];
                // const pathElements = filePath.split( '/' );

                let pageOptions = htmlJson[ 0 ];
                pageOptions = !m_isArray( pageOptions ) && m_isObject( pageOptions ) ? pageOptions : {};
                pageOptions.FILE_PATH   = filePath;
                // pageOptions.FILE_NAME   = pathElements.pop();
                // pageOptions.FOLDER_PATH = pathElements.join( '/' );
                // pageOptions.URL         = NicePageBuilder.util.filePathToURL( filePath );
                pageOptions.CREATED_AT  = /** @type {number} */ (nicePage[ NicePageBuilder.INDEXES.CREATED_AT ]);
                pageOptions.MODIFIED_AT = /** @type {number} */ (nicePage[ NicePageBuilder.INDEXES.UPDATED_AT ]);

                if( pageOptions !== htmlJson[ 0 ] ){
                    htmlJson.unshift( pageOptions );
                };

                writeFile( filePath + '.json', htmlJson );
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