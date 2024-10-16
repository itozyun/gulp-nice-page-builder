// .dest( ALL_OPTIONS | MIXINS | TEMPLETES )

goog.provide( 'NicePageBuilder.dest' );

goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );

/**
 * @enum {number}
 */
var DEST_TARGET = {
    ALL_MIXINS         :  1,
    ALL_TEMPLETS       :  2,
    ALL_PAGES_METADATA :  4,
    ALL_APPENDIXES     :  8,
    ALL_PAGES_DATA     : 16
};

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {number} destTargets
 */
__NicePageBuilder_internal__._destGulpPlugin = function( destTargets ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.dest',
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );
    return through.obj(
        /**
         * @this {stream.Writable}
         * @param {!Vinyl} file
         * @param {string} encoding
         * @param {function(Error=, Vinyl=)} callback
         */
        function( file, encoding, callback ){
            return callback( null, file );
        },
        /**
         * @this {stream.Writable}
         * @param {function()} callback
         */
        function( callback ){
            function sortByURL( obj ){
                const _obj = {};
                const urlList = Object.keys( obj ).sort();

                while( urlList.length ){
                    const rootRelativeURL = urlList.shift();

                    _obj[ rootRelativeURL ] = obj[ rootRelativeURL ];
                };
                return _obj;
            };
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

            const self = this;

            if( destTargets & DEST_TARGET.ALL_MIXINS ){
                writeFile( context.allMixinsPath, sortByURL( context.mixins ) );
            };
            if( destTargets & DEST_TARGET.ALL_TEMPLETS ){
                writeFile( context.allTempletesPath, sortByURL( context.templetes ) );
            };
            if( destTargets & DEST_TARGET.ALL_PAGES_METADATA ){
                const metadataOfAllPages = {};

                for( const rootRelativeURL in context.metadataOfAllPages ){
                    const metadata = metadataOfAllPages[ rootRelativeURL ] = context.unmergeMetadata( context.metadataOfAllPages[ rootRelativeURL ] );

                    delete metadata.URL;
                };
                writeFile( context.metadataOfAllPagesPath, sortByURL( metadataOfAllPages ) );
            };
            if( destTargets & DEST_TARGET.ALL_APPENDIXES ){
                for( const filePath in context.allAppendixes ){
                    this.push(
                        new _Vinyl(
                            {
                                path     : filePath,
                                contents : Buffer.from( JSON.stringify( context.allAppendixes[ filePath ] ) )
                            }
                        )
                    );
                };
            };
            if( destTargets & DEST_TARGET.ALL_PAGES_DATA ){
                for( const rootRelativeURL in context.allPages ){
                    const htmlJson = context.allPages[ rootRelativeURL ];

                    if( NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
                        htmlJson[ 0 ] = context.unmergeMetadata( htmlJson[ 0 ] );
                        delete htmlJson[ 0 ].URL;
                    };
                };
                writeFile( context.allPagesPath, sortByURL( context.allPages ) );
            };
            callback();
        }
    );
};

__NicePageBuilder_internal__._destGulpPlugin.ALL_MIXINS         = DEST_TARGET.ALL_MIXINS;
__NicePageBuilder_internal__._destGulpPlugin.ALL_TEMPLETS       = DEST_TARGET.ALL_TEMPLETS;
__NicePageBuilder_internal__._destGulpPlugin.ALL_PAGES_METADATA = DEST_TARGET.ALL_PAGES_METADATA;
__NicePageBuilder_internal__._destGulpPlugin.ALL_PAGES_DATA     = DEST_TARGET.ALL_PAGES_DATA;
__NicePageBuilder_internal__._destGulpPlugin.ALL_APPENDIXES     = DEST_TARGET.ALL_APPENDIXES;
