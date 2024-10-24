goog.provide( 'NicePageBuilder.builder.stream' );
goog.provide( '__NicePageBuilder_internal__.builderStream' );

goog.require( 'htmljson.NODE_TYPE' );
goog.requireType( 'JsonParser' );
goog.require( 'JsonParser.C' );
goog.require( 'HTMLJsonParser.writeHandler' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.isPrebuild' );
goog.require( 'NicePageBuilder.util.completePage' );

/**
 * @this {NicePageBuilder.Context}
 * @return {!Through}
 */
__NicePageBuilder_internal__.builderStream = function(){
    const parser  = new JsonParser();
    const through  = /** @type {!Through} */ (new Through( HTMLJsonParser.writeHandler, endHandler ));

    /**
     * @suppress {checkTypes}
     * @type {JsonParser | null}  */
    through._jsonParser = parser;
    /** @type {Through | null} */
    parser._through = through;

    /** @const */ parser._createValue = parser.onToken;
    /** @const */ parser.onToken = onTokenBeforeLeaveMetadata;

    parser._context = this;
    parser._metadataPhase = 0;

    return through;
};

/**
 * @private
 * @this {!Through}
 * @param {(Buffer | string | number | boolean | null)=} data 
 */
function endHandler( data ){
    if( data != null ){
        this.write( data );
    };
    /** @suppress {checkTypes} */
    var templateAfter = this._jsonParser._templateAfter;

    if( templateAfter ){
        this.queue( templateAfter );
        /** @suppress {missingProperties} */
        delete this._jsonParser._templateAfter;
    };
    this.queue( null );

    /** @suppress {checkTypes} */
    this._jsonParser = this._jsonParser._through = null;
};

/**
 * @private
 * @this {JsonParser}
 * @param {number} token 
 * @param {*} value 
 */
function onTokenAfterLeaveMetadata( token, value ){
    if( token === JsonParser.C.STRING ){
        value = '"' + value.split( '"' ).join( '\\"' )
                           .split( '\b' ).join( '\\b' )
                           .split( '\f' ).join( '\\f' )
                           .split( '\n' ).join( '\\n' )
                           .split( '\r' ).join( '\\r' )
                           .split( '\t' ).join( '\\t' ) +
                '"';
    } else if( token === JsonParser.C.NULL ){
        value += ';'
    };
    // console.log( '>> ', token, value )
    this._through.queue( value );
};

/**
 * @private
 * @this {JsonParser}
 * @param {number} token 
 * @param {*} value 
 */
function onTokenBeforeLeaveMetadata( token, value ){
    function onLeaveMetadata( separator ){
        const context  = self._context;
        const metadata = self._metadata;

        let pageHTMLJson = [ metadata, 11, separator ];

        const completeHTMLJson = NicePageBuilder.util.completePage( context, pageHTMLJson );

        if( pageHTMLJson !== completeHTMLJson ){
            const htmlJsonBeforeAndAfter = JSON.stringify( completeHTMLJson ).split( '"' + separator + '"' );
    
            if( htmlJsonBeforeAndAfter.length !== 2 ){
                return onLeaveMetadata( '--' + Math.random() + '--' );
            } else {
                // console.log( htmlJsonBeforeAndAfter )
                self._through.queue( htmlJsonBeforeAndAfter[ 0 ].substr( 1 ) ); // [ を除く
                self._templateAfter = htmlJsonBeforeAndAfter[ 1 ].substr( 0, htmlJsonBeforeAndAfter[ 1 ].length - 1 );
            };
        } else {
            self._through.queue( JSON.stringify( completeHTMLJson[ 0 ] ) + ',' );
            self._noTemplate = true;
        };
        delete self._context;
        delete self._metadata;
    };

    const self = this;

    switch( this._metadataPhase ){
        case 0 :
            if( token === JsonParser.C.LEFT_BRACKET ){ // [
                this._metadataPhase = 1;
                this._through.queue( value );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                // this._onError( 'Not html.json format!' );
                this._through.emit( 'error', 'Not html.json format!' );
            };
            break;
        case 1 :
            if( token === JsonParser.C.LEFT_BRACE ){ // {
                this._metadataPhase = 2;
                this._createValue( token, value );
            } else {
                this._metadataPhase = 5;
                this._through.queue( value );
                break;
            };
            break;
        case 2 :
            if( token === JsonParser.C.RIGHT_BRACE && this.jsonStack.length === 1 ){ // }
                const metadata = /** @type {!NicePageBuilder.Metadata} */ (this.currentValue);

                this._metadataPhase = 3;
                this._metadata = metadata;
                this.currentValue = null;
            };
            this._createValue( token, value );
            break;
        case 3 :
            if( token === JsonParser.C.COMMA ){ // ,
                this._metadataPhase = 4;
                onLeaveMetadata( '--- page insert position ---' );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                this._onError( 'Not HTMLJsonWithMetadata!' );
                this._through.emit( 'error', 'Not HTMLJsonWithMetadata!' );
            };
            break;
        case 4 :
            if( value === htmljson.NODE_TYPE.DOCUMENT_NODE || value === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
                if( self._noTemplate ){
                    this._metadataPhase = 8;
                    this._through.queue( value );
                } else {
                    this._metadataPhase = value === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 9 : 5;
                };
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                this._onError( 'Not HTMLJsonWithMetadata!' );
                this._through.emit( 'error', 'Not HTMLJsonWithMetadata!' );
            };
            break;
        case 5 : // skip ,
        case 6 : // skip "<!DOCTYPE html>"
        case 7 : // skip ,
            ++this._metadataPhase;
            break;
        case 8 : // ,
            this._through.queue( value );
        case 9 : // skip ,
            this.onToken = onTokenAfterLeaveMetadata;
            break;
    };
};
