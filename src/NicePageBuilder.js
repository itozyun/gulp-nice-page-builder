goog.provide( 'NicePageBuilder' );
goog.provide( 'NicePageOptions' );
goog.provide( 'NicePageOrTemplete' );
goog.provide( 'Mixin' );
goog.provide( 'sourceRootRelativePath' );

goog.require( 'insertContentToTemplete' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.require( 'NicePageBuilder.util.rootRelativePathToRootRelativeURL' );

/**
 * @typedef {string}
 */
var sourceRootRelativePath;

/**
 * @typedef {...{
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
 * @typedef {{!Array.<(!Array | number | boolean)>}}
 */
var NicePageOrTemplete;

/**
 * [0] {Object} NicePageOptions
 * [1] {number} CREATED_AT
 * [2] {number} MODIFIED_AT
 * [3] {number} UPDATED_AT
 * [4] {boolean} used
 * 
 * @typedef {{!Array.<(!Object | number | boolean)>}}
 */
var Mixin;

/**
 * @param {!NicePageOrTemplete} nicePage
 * @param {sourceRootRelativePath} filePath
 * @param {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} TEMPLETE_LIST 
 * @param {!Object.<sourceRootRelativePath, !Mixin>} MIXIN_LIST 
 * @return {!Array}
 */
NicePageBuilder = function( page, filePath, TEMPLETE_LIST, MIXIN_LIST ){
    const pageOptions = NicePageBuilder.util.getNiceOptions( page );
    let templetePath = pageOptions.TEMPLETE;

    mergeMinxins( pageOptions.MIXINS );

    while( templetePath ){
        const templete = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        if( templeteOptions ){
            mix( templeteOptions, templete[ UPDATED_AT ] );
            mergeMinxins( templeteOptions.MIXINS );
            templetePath = templeteOptions.TEMPLETE;
        };
    };

    /**
     * @param {!Array.<sourceRootRelativePath>} mixinPathList 
     */
    function mergeMinxins( mixinPathList ){
        if( mixinPathList ){
            for( let i = 0; i < mixinPathList.length; ++i ){
                const mixin = MIXIN_LIST[ mixinPathList[ i ] ];

                mix( mixin[ 0 ], mixin[ UPDATED_AT ] );
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
        if( page[ 3 ] < altUpdatedAt ){
            page[ 3 ] = altUpdatedAt;
        };
    };

    let contentHtmlJson = NicePageBuilder.util.getHTMLJson( page );
    templetePath = pageOptions.TEMPLETE;

    while( templetePath ){
        const templete  = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        contentHtmlJson = insertContentToTemplete( NicePageBuilder.util.getHTMLJson( templete ), contentHtmlJson );
        if( templeteOptions ){
            templetePath = templeteOptions.TEMPLETE;
        };
    };

    const pathElements = filePath.split( '/' );

    pageOptions.FILE_PATH   = filePath;
    pageOptions.FILE_NAME   = pathElements.pop();
    pageOptions.FOLDER_PATH = pathElements.join( '/' );
    pageOptions.URL         = NicePageBuilder.util.rootRelativePathToRootRelativeURL( filePath );
    pageOptions.CREATED_AT  = page[ CREATED_AT  ];
    pageOptions.MODIFIED_AT = page[ MODIFIED_AT ];
    pageOptions.UPDATED_AT  = page[ UPDATED_AT  ];

    return contentHtmlJson;
};
