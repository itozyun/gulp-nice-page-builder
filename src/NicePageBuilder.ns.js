goog.provide( 'NicePageBuilder' );
goog.provide( 'sourceRootRelativePath' );
goog.provide( 'NicePageOptions' );
goog.provide( 'NicePageOrTemplete' );
goog.provide( 'Mixin' );
goog.provide( 'STAT_INDEXES' );

/**
 * @typedef {string}
 */
var sourceRootRelativePath;

/**
 * @typedef {{
 *   TEMPLETE    : (sourceRootRelativePath | void),
 *   MIXINS      : (!Array.<sourceRootRelativePath> | void),
 *   FILE_PATH   : sourceRootRelativePath,
 *   FILE_NAME   : string,
 *   FOLDER_PATH : string,
 *   URL         : string,
 *   CREATED_AT  : number,
 *   MODIFIED_AT : number,
 *   UPDATED_AT  : number
 * }}
 */
var NicePageOptions;

/**
 * [0] {Array} HTML JSON
 * [1] {number} CREATED_AT
 * [2] {number} UPDATED_AT
 * [3] {boolean} isPage
 * 
 * @typedef {!Array.<(!Array | number | boolean)>}
 */
var NicePageOrTemplete;

/**
 * [0] {Object} NicePageOptions
 * [1] {number} CREATED_AT
 * [2] {number} UPDATED_AT
 * [3] {boolean} used
 * 
 * @typedef {!Array.<(!Object | number | boolean)>}
 */
var Mixin;

/**
 * @enum {number}
 */
var STAT_INDEXES = {
    HTML_JSON     : 0,
    MIXIN_OPTIONS : 0,
    CREATED_AT    : 1,
    UPDATED_AT    : 2
};