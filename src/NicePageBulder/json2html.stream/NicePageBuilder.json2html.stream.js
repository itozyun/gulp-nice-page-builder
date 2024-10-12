goog.provide( 'NicePageBuilder.json2html.stream' );
goog.provide( '__NicePageBuilder_internal__.json2htmlStream' );

goog.requireType( 'Parser' );
goog.require( 'Parser.C' );
goog.require( 'json2html.stream' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.require( 'NicePageBuilder.bindNicePageContextToInstructuionHandler' );
goog.require( 'NicePageBuilder.bindNicePageContextToEnterNodeHandler' );
goog.require( 'NicePageBuilder.bindNicePageContextToErrorHandler' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithOptions' );
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
    parser._readingMetaPhase = 0;

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

    // console.log( this._readingMetaPhase, value, this.currentValue, this.jsonStack.length )

    switch( this._readingMetaPhase ){
        case 0 :
            if( token === Parser.C.LEFT_BRACKET ){ // [
                this._readingMetaPhase = 1;
                this._onTokenForHTMLJson( token, value );
            } else {
                // error
                this._onError( 'Not html.json format!' );
                this._stream.emit( 'error', 'Not html.json format!' );
            };
            break;
        case 1 :
            if( token === Parser.C.LEFT_BRACE ){ // {
                this._readingMetaPhase = 2;
                this._createValue( token, value );
            } else {
                startHTMLJson();
                this.onToken( token, value );
                break;
            };
            break;
        case 2 :
            if( token === Parser.C.RIGHT_BRACE && this.jsonStack.length === 1 ){ // }
                this._readingMetaPhase = 3;
                const pageOptions = /** @type {!NicePageBuilder.NicePageOptions} */ (this.currentValue);
                this.currentValue = null;

                if( NicePageBuilder.DEFINE.DEBUG ){
                    if( NicePageBuilder.util.hasTEMPLETEProperty( pageOptions ) || NicePageBuilder.util.hasMIXINSProperty( pageOptions ) ){
                        throw this.path.urlToFilePath( pageOptions.URL ) + ' is not complete document! Use nicePageBuilder.builder() before json2html().';
                    };
                };
                /** @const {InstructionHandler | void}          */ this._onInstruction = NicePageBuilder.bindNicePageContextToInstructuionHandler( this._context, pageOptions, this._onInstruction, true );
                /** @const {EnterNodeHandler | void}            */ this._onEnterNode   = NicePageBuilder.bindNicePageContextToEnterNodeHandler( this._context, pageOptions, this._onEnterNode, true );
                /** @const {function((string | !Error)) | void} */ this._onError       = NicePageBuilder.bindNicePageContextToErrorHandler( this._context, pageOptions, this._onError );
            };
            this._createValue( token, value );
            break;
        case 3 :
            if( token === Parser.C.COMMA ){ // ,
                startHTMLJson();
            } else if( token === Parser.C.RIGHT_BRACKET ){ // ]
                startHTMLJson();
                this.onToken( token, value );
            } else {
                // error
                this._onError( 'Not html.json format!' );
                this._stream.emit( 'error', 'Not html.json format!' );
            };
    };
};
