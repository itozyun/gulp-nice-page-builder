goog.provide( 'NicePageBuilder.builder' );
goog.provide( '__NicePageBuilder_internal__.builder' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplate' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.util.completePage' );

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata} htmlJson
 * @return {!HTMLJson | !HTMLJsonWithMetadata}
 */
__NicePageBuilder_internal__.builder = function( htmlJson ){
    if( !NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
        return htmlJson;
    };

    return NicePageBuilder.util.completePage( this, htmlJson );
};

/**
 * @this {NicePageBuilder.Context}
 */
__NicePageBuilder_internal__._builderGulpPlugin = function(){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.builder',
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @const {!Array.<string | !HTMLJson | !HTMLJsonWithMetadata>} */
    const PAGE_FILE_LIST = [];
    
    return through.obj(
        NicePageBuilder.transform( context, pluginName, false, NicePageBuilder.util.isHTMLJsonWithMetadata, null,
            function( rootRelativeURL, htmlJson ){
                PAGE_FILE_LIST.push( rootRelativeURL, htmlJson );
            }
        ),
        /**
         * @this {stream.Writable}
         * @param {function()} callback
         */
        function( callback ){
            context.storeMetadataOfNewPages( PAGE_FILE_LIST );

        // 書出し
            while( PAGE_FILE_LIST.length ){
                const filePath = PAGE_FILE_LIST.shift();
                const htmlJson = __NicePageBuilder_internal__.builder.call( context, /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (PAGE_FILE_LIST.shift()) );

                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : filePath,
                            contents : Buffer.from( JSON.stringify( htmlJson ) )
                        }
                    )
                );
            };

            callback();
        }
    );
};