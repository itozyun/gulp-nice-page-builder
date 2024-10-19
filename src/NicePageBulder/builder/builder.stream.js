goog.provide( 'NicePageBuilder.builder.stream' );
goog.provide( '__NicePageBuilder_internal__.builderStream' );

goog.requireType( 'Parser' );
goog.require( 'Parser.C' );
goog.require( 'json2html.stream.writeHandler' );
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
    const parser  = new Parser();
    const stream  = /** @type {!Through} */ (new Through( json2html.stream.writeHandler, endHandler ));

    /**
     * @suppress {checkTypes}
     * @type {Parser | null}  */
    stream._parser = parser;
    /** @type {Through | null} */
    parser._stream = stream;

    /** @const */ parser._createValue = parser.onToken;
    /** @const */ parser.onToken = onTokenBeforeLeaveMetadata;

    parser._context = this;
    parser._metadataPhase = 0;

    return stream;
};

/**
 * @private
 * @this {!Through}
 * @param {(Buffer | string | null)=} data 
 */
function endHandler( data ){
    if( data ){
        this.write( data );
    };
    /** @suppress {checkTypes} */
    var templeteAfter = this._parser._templeteAfter;

    if( templeteAfter ){
        this.queue( templeteAfter );
        /** @suppress {missingProperties} */
        delete this._parser._templeteAfter;
    };
    this.queue( null );

    /** @suppress {checkTypes} */
    this._parser = this._parser._stream = null;
};

/**
 * @private
 * @this {Parser}
 * @param {number} token 
 * @param {*} value 
 */
function onTokenAfterLeaveMetadata( token, value ){
    if( token === Parser.C.STRING ){
        value = '"' + value.split( '"' ).join( '\\"' ) + '"';
    };
    // console.log( '>> ', token, value )
    this._stream.queue( '' + value );
};

/**
 * @private
 * @this {Parser}
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
                self._stream.queue( htmlJsonBeforeAndAfter[ 0 ].substr( 1 ) ); // [ を除く
                self._templeteAfter = htmlJsonBeforeAndAfter[ 1 ].substr( 0, htmlJsonBeforeAndAfter[ 1 ].length - 1 );
            };
        } else {
            self._stream.queue( JSON.stringify( completeHTMLJson[ 0 ] ) + ',' );
            self._noTemplete = true;
        };
        delete self._context;
        delete self._metadata;
    };

    const self = this;

    switch( this._metadataPhase ){
        case 0 :
            if( token === Parser.C.LEFT_BRACKET ){ // [
                this._metadataPhase = 1;
                this._stream.queue( value );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                // this._onError( 'Not html.json format!' );
                this._stream.emit( 'error', 'Not html.json format!' );
            };
            break;
        case 1 :
            if( token === Parser.C.LEFT_BRACE ){ // {
                this._metadataPhase = 2;
                this._createValue( token, value );
            } else {
                this._metadataPhase = 5;
                this._stream.queue( value );
                break;
            };
            break;
        case 2 :
            if( token === Parser.C.RIGHT_BRACE && this.jsonStack.length === 1 ){ // }
                const metadata = /** @type {!NicePageBuilder.Metadata} */ (this.currentValue);

                this._metadataPhase = 3;
                this._metadata = metadata;
                this.currentValue = null;
            };
            this._createValue( token, value );
            break;
        case 3 :
            if( token === Parser.C.COMMA ){ // ,
                this._metadataPhase = 4;
                onLeaveMetadata( '--- page insert position ---' );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                this._onError( 'Not HTMLJsonWithMetadata!' );
                this._stream.emit( 'error', 'Not HTMLJsonWithMetadata!' );
            };
            break;
        case 4 :
            if( value === 9 || value === 11 ){
                // console.log( 4, token, value )
                if( self._noTemplete ){
                    this._metadataPhase = 5;
                    // console.log( 4, token, value )
                    this._stream.queue( '' + value );
                } else {
                    this._metadataPhase = 6;
                };
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                this._onError( 'Not HTMLJsonWithMetadata!' );
                this._stream.emit( 'error', 'Not HTMLJsonWithMetadata!' );
            };
            break;
        case 5 :
            // console.log( 5, token, value )
            this._stream.queue( value );
        case 6 :
            // console.log( token, value )
            this.onToken = onTokenAfterLeaveMetadata;
            break;
    };
};
