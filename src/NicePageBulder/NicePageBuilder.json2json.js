goog.provide( 'NicePageBuilder.json2json' );
goog.provide( '__NicePageBuilder_internal__.json2json' );

goog.require( 'json2json' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( 'NicePageBuilder.bindNicePageContextToInstructuionHandler' );
goog.require( 'NicePageBuilder.bindNicePageContextToEnterNodeHandler' );
goog.require( 'NicePageBuilder.bindNicePageContextToDocumentReadyHandler' );
goog.require( 'NicePageBuilder.bindNicePageContextToErrorHandler' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithOptions' );
goog.require( 'NicePageBuilder.util.hasTEMPLETEProperty' );
goog.require( 'NicePageBuilder.util.hasMIXINSProperty' );
goog.require( 'NicePageBuilder.util.mergeOptions' );

/** @private */
NicePageBuilder.json2json = true;

/**
 * @package
 * @this {NicePageBuilder.Context}
 *
 * @param {!HTMLJson | !HTMLJsonWithOptions} htmlJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(string)=} opt_onError
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
__NicePageBuilder_internal__.json2json = function( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    let pageOptions;

    if( NicePageBuilder.util.isHTMLJsonWithOptions( htmlJson ) ){
        const context = this;

        pageOptions         = htmlJson.shift();
        opt_onInstruction   = NicePageBuilder.bindNicePageContextToInstructuionHandler( context, pageOptions, opt_onInstruction );
        opt_onEnterNode     = NicePageBuilder.bindNicePageContextToEnterNodeHandler( context, pageOptions, opt_onEnterNode );
        opt_onDocumentReady = NicePageBuilder.bindNicePageContextToDocumentReadyHandler( context, pageOptions, opt_onDocumentReady );
        opt_onError         = NicePageBuilder.bindNicePageContextToErrorHandler( context, pageOptions, opt_onError );

        // TEMPLETE, MIXINS がいる場合、全てのプロパティのマージが終わっていない
        if( NicePageBuilder.util.hasTEMPLETEProperty( pageOptions ) || NicePageBuilder.util.hasMIXINSProperty( pageOptions ) ){
            NicePageBuilder.util.mergeOptions( pageOptions, [], context.templetes, context.mixins, opt_onError );
        };
    };

    const isStaticWebPage = json2json( /** @type {!HTMLJson} */ (htmlJson), opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );

    if( pageOptions ){
        htmlJson.unshift( pageOptions );
    };

    return isStaticWebPage;
};

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(string)=} opt_onError
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2jsonGulpPlugin = function( opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.json2json',
          PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     );

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

            const originalExtname = file.stem.split( '.' ).pop();

            switch( originalExtname ){
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    const htmlJson = /** @type {!HTMLJson | !HTMLJsonWithOptions} */ (JSON.parse( file.contents.toString( encoding ) ));

                    __NicePageBuilder_internal__.json2json.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );


                    file.contents = Buffer.from( JSON.stringify( htmlJson ) );
                    break;
                case context.keywordTempletes :
                    var json = JSON.parse( file.contents.toString( encoding ) );

                    if( !m_isArray( json ) && m_isObject( json ) ){
                        if( context.templetes && JSON.stringify( context.templetes ) !== JSON.stringify( json ) ){
                            console.log( pluginName + ' templete list changed!' );
                        };
                        /** @suppress {checkTypes} */
                        context.templetes = json;
                    };
                    break;
                case context.keywordMixins :
                    var json = JSON.parse( file.contents.toString( encoding ) );

                    if( !m_isArray( json ) && m_isObject( json ) ){
                        if( context.mixins && JSON.stringify( context.mixins ) !== JSON.stringify( json ) ){
                            console.log( pluginName + ' templete list changed!' );
                        };
                        /** @suppress {checkTypes} */
                        context.mixins = json;
                    };
                    break;
            };
            this.push( file );
            callback();
        },
        function( callback ){
            /* const _Vinyl = require( 'vinyl' );
            const file = new _Vinyl(
                    {
                        base     : '/',
                        path     : dynamicPagesPath,
                        contents : Buffer.from( JSON.stringify( dynamicPageList ) )
                    }
                );
            file.extname = '.json';
            this.push( file ); */
            callback();
        }
    );
};