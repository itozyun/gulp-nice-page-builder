goog.provide( 'insertContentToTemplete' );

goog.require( 'htmljson.base' );

/**
 * 
 * @param {!Array} templeteJSONNode 
 * @param {!Array} contentJSONNode
 * @return {!Array}
 */
var insertContentToTemplete = function( templeteJSONNode, contentJSONNode ){
    let options;

    templeteJSONNode = /** @type {!Array} */ (JSON.parse( JSON.stringify( templeteJSONNode ) )); // deep copy

    if( m_isAttributes( templeteJSONNode[ 0 ] ) ){
        options = templeteJSONNode.shift();
    };
    if( m_isAttributes( contentJSONNode[ 0 ] ) ){
        options = contentJSONNode.shift();
    };

    walkChildNodes( templeteJSONNode );

    if( options ){
        templeteJSONNode.unshift( options );
    };
    return templeteJSONNode;

    /**
     * 
     * @param {!Array} currentJSONNode
     * @return {boolean}
     */
    function walkChildNodes( currentJSONNode ){
        let i = m_getChildNodeStartIndex( currentJSONNode ),
            l = currentJSONNode.length;

        for( ; i < l; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            const childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){
                // TEXT_NODE
            } else if( m_isArray( childNode ) ){
                if( walkNode( childNode, currentJSONNode, i ) ){
                    return true;
                };
            };
        };
        return false;
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array} parentJSONNode 
     * @param {number} myIndex
     * @return {boolean}
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex ){
        const arg0 = currentJSONNode[ 0 ],
              arg1 = currentJSONNode[ 1 ];
        let tagName = arg0;

        switch( arg0 ){
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                return walkChildNodes( currentJSONNode );
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                tagName = arg1;
            default :
                if( m_isString( tagName ) ){
                    if( tagName === 'slot' ){
                        let i = m_getChildNodeStartIndex( contentJSONNode ),
                            l = contentJSONNode.length;
                
                        parentJSONNode.splice( myIndex, 1 ); // remove <slot/>

                        for( myIndex -= i; i < l; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
                            parentJSONNode.splice( myIndex + 1, 0, contentJSONNode[ i ] );
                        };
                        return true;
                    } else {
                        return walkChildNodes( currentJSONNode );
                    };
                };
        };
        return false;
    };
};
