goog.provide( 'insertContentToTemplete' );

goog.require( 'htmljson.base' );

/**
 * 
 * @param {!Array} templeteJSONNode 
 * @param {!Array} contentJSONNode
 * @return {!Array}
 */
var insertContentToTemplete = function( templeteJSONNode, contentJSONNode ){
    templeteJSONNode = JSON.parse( JSON.stringify( templeteJSONNode ) ); // deep copy
    templeteJSONNode[ 0 ] = contentJSONNode.shift(); // pageOptions
    walkChildNodes( templeteJSONNode, 1 );

    return templeteJSONNode;

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array|null} parentJSONNode 
     * @param {number} myIndex
     * @return {boolean}
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex ){
        const arg0 = currentJSONNode[ 0 ],
              arg1 = currentJSONNode[ 1 ],
              tagName = arg0;

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
                        contentJSONNode.splice( 0, 0, myIndex, 1 );
                        parentJSONNode.splice.apply( parentJSONNode, contentJSONNode );
                        return true;
                    } else {
                        return walkChildNodes( currentJSONNode );
                    };
                };
        };
        return false;
    };

    /**
     * 
     * @param {!Array} currentJSONNode
     * @param {number=} opt_startIndex
     * @return {boolean}
     */
    function walkChildNodes( currentJSONNode, opt_startIndex ){
        let i = opt_startIndex || m_getChildNodeStartIndex( currentJSONNode ),
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
};
