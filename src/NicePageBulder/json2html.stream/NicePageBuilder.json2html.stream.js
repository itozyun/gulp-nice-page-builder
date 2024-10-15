goog.provide( 'NicePageBuilder.json2html.stream' );
goog.provide( '__NicePageBuilder_internal__.json2htmlStream' );

goog.requireType( 'Parser' );
goog.require( 'Parser.C' );
goog.require( 'json2html.stream' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'InstructionHandler' );
goog.requireType( 'EnterNodeHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToInstructuionHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToEnterNodeHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToErrorHandler' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.hasTEMPLETEProperty' );
goog.require( 'NicePageBuilder.util.hasMIXINSProperty' );

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {!Through}
 */
__NicePageBuilder_internal__.json2htmlStream = function( opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    const stream = json2html.stream( opt_onInstruction, opt_onEnterNode, opt_onError, opt_options );
    const parser = stream._parser;

    parser._onTokenForHTMLJson = parser.onToken;
    parser.onToken = onTokenForMeta;
    parser._context = this;
    parser._metadataPhase = 0;

    return stream;
};

/**
 * @private
 * @this {Parser}
 * @param {number} token 
 * @param {*} value 
 */
function onTokenForMeta( token, value ){
    function startHTMLJson(){
        self.onToken = self._onTokenForHTMLJson;
        delete self._onTokenForHTMLJson;
        delete self._context;
    };

    const self = this;

    // console.log( this._metadataPhase, value, this.currentValue, this.jsonStack.length )

    switch( this._metadataPhase ){
        case 0 :
            if( token === Parser.C.LEFT_BRACKET ){ // [
                this._metadataPhase = 1;
                this._onTokenForHTMLJson( token, value );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                this._onError( 'Not html.json format!' );
                this._stream.emit( 'error', 'Not html.json format!' );
            };
            break;
        case 1 :
            if( token === Parser.C.LEFT_BRACE ){ // {
                this._metadataPhase = 2;
                this._createValue( token, value );
            } else {
                startHTMLJson();
                this.onToken( token, value );
                break;
            };
            break;
        case 2 :
            if( token === Parser.C.RIGHT_BRACE && this.jsonStack.length === 1 ){ // }
                this._metadataPhase = 3;
                const metadata = /** @type {!NicePageBuilder.Metadata} */ (this.currentValue);
                this.currentValue = null;

                if( NicePageBuilder.DEFINE.DEBUG ){
                    if( NicePageBuilder.util.hasTEMPLETEProperty( metadata ) || NicePageBuilder.util.hasMIXINSProperty( metadata ) ){
                        throw this.path.urlToFilePath( metadata.URL ) + ' is not complete document! Use nicePageBuilder.builder() before json2html().';
                    };
                };
                /** @suppress {constantProperty} @const {InstructionHandler | void} */ this._onInstruction = NicePageBuilder.PageContext.bindToInstructuionHandler( this._context, metadata, this._onInstruction, true );
                /** @suppress {constantProperty} @const {EnterNodeHandler | void}   */ this._onEnterNode   = NicePageBuilder.PageContext.bindToEnterNodeHandler( this._context, metadata, this._onEnterNode, true );
                /**                     @const {function((string | !Error)) | void} */ this._onError       = NicePageBuilder.PageContext.bindToErrorHandler( this._context, metadata, this._onError );
            };
            this._createValue( token, value );
            break;
        case 3 :
            if( token === Parser.C.COMMA ){ // ,
                startHTMLJson();
            // } else if( token === Parser.C.RIGHT_BRACKET ){ // ]  // empty aray
            //    startHTMLJson();
            //    this.onToken( token, value );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                this._onError( 'Not html.json format!' );
                this._stream.emit( 'error', 'Not html.json format!' );
            };
    };
};
