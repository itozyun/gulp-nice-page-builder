goog.provide( 'NicePageBuilder.json2json' );
goog.provide( '__NicePageBuilder_internal__.json2json' );

goog.require( 'json2json.main' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'VNode' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.requireType( 'InstructionHandler' );
goog.requireType( 'EnterNodeHandler' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplate' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.require( 'NicePageBuilder.PageContext.bindToInstructuionHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToEnterNodeHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToDocumentReadyHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToErrorHandler' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.transform' );

/**
 * @this {NicePageBuilder.Context}
 *
 * @param {!HTMLJson | !HTMLJsonWithMetadata} htmlJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
__NicePageBuilder_internal__.json2json = function( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const isTemplate = !!NicePageBuilder.util.getSLotElement( htmlJson, false );

    let metadata;

    if( NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
        let pageContext;

        metadata = htmlJson.shift();

        if( isTemplate ){
            pageContext = new NicePageBuilder.PageContext( this, metadata.URL, metadata );
        } else {
            metadata = this.getMergedMetadata( metadata, opt_onError );
            pageContext = new NicePageBuilder.PageContext( this, metadata.URL );
        };

        opt_onInstruction   = NicePageBuilder.PageContext.bindToInstructuionHandler( pageContext, opt_onInstruction, false );
        opt_onEnterNode     = NicePageBuilder.PageContext.bindToEnterNodeHandler( pageContext, opt_onEnterNode, false );
        opt_onDocumentReady = NicePageBuilder.PageContext.bindToDocumentReadyHandler( pageContext, opt_onDocumentReady );
        opt_onError         = NicePageBuilder.PageContext.bindToErrorHandler( pageContext, opt_onError );
    };

    const isStaticWebPage = json2json.main( /** @type {!HTMLJson} */ (htmlJson), opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );

    if( metadata ){
        if( isTemplate ){
            delete metadata.URL;
            htmlJson.unshift( metadata );
        } else {
            htmlJson.unshift( this.unmergeMetadata( metadata ) ); // 更新済の metadata から mergedProperties を削除したものを htmljson に戻す
        };
    };

    return isStaticWebPage;
};

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2jsonGulpPlugin = function( opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.json2json',
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    const processTemplates = opt_options && opt_options[ 'processTemplates' ];

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

            if( processTemplates ){
                for( const rootRelativePath in context.templates ){
                    const htmlJson = NicePageBuilder.util.getHTMLJson( context.templates[ rootRelativePath ] );

                    if( NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
                        htmlJson[ 0 ].URL = rootRelativePath;
                    };
                    __NicePageBuilder_internal__.json2json.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );
                };
            };

            while( PAGE_FILE_LIST.length ){
                const filePath = PAGE_FILE_LIST.shift();
                const htmlJson = /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (PAGE_FILE_LIST.shift());

                __NicePageBuilder_internal__.json2json.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );

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