goog.provide( 'NicePageBuilder' );
goog.provide( 'NicePageOptions' );
goog.provide( 'NicePageOrTemplete' );
goog.provide( 'Mixin' );
goog.provide( 'sourceRootRelativePath' );
goog.provide( 'STAT_INDEXES' );

goog.require( 'insertContentToTemplete' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.require( 'NicePageBuilder.util.rootRelativePathToRootRelativeURL' );

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
 * [2] {number} MODIFIED_AT
 * [3] {number} UPDATED_AT
 * [4] {boolean} use templete
 * 
 * @typedef {!Array.<(!Array | number | boolean)>}
 */
var NicePageOrTemplete;

/**
 * [0] {Object} NicePageOptions
 * [1] {number} CREATED_AT
 * [2] {number} MODIFIED_AT
 * [3] {number} UPDATED_AT
 * [4] {boolean} used
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
    MODIFIED_AT   : 2,
    UPDATED_AT    : 3
};

/**
 * @param {!NicePageOrTemplete} nicePage
 * @param {sourceRootRelativePath} filePath
 * @param {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} TEMPLETE_LIST 
 * @param {!Object.<sourceRootRelativePath, !Mixin>} MIXIN_LIST 
 * @return {!Array}
 */
NicePageBuilder = function( nicePage, filePath, TEMPLETE_LIST, MIXIN_LIST ){
    const pageOptions = NicePageBuilder.util.getNiceOptions( nicePage );
    let templetePath = pageOptions.TEMPLETE;

    mergeMinxins( pageOptions.MIXINS );

    while( templetePath ){
        const templete = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        if( templeteOptions ){
            mix( templeteOptions, /** @type {number} */ (templete[ STAT_INDEXES.UPDATED_AT ]) );
            mergeMinxins( templeteOptions.MIXINS );
            templetePath = templeteOptions.TEMPLETE;
        } else {
            templetePath = '';
        };
    };

    /**
     * @param {!Array.<sourceRootRelativePath> | void} mixinPathList 
     */
    function mergeMinxins( mixinPathList ){
        if( mixinPathList ){
            for( let i = 0; i < mixinPathList.length; ++i ){
                const mixin = MIXIN_LIST[ mixinPathList[ i ] ];

                mix( /** @type {!NicePageOptions} */ (mixin[ STAT_INDEXES.MIXIN_OPTIONS ]), /** @type {number} */ (mixin[ STAT_INDEXES.UPDATED_AT ]) );
            };
        };
    };

    /**
     * @param {!NicePageOptions} altPageOptions 
     * @param {number} altUpdatedAt 
     */
    function mix( altPageOptions, altUpdatedAt ){
        for( const k in altPageOptions ){
            if( pageOptions[ k ] === undefined ){
                pageOptions[ k ] = altPageOptions[ k ];
            };
        };
        if( nicePage[ STAT_INDEXES.UPDATED_AT ] < altUpdatedAt ){
            nicePage[ STAT_INDEXES.UPDATED_AT ] = altUpdatedAt;
        };
    };

    let contentHtmlJson = NicePageBuilder.util.getHTMLJson( nicePage );
    templetePath = pageOptions.TEMPLETE;

    while( templetePath ){
        const templete  = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        contentHtmlJson = insertContentToTemplete( NicePageBuilder.util.getHTMLJson( templete ), contentHtmlJson );
        if( templeteOptions ){
            templetePath = templeteOptions.TEMPLETE;
        } else {
            templetePath = '';
        };
    };

    const pathElements = filePath.split( '/' );

    pageOptions.FILE_PATH   = filePath;
    pageOptions.FILE_NAME   = pathElements.pop();
    pageOptions.FOLDER_PATH = pathElements.join( '/' );
    pageOptions.URL         = NicePageBuilder.util.rootRelativePathToRootRelativeURL( filePath );
    pageOptions.CREATED_AT  = /** @type {number} */ (nicePage[ STAT_INDEXES.CREATED_AT  ]);
    pageOptions.MODIFIED_AT = /** @type {number} */ (nicePage[ STAT_INDEXES.MODIFIED_AT ]);
    pageOptions.UPDATED_AT  = /** @type {number} */ (nicePage[ STAT_INDEXES.UPDATED_AT  ]);

    return contentHtmlJson;
};
