goog.provide( 'getSLotElement' );

goog.require( 'getElementByFilter' );

/**
 * 
 * @param {!Array} rootJSONNode
 * @return {!Array | void}
 */
var getSLotElement = function( rootJSONNode ){
    return getElementByFilter(
        rootJSONNode,
        function( tagName, attrs ){
            return tagName === 'slot';
        }
    );
};
