goog.provide( 'getJsonScriptElement' );

goog.require( 'getElementByFilter' );

/**
 * 
 * @param {!Array} rootJSONNode
 * @return {!Array | void}
 */
var getJsonScriptElement = function( rootJSONNode ){
    return getElementByFilter(
        rootJSONNode,
        function( tagName, attrs ){
            return tagName === 'script' && attrs && attrs.type === 'application/json' || false;
        }
    );
};
