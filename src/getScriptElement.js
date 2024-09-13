goog.provide( 'getScriptElement' );

goog.require( 'htmljson.base' );

/**
 * 
 * @param {!Array} jsonNode
 * @return {!Array | void}
 */
var getScriptElement = function( jsonNode ){
    return walkChildNodes( jsonNode );

    /**
     * 
     * @param {!Array} currentJSONNode
     * @return {!Array | void}
     */
    function walkChildNodes( currentJSONNode ){
        let i = m_getChildNodeStartIndex( currentJSONNode ),
            l = currentJSONNode.length, result;

        for( ; i < l; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            const childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){
                // TEXT_NODE
            } else if( m_isArray( childNode ) ){
                if( result = walkNode( childNode, currentJSONNode, i ) ){
                    return result;
                };
            };
        };
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array} parentJSONNode 
     * @param {number} myIndex
     * @return {!Array | void}
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex ){
        const arg0 = currentJSONNode[ 0 ],
              arg1 = currentJSONNode[ 1 ];
        let tagName = arg0, attrsIndex = 1;

        switch( arg0 ){
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                return walkChildNodes( currentJSONNode );
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                tagName = arg1;
                attrsIndex = 2;
            default :
                if( m_isString( tagName ) ){
                    if( tagName === 'script' ){
                        const attrs = currentJSONNode[ attrsIndex ];

                        if( m_isAttributes( attrs ) ){
                            if( attrs.type === 'application/json' ){
                                parentJSONNode.splice( myIndex, 1 );
                                return currentJSONNode;
                            };
                        };
                    } else {
                        return walkChildNodes( currentJSONNode );
                    };
                };
        };
    };
};
