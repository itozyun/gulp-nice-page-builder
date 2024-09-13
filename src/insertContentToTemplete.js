goog.provide( 'insertContentToTemplete' );

goog.require( 'htmljson.base' );
goog.require( 'getSLotElement' );

/**
 * 
 * @param {!Array} templeteJSONNode 
 * @param {!Array} contentJSONNode
 * @return {!Array}
 */
var insertContentToTemplete = function( templeteJSONNode, contentJSONNode ){
    templeteJSONNode = /** @type {!Array} */ (JSON.parse( JSON.stringify( templeteJSONNode ) )); // deep copy

    let result = getSLotElement( templeteJSONNode );

    if( result ){
        const parentJSONNode = /** @type {!Array} */ (result[ 1 ]);

        let myIndex = /** @type {number} */ (result[ 2 ]),
            options;

        if( m_isAttributes( contentJSONNode[ 0 ] ) ){
            options = contentJSONNode.shift();
        };

        let i = m_getChildNodeStartIndex( contentJSONNode ),
            l = contentJSONNode.length;

        parentJSONNode.splice( myIndex, 1 ); // remove <slot/>

        for( myIndex -= i; i < l; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            parentJSONNode.splice( myIndex + i, 0, contentJSONNode[ i ] );
        };

        if( options ){
            templeteJSONNode.unshift( options );
        };
    };
    return templeteJSONNode;
};
