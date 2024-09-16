goog.provide( 'NicePageBuilder.DEFINE.DEBUG' );
goog.provide( 'NicePageBuilder.util' );
goog.provide( 'NicePageBuilder.util.getHTMLJson' );
goog.provide( 'NicePageBuilder.util.getNiceOptions' );
goog.provide( 'NicePageBuilder.util.getJsonScriptElement' );
goog.provide( 'NicePageBuilder.util.getSLotElement' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );

/** @define {boolean} */
NicePageBuilder.DEFINE.DEBUG = goog.define( 'NicePageBuilder.DEFINE.DEBUG' , false );

/**
 * 
 * @param {!NicePageBuilder.NicePageOrTemplete} nicePageOrTemplete 
 * @return {!Array}
 */
NicePageBuilder.util.getHTMLJson = function( nicePageOrTemplete ){
    var htmlJson = /** @type {!Array} */ (nicePageOrTemplete[ NicePageBuilder.INDEXES.HTML_JSON ]);

    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !m_isArray( htmlJson ) ){
            throw 'NOT_HTML_JSON_ERROR!';
        };
    };
    return htmlJson;
};

/**
 * 
 * @param {!NicePageBuilder.NicePageOrTemplete} nicePageOrTemplete 
 * @return {NicePageBuilder.NicePageOptions | null}
 */
NicePageBuilder.util.getNiceOptions = function( nicePageOrTemplete ){
    var options = /** @type {!NicePageBuilder.NicePageOptions} */ (NicePageBuilder.util.getHTMLJson( nicePageOrTemplete )[ 0 ]);

    return !m_isArray( options ) && m_isObject( options ) ? options : null;
};

/**
 * 
 * @param {!Array} rootJSONNode
 * @return {!Array | void}
 */
NicePageBuilder.util.getJsonScriptElement = function( rootJSONNode ){
    return _getElementByFilter(
        rootJSONNode,
        function( tagName, attrs ){
            return ( tagName === 'SCRIPT' || tagName === 'script' ) &&
                   attrs &&
                   ( attrs.type === 'application/json' || attrs.type === 'nice-page-builder/object' ) || false;
        }
    );
};

/**
 * 
 * @param {!Array} rootJSONNode
 * @return {!Array | void}
 */
NicePageBuilder.util.getSLotElement = function( rootJSONNode ){
    return _getElementByFilter(
        rootJSONNode,
        function( tagName, attrs ){
            return tagName === 'SLOT' || tagName === 'slot';
        }
    );
};

/**
 * @private
 * @param {!Array} rootJSONNode
 * @param {function(string, (Attrs | null)):boolean} filter
 * @return {!Array | void} 0:target node, 1:parentnode, 3:index
 */
function _getElementByFilter( rootJSONNode, filter ){
    let options = rootJSONNode[ 0 ], result;

    if( !m_isArray( options ) && m_isObject( options ) ){
        rootJSONNode.shift();
        result = walkChildNodes( rootJSONNode );

        rootJSONNode.unshift( options );
        if( result ){
            if( result[ 1 ] === rootJSONNode ){ // if parentNode === rootNode
                return [ result[ 0 ], rootJSONNode, ++result[ 2 ] /** increment index */ ];
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
