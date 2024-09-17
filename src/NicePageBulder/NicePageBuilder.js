goog.provide( 'NicePageBuilder' );
goog.provide( '__NicePageBuilder_internal__' );
goog.provide( 'NicePageBuilder.INDEXES' );
goog.provide( 'NicePageBuilder.Context' );
goog.provide( 'NicePageBuilder.SourceRootRelativePath' );
goog.provide( 'NicePageBuilder.NicePageOptions' );
goog.provide( 'NicePageBuilder.NicePageOrTemplete' );
goog.provide( 'NicePageBuilder.Mixin' );
goog.provide( 'NicePageBuilder._createContext' );

goog.require( 'TinyPath' );

/**
 * @package
 */
var __NicePageBuilder_internal__ = {};

/** @suppress {checkTypes} */
__NicePageBuilder_internal__.html2json = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.generator = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.json2json = false;
/** @suppress {checkTypes} */
__NicePageBuilder_internal__.json2html = false;

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
 * @typedef {{
 *   srcRootPath      : string,
 *   dynamicPagesPath : string,
 *   allPagesPath     : string,
 *   allMixinsPath    : string,
 *   allTempletesPath : string,
 *   keywordTempletes : string,
 *   keywordMixins    : string,
 *   path             : !TinyPath,
 *   html2json        : *,
 *   generator        : *,
 *   json2json        : *,
 *   json2html        : *
 * }}
 */
NicePageBuilder.Context;

/**
 * @typedef {string}
 */
NicePageBuilder.SourceRootRelativePath;

/**
 * @typedef {{
 *   TEMPLETE    : (NicePageBuilder.SourceRootRelativePath | void),
 *   MIXINS      : (!Array.<NicePageBuilder.SourceRootRelativePath> | void),
 *   FILE_PATH   : NicePageBuilder.SourceRootRelativePath,
 *   FILE_NAME   : string,
 *   FOLDER_PATH : string,
 *   URL         : string,
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
 * @param {Object=} options
 * @return {!NicePageBuilder.Context}
 */
NicePageBuilder = function( options ){
    const context = NicePageBuilder._createContext( options );

    if( __NicePageBuilder_internal__.html2json ){
        context.html2json = __NicePageBuilder_internal__.html2json;
    };
    if( __NicePageBuilder_internal__.generator ){
        context.generator = __NicePageBuilder_internal__.generator;
    };
    if( __NicePageBuilder_internal__.json2json ){
        context.json2json = __NicePageBuilder_internal__.json2json;
    };
    if( __NicePageBuilder_internal__.json2html ){
        context.json2html = __NicePageBuilder_internal__.json2html;
    };
    return context;
};

/**
 * @package
 * 
 * @param {Object=} opt_options
 * @return {!NicePageBuilder.Context}
 */
NicePageBuilder._createContext = function( opt_options ){
    const options     = opt_options || {},
          srcRootPath = require( 'path' ).resolve( options[ 'srcRootPath' ] || './' ) + '/'; // 'src' -> 'C://XX/XX/MyWebSiteProject/src/'

    const path = new TinyPath( options[ 'urlOrigin' ] || '', srcRootPath );

    const allPagesPath     = options[ 'allPagesPath' ] &&
                             path.toSrcRootRelativeFilePath( '/', options[ 'allPagesPath'     ]                         ),
          dynamicPagesPath = options[ 'dynamicPagesPath' ] &&
                             path.toSrcRootRelativeFilePath( '/', options[ 'dynamicPagesPath' ]                         ),
          allMixinsPath    = path.toSrcRootRelativeFilePath( '/', options[ 'allMixinsPath'    ] || 'all-mixins.json'    ),
          allTempletesPath = path.toSrcRootRelativeFilePath( '/', options[ 'allTempletesPath' ] || 'all-templetes.json' );

    return {
        srcRootPath      : path.normalizeFilePath( srcRootPath ),
        allPagesPath     : allPagesPath     || '',
        dynamicPagesPath : dynamicPagesPath || '',
        allMixinsPath,
        allTempletesPath,
        keywordTempletes : NicePageBuilder.util.jsonFilePathToOriginalExtname( allTempletesPath, path ),
        keywordMixins    : NicePageBuilder.util.jsonFilePathToOriginalExtname( allMixinsPath   , path ),
        path
    };
};
