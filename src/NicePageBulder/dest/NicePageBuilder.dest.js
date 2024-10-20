// .dest( ALL_OPTIONS | MIXINS | TEMPLATES )

goog.provide( 'NicePageBuilder.dest' );
goog.provide( 'NicePageBuilder.DEST_TARGET' );

goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );

/**
 * @enum {number}
 */
var DEST_TARGET = {
    ALL_MIXINS           :  1,
    ALL_TEMPLETS         :  2,
    ALL_PAGE_METADATA    :  4,
    ALL_ADDITIONAL_JSONS :  8,
    ALL_PAGES_DATA       : 16
};

NicePageBuilder.DEST_TARGET = DEST_TARGET;

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {number} destTargets
 * @param {boolean=} opt_prettify
 */
__NicePageBuilder_internal__._destGulpPlugin = function( destTargets, opt_prettify ){
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
                        contents : Buffer.from( JSON.stringify( json, null, opt_prettify ? '    ' : '' ) )
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
                writeFile( context.allTemplatesPath, sortByURL( context.templates ) );
            };
            if( destTargets & DEST_TARGET.ALL_PAGE_METADATA ){
                const allPageMetadata = {};

                for( const rootRelativeURL in context.allPageMetadata ){
                    const metadata = allPageMetadata[ rootRelativeURL ] = context.unmergeMetadata( context.allPageMetadata[ rootRelativeURL ] );

                    delete metadata.URL;
                };
                writeFile( context.allPageMetadataPath, sortByURL( allPageMetadata ) );
            };
            if( destTargets & DEST_TARGET.ALL_ADDITIONAL_JSONS ){
                for( const filePath in context.additionalJsons ){
                    this.push(
                        new _Vinyl(
                            {
                                path     : filePath,
                                contents : Buffer.from( JSON.stringify( context.additionalJsons[ filePath ] ) )
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
