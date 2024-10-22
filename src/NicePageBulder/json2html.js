goog.provide( 'NicePageBuilder.json2html' );
goog.provide( '__NicePageBuilder_internal__.json2html' );

goog.require( 'json2html.main' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.requireType( 'InstructionHandler' );
goog.requireType( 'EnterNodeHandler' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplate' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.require( 'NicePageBuilder.transform' );
goog.require( 'NicePageBuilder.PageContext.bindToInstructuionHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToEnterNodeHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToErrorHandler' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.util.isPrebuild' );

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata} htmlJson 破壊
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {string} html string
 */
__NicePageBuilder_internal__.json2html = function( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    if( NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
        const metadata = htmlJson.shift();

        if( NicePageBuilder.DEFINE.DEBUG ){
            if( NicePageBuilder.util.isPrebuild( metadata ) ){
                throw this.path.urlToFilePath( metadata.URL ) + ' is not complete document! Use nicePageBuilder.builder() before json2html().';
            };
        };

        const pageContext = new NicePageBuilder.PageContext( this, metadata.URL );

        opt_onInstruction = NicePageBuilder.PageContext.bindToInstructuionHandler( pageContext, opt_onInstruction, false );
        opt_onEnterNode   = NicePageBuilder.PageContext.bindToEnterNodeHandler( pageContext, opt_onEnterNode, false );
        opt_onError       = NicePageBuilder.PageContext.bindToErrorHandler( pageContext, opt_onError );
    };
    
    const htmlString = json2html.main( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options );

    return htmlString || '';
};

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2htmlGulpPlugin = function( opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.json2html',
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @const {!Array.<string | !HTMLJson | !HTMLJsonWithMetadata>} */
    const PAGE_FILE_LIST = [];

    return through.obj(
        NicePageBuilder.transform( context, pluginName, false, m_isArray, null,
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

            while( PAGE_FILE_LIST.length ){
                const filePath         = PAGE_FILE_LIST.shift();
                const htmlJson         = /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (PAGE_FILE_LIST.shift());
                const filePathElements = filePath.split( '.json' );

                filePathElements.pop();

                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : filePathElements.join( '.json' ),
                            contents : Buffer.from( __NicePageBuilder_internal__.json2html.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ) )
                        }
                    )
                );
            };
            callback();
        }
    );
};