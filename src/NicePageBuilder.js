goog.provide( 'NicePageBuilder' );
goog.provide( 'NicePageOptions' );
goog.provide( 'NicePageOrTemplete' );
goog.provide( 'Mixin' );
goog.provide( 'sourceRootRelativePath' );
goog.provide( 'STAT_INDEXES' );

goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.require( 'NicePageBuilder.util.filePathToURL' );
goog.require( 'htmljson.base' );
goog.require( 'getSLotElement' );

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

/**
 * @param {!Array} htmlJson
 * @param {number} createdAt
 * @param {number} updatedAt
 * @param {sourceRootRelativePath} filePath
 * @param {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} TEMPLETE_LIST 
 * @param {!Object.<sourceRootRelativePath, !Mixin>} MIXIN_LIST 
 * @return {!Array}
 */
NicePageBuilder = function( htmlJson, createdAt, updatedAt, filePath, TEMPLETE_LIST, MIXIN_LIST ){
    const pageOptions = !m_isArray( htmlJson[ 0 ] ) && m_isObject( htmlJson[ 0 ] ) ? htmlJson[ 0 ] : null;

    if( !pageOptions ){
        return htmlJson;
    };

    const modifiedAt = updatedAt;
    let templetePath = pageOptions.TEMPLETE;

    mergeMinxins( pageOptions.MIXINS );

    while( templetePath ){
        const templete = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        templetePath = '';
        if( templeteOptions ){
            mix( templeteOptions, /** @type {number} */ (templete[ STAT_INDEXES.UPDATED_AT ]) );
            mergeMinxins( templeteOptions.MIXINS );
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
        let changed = 0;

        for( const k in altPageOptions ){
            if( k === 'TEMPLETE' ){
                templetePath = templetePath || altPageOptions[ k ]; // page.html や templete.html にある TEMPLETE が顕性、mixin の中の TEMPLETE は潜性
                if( templetePath === altPageOptions[ k ] ){
                    ++changed;
                };
            } else if( pageOptions[ k ] === undefined ){
                pageOptions[ k ] = altPageOptions[ k ];
                ++changed;
            };
        };
        if( changed ){
            if( updatedAt < altUpdatedAt ){
                updatedAt = altUpdatedAt;
            };
        };
    };

    let contentHtmlJson = htmlJson;
    templetePath = pageOptions.TEMPLETE;

    while( templetePath ){
        const templete  = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        contentHtmlJson = _insertContentToTemplete( NicePageBuilder.util.getHTMLJson( templete ), contentHtmlJson );
        if( templeteOptions ){
            templetePath = templeteOptions.TEMPLETE;
        } else {
            templetePath = '';
        };
    };

    const pathElements = filePath.split( '/' );

    delete pageOptions.TEMPLETE;
    delete pageOptions.MIXINS;

    pageOptions.FILE_PATH   = filePath;
    pageOptions.FILE_NAME   = pathElements.pop();
    pageOptions.FOLDER_PATH = pathElements.join( '/' );
    pageOptions.URL         = NicePageBuilder.util.filePathToURL( filePath );
    pageOptions.CREATED_AT  = createdAt;
    pageOptions.MODIFIED_AT = modifiedAt;
    pageOptions.UPDATED_AT  = updatedAt;

    return contentHtmlJson;
};

/**
 * @private
 * @param {!Array} templeteJSONNode 
 * @param {!Array} contentJSONNode
 * @return {!Array}
 */
function _insertContentToTemplete( templeteJSONNode, contentJSONNode ){
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