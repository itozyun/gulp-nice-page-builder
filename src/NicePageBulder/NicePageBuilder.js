goog.provide( '__NicePageBuilder_internal__' );
goog.provide( 'NicePageBuilder.INDEXES' );
goog.provide( 'NicePageBuilder.RootRelativeURL' );
goog.provide( 'NicePageBuilder.SourceRootRelativeFilePath' );
goog.provide( 'NicePageBuilder.Metadata' );
goog.provide( 'HTMLJsonWithMetadata' );
goog.provide( 'NicePageBuilder.NicePageOrTemplate' );
goog.provide( 'NicePageBuilder.Mixin' );

var __NicePageBuilder_internal__ = {};

/** @suppress {checkTypes} */
__NicePageBuilder_internal__.html2json = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.builder   = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.builderStream  = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.json2json = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.json2html = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.json2htmlStream = false;

/**
 * @enum {number}
 */
NicePageBuilder.INDEXES = {
    HTML_JSON      : 0,
    MIXIN_METADATA : 0,
    CREATED_AT     : 1,
    UPDATED_AT     : 2
};

/**
 * @typedef {string}
 */
NicePageBuilder.SourceRootRelativeFilePath;

/**
 * @typedef {string}
 */
NicePageBuilder.RootRelativeURL;

/**
 * @typedef {{
 *   TEMPLATE    : (NicePageBuilder.RootRelativeURL | void),
 *   MIXINS      : (!Array.<NicePageBuilder.RootRelativeURL> | void),
 *   URL         : NicePageBuilder.RootRelativeURL,
 *   CREATED_AT  : number,
 *   MODIFIED_AT : number,
 *   UPDATED_AT  : number
 * }}
 */
NicePageBuilder.Metadata;

/**
 * @typedef {Array.<NicePageBuilder.Metadata | number | string | Attrs | InstructionArgs | Array.<number | string | Attrs | InstructionArgs | Array>>}
 */
var HTMLJsonWithMetadata;

/**
 * [0] {Array} HTML JSON
 * [1] {number} CREATED_AT
 * [2] {number} UPDATED_AT
 * [3] {boolean} isPage
 * 
 * @typedef {!Array.<(!HTMLJson | !HTMLJsonWithMetadata | number | boolean)>}
 */
NicePageBuilder.NicePageOrTemplate;

/**
 * [0] {Object} NicePageBuilder.Metadata
 * [1] {number} CREATED_AT
 * [2] {number} UPDATED_AT
 * [3] {boolean} used
 * 
 * @typedef {!Array.<(!NicePageBuilder.Metadata | number | boolean)>}
 */
NicePageBuilder.Mixin;
