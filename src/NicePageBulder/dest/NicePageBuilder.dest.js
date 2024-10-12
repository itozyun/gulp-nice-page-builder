// .dest( ALL_OPTIONS | MIXINS | TEMPLETES )

goog.provide( 'NicePageBuilder.dest' );

goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );

/**
 * @enum {number}
 */
var DEST_TARGET = {
    ALL_MIXINS         :  1,
    ALL_TEMPLETS       :  2,
    ALL_PAGES_METADATA :  4,
    ALL_PAGES_DATA     :  8,
    ALL_APPENDIXES     : 16
};

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {number} destTargets
 */
__NicePageBuilder_internal__._destGulpPlugin = function( destTargets ){
    const context = this;

    const _Vinyl  = require( 'vinyl'    ),
          through = require( 'through2' );

    return through.obj(
        null,
        /**
         * @this {stream.Writable}
         * @param {function()} callback
         */
        function( callback ){
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

            // TODO dest
            if( destTargets & DEST_TARGET.ALL_MIXINS ){
                writeFile( context.allMixinsPath, context.mixins );
            };
            if( destTargets & DEST_TARGET.ALL_TEMPLETS ){
                writeFile( context.allTempletesPath, context.templetes );
            };
            if( destTargets & DEST_TARGET.ALL_PAGES_METADATA ){
                writeFile( context.allPageOptionsPath, context.allPageOptions );
            };
            if( destTargets & DEST_TARGET.ALL_PAGES_DATA ){
                writeFile( context.allPagesPath, context.allPages );
            };
            if( destTargets & DEST_TARGET.ALL_APPENDIXES ){
                for( const filePath in context._jsonList ){
                    this.push(
                        new _Vinyl(
                            {
                                base     : '/',
                                path     : filePath,
                                contents : Buffer.from( JSON.stringify( context._jsonList[ filePath ] ) )
                            }
                        )
                    );
                };
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
