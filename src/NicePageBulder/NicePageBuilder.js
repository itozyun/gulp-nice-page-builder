goog.provide( '__NicePageBuilder_internal__' );
goog.provide( 'NicePageBuilder.INDEXES' );
goog.provide( 'NicePageBuilder.RootRelativeURL' );
goog.provide( 'NicePageBuilder.SourceRootRelativeFilePath' );
goog.provide( 'NicePageBuilder.NicePageOptions' );
goog.provide( 'HTMLJsonWithOptions' );
goog.provide( 'NicePageBuilder.NicePageOrTemplete' );
goog.provide( 'NicePageBuilder.Mixin' );
goog.provide( 'NicePageBuilder.deepCopy' );
goog.provide( 'NicePageBuilder.getPageOptionsOf' );

goog.requireType( 'TinyPath' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( 'NicePageBuilder.util.mergeOptions' );

var __NicePageBuilder_internal__ = {};

/** @suppress {checkTypes} */
__NicePageBuilder_internal__.html2json = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.builder   = false;
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
    HTML_JSON     : 0,
    MIXIN_OPTIONS : 0,
    CREATED_AT    : 1,
    UPDATED_AT    : 2
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
 *   TEMPLETE    : (NicePageBuilder.RootRelativeURL | void),
 *   MIXINS      : (!Array.<NicePageBuilder.RootRelativeURL> | void),
 *   URL         : NicePageBuilder.RootRelativeURL,
 *   CREATED_AT  : number,
 *   MODIFIED_AT : number,
 *   UPDATED_AT  : number
 * }}
 */
NicePageBuilder.NicePageOptions;

/**
 * @typedef {Array.<NicePageBuilder.NicePageOptions | number | string | Attrs | InstructionArgs | Array.<number | string | Attrs | InstructionArgs | Array>>}
 */
var HTMLJsonWithOptions;

/**
 * [0] {Array} HTML JSON
 * [1] {number} CREATED_AT
 * [2] {number} UPDATED_AT
 * [3] {boolean} isPage
 * 
 * @typedef {!Array.<(!HTMLJson | !HTMLJsonWithOptions | number | boolean)>}
 */
NicePageBuilder.NicePageOrTemplete;

/**
 * [0] {Object} NicePageBuilder.NicePageOptions
 * [1] {number} CREATED_AT
 * [2] {number} UPDATED_AT
 * [3] {boolean} used
 * 
 * @typedef {!Array.<(!NicePageBuilder.NicePageOptions | number | boolean)>}
 */
NicePageBuilder.Mixin;

/**
 * @param {!NicePageBuilder.NicePageOptions} nicePageOptions
 * @return {!NicePageBuilder.NicePageOptions}
 */
NicePageBuilder.deepCopy = function( nicePageOptions ){
    return /** @type {!NicePageBuilder.NicePageOptions} */ (JSON.parse( JSON.stringify( nicePageOptions ) ));
};

/**
 * @param {!NicePageBuilder.Context} context
 * @param {string} rootRelativeURL
 * @param {boolean} rawOptions
 * @return {NicePageBuilder.NicePageOptions | null} 
 */
NicePageBuilder.getPageOptionsOf = function( context, rootRelativeURL, rawOptions ){
    if( rawOptions ){
        return context.allPageOptions && context.allPageOptions[ rootRelativeURL ] || null;
    };

    var pageOptions = context._allPageOptions[ rootRelativeURL ];

    if( !pageOptions ){
        if( context.allPageOptions ){
            pageOptions = context.allPageOptions[ rootRelativeURL ];

            if( pageOptions ){
                pageOptions = NicePageBuilder.deepCopy( pageOptions );

                pageOptions.URL = rootRelativeURL;
                NicePageBuilder.util.mergeOptions( context, pageOptions, [], context.templetes, context.mixins );

                pageOptions = NicePageBuilder.deepCopy( pageOptions ); // コピーされたメタ情報(Array, Object)を改変から保護する

                context._allPageOptions[ rootRelativeURL ] = pageOptions;
            };
        };
    };
    return pageOptions || null;
};
