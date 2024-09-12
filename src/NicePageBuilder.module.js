goog.provide( 'NicePageBuilder.gulp' );

goog.require( 'NicePageBuilder' );
goog.require( 'NicePageBuilder.srcRootPath' );
goog.require( 'NicePageBuilder.util.normalizePath' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.requireType( 'NicePageOptions' );
goog.requireType( 'NicePageOrTemplete' );
goog.requireType( 'Mixin' );
goog.requireType( 'sourceRootRelativePath' );

module.exports = function( _options ){
    const pluginName  = 'gulp-nice-page-builder',
          PluginError = require( 'plugin-error' ),
          Vinyl       = require( 'vinyl'        ),
          through     = require( 'through2'     ),
          Path        = require( 'path'         );

    const options     = _options || {},
          srcRootPath = NicePageBuilder.util.normalizePath( Path.resolve( options[ 'srcRootPath' ] || './' ) ) + '/'; // 'src' -> 'C://XX/XX/MyWebSiteProject/src/'

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
            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };
            if( file.extname !== '.json' ){
                this.push( file );
                return callback();
            };
            if( !file.path.indexOf( srcRootPath ) === 0 ){
                this.emit( 'error', new PluginError( pluginName, '"' + file.path + '" is outside of srcRootPath:"' + options.srcRootPath + '"' ) );
                return callback();
            };
    
            const json             = JSON.parse( file.contents.toString( encoding ) ),
                  createdTimeMs    = parseInt( file.stat.birthtimeMs, 10 ),
                  updatedTimeMs    = parseInt( file.stat.ctimeMs, 10 ),
                  rootRelativePath = NicePageBuilder.util.absolutePathToSrcRootRelativePath( file.path );
    
            if( Array.isArray( json ) ){
                PAGES_OR_TEMPLETES[ rootRelativePath ] = [ json, createdTimeMs, updatedTimeMs, updatedTimeMs ];
            } else if( json && typeof json === 'object' ){
                MIXIN_LIST[ rootRelativePath ] = [ json, createdTimeMs, updatedTimeMs, updatedTimeMs ];
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
                let templetePath = pageOptions.TEMPLETE;
        
                checkMixins( pageOptions.MIXINS );

                while( templetePath ){
                    const path     = NicePageBuilder.util.absolutePathToSrcRootRelativePath( templetePath, pageOrTempletePath );
                    const templete = PAGES_OR_TEMPLETES[ path ];

                    pageOptions.TEMPLETE = path; // toSourceRootRelativePath
                    if( templete ){
                        delete PAGES_OR_TEMPLETES[ path ];
                        TEMPLETE_LIST[ path ] = templete;
                        pageOrTemplete.push( true ); // use templete
                        pageOrTempletePath = path;
                        pageOptions = NicePageBuilder.util.getNiceOptions( templete );
                        if( pageOptions ){
                            templetePath = pageOptions.TEMPLETE;
                        };
                        checkMixins( pageOptions.MIXINS );
                    } else if( !TEMPLETE_LIST[ path ] ){
                        // error
                    };
                };

                /**
                 * @param {!Array.<sourceRootRelativePath>=} mixinPathList
                 */
                function checkMixins( mixinPathList ){
                    if( mixinPathList ){
                        for( let i = 0, l = mixinPathList.length; i < l; ++i ){
                            const mixinPath = mixinPathList[ i ];
                            const path = NicePageBuilder.util.absolutePathToSrcRootRelativePath( mixinPath, pageOrTempletePath );
                            const mixin = MIXIN_LIST[ path ];
                            
                            mixinPathList[ i ] = path; // toSourceRootRelativePath
                            if( mixin && mixin.length === 3 ){
                                mixin.push( true ); // used
                            } else if( !mixin ){
                                // error
                            };
                        };
                    };
                };
            };

        // 使用していない TEMPLETE と MIXIN を削除
            for( const mixinPath in MIXIN_LIST ){
                const mixin = MIXIN_LIST[ mixinPath ];
                if( mixin && mixin.length !== 4 ){
                    delete PAGES_OR_TEMPLETES[ mixinPath ];
                };
            };

            for( const pageOrTempletePath in PAGES_OR_TEMPLETES ){
                const pageOrTemplete = PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                const htmlJson       = NicePageBuilder.util.getHTMLJson( pageOrTemplete );

                if( pageOrTemplete.length === 3 ){ // NicePageOrTemplete[4] use templete == false
                    if( JSON.stringify( htmlJson ).indexOf( '"slot"' ) !== -1 ){ // mybe contains <slot>
                        if( containsSlotElement( htmlJson ) ){
                            delete PAGES_OR_TEMPLETES[ pageOrTempletePath ];
                        };
                    };
                };
            };

        // 書出し
            for( const pagePath in PAGE_LIST ){
                const htmlJson = NicePageBuilder( PAGE_LIST[ pagePath ], pagePath, TEMPLETE_LIST, MIXIN_LIST );

                this.push(
                    new Vinyl(
                        {
                            base     : '/',
                            path     : pagePath,
                            contents : Buffer.from( JSON.stringify( htmlJson ) )
                        }
                    )
                );
                delete PAGE_LIST[ pagePath ];
            };
            callback();
        }
    );
};