goog.provide( 'getElementByFilter' );

goog.require( 'htmljson.base' );

/**
 * 
 * @param {!Array} rootJSONNode
 * @param {function(string, (Attrs | null)):boolean} filter
 * @return {!Array | void}
 */
var getElementByFilter = function( rootJSONNode, filter ){
    let options, result;

    if( m_isAttributes( rootJSONNode[ 0 ] ) ){
        options = rootJSONNode.shift();
        result  = walkChildNodes( rootJSONNode );

        rootJSONNode.unshift( options );
        if( result ){
            if( result[ 1 ] === rootJSONNode ){
                return [ result[ 0 ], rootJSONNode, ++result[ 2 ] ];
            };
        };
        return result;
    };
    return walkChildNodes( rootJSONNode );

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
                    const attrs = currentJSONNode[ attrsIndex ];

                    if( filter( tagName, m_isAttributes( attrs ) ? /** @type {!Attrs} */ (attrs) : null ) ){
                        return [ currentJSONNode, parentJSONNode, myIndex ];
                    } else {
                        return walkChildNodes( currentJSONNode );
                    };
                };
        };
    };
};
