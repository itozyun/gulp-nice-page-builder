goog.provide( 'NicePageBuilder' );
goog.provide( '__NicePageBuilder_internal__' );
goog.provide( 'NicePageBuilder.INDEXES' );
goog.provide( 'NicePageBuilder.Context' );
goog.provide( 'NicePageBuilder.SourceRootRelativePath' );
goog.provide( 'NicePageBuilder.NicePageOptions' );
goog.provide( 'NicePageBuilder.NicePageOrTemplete' );
goog.provide( 'NicePageBuilder.Mixin' );
goog.provide( 'NicePageBuilder.deepCopy' );
goog.provide( 'NicePageBuilder._createContext' );
goog.provide( 'NicePageBuilder.bindNicePageContextToInstructuionHandler' );
goog.provide( 'NicePageBuilder.bindNicePageContextToEnterNodeHandler' );
goog.provide( 'NicePageBuilder.bindNicePageContextToDocumentReadyHandler' );
goog.provide( 'NicePageBuilder.bindNicePageContextToErrorHandler' );

goog.require( 'TinyPath' );
goog.require( 'VNode' );

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
 *   allPagesPath     : string,
 *   allOptionsPath   : string,
 *   allMixinsPath    : string,
 *   allTempletesPath : string,
 *   mixins           : (Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.Mixin> | null),
 *   templetes        : (Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.NicePageOrTemplete> | null),
 *   keywordTempletes : string,
 *   keywordMixins    : string,
 *   path             : !TinyPath,
 *   _jsonList        : !Object.<NicePageBuilder.SourceRootRelativePath, !Object>,
 *   html2json        : *,
 *   generator        : *,
 *   json2json        : *,
 *   json2html        : *
 * }}
 */
NicePageBuilder.Context;

/**
 * @typedef {{
 *   getOptions        : function():NicePageBuilder.NicePageOptions,
 *   getJSON           : function(string):Object,
 *   toRootRelativeURL : function(string):string,
 *   toRelativeURL     : function(string):string,
 *   toAbsoluteURL     : function(string):string
 * }}
 */
NicePageBuilder.NicePageContext;

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
 * @param {!NicePageBuilder.NicePageOptions} nicePageOptions
 * @return {!NicePageBuilder.NicePageOptions}
 */
NicePageBuilder.deepCopy = function( nicePageOptions ){
    return /** @type {!NicePageBuilder.NicePageOptions} */ (JSON.parse( JSON.stringify( nicePageOptions ) ));
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
          allOptionsPath   = options[ 'allOptionsPath' ] &&
                             path.toSrcRootRelativeFilePath( '/', options[ 'allOptionsPath'     ]                       ),
          allMixinsPath    = path.toSrcRootRelativeFilePath( '/', options[ 'allMixinsPath'    ] || 'all-mixins.json'    ),
          allTempletesPath = path.toSrcRootRelativeFilePath( '/', options[ 'allTempletesPath' ] || 'all-templetes.json' );

    return {
        srcRootPath      : path.normalizeFilePath( srcRootPath ),
        allPagesPath     : allPagesPath   || '',
        allOptionsPath   : allOptionsPath || '',
        allMixinsPath,
        allTempletesPath,
        keywordTempletes : NicePageBuilder.util.jsonFilePathToOriginalExtname( allTempletesPath, path ),
        keywordMixins    : NicePageBuilder.util.jsonFilePathToOriginalExtname( allMixinsPath   , path ),
        mixins           : options[ 'mixins'    ] || null,
        templetes        : options[ 'templetes' ] || null,
        _jsonList        : {},
        path
    };
};

/**
 * @private
 * @param {boolean} isStreamContext
 * @param {!NicePageContext} pageContext
 * @param {!Function} originalHandler
 * @return {!Function}
 */
NicePageBuilder._createHandler = function( isStreamContext, pageContext, originalHandler ){
    /**
     * @param {*} thisContext
     * @param {!NicePageContext} pageContext
     * @return {*}
     */
    function merge( thisContext, pageContext ){
        thisContext = thisContext || {};

        for( var key in pageContext ){
            thisContext[ key ] = pageContext[ key ];
        };
        return thisContext;
    };

    if( !isStreamContext ){
        return originalHandler.bind( pageContext );
    };
    return function(){
        return originalHandler.apply( merge( this, pageContext ), arguments );
    };
};

/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.NicePageOptions} pageOptions
 * @param {!InstructionHandler | void} onInstruction
 * @param {boolean} isStreamContext
 * @return {!InstructionHandler | void}
 */
NicePageBuilder.bindNicePageContextToInstructuionHandler = function( context, pageOptions, onInstruction, isStreamContext ){
    if( onInstruction ){
        var nicePageContext = new NicePageContext( context, pageOptions.FILE_PATH, pageOptions ), funcName, _onInstruction;

        if( typeof onInstruction === 'function' ){
            return NicePageBuilder._createHandler( isStreamContext, nicePageContext, onInstruction );
        } else {
            _onInstruction = {};

            for( funcName in onInstruction ){
                _onInstruction[ funcName ] = NicePageBuilder._createHandler( isStreamContext, nicePageContext, onInstruction[ funcName ] );
            };
            return _onInstruction;
        };
    };
};

/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.NicePageOptions} pageOptions
 * @param {!EnterNodeHandler | void} onEnterNode
 * @param {boolean} isStreamContext
 * @return {!EnterNodeHandler | void}
 */
NicePageBuilder.bindNicePageContextToEnterNodeHandler = function( context, pageOptions, onEnterNode, isStreamContext ){
    if( onEnterNode ){
        var nicePageContext = new NicePageContext( context, pageOptions.FILE_PATH, pageOptions ), i, l, _onEnterNode;

        if( typeof onEnterNode === 'function' ){
            return NicePageBuilder._createHandler( isStreamContext, nicePageContext, onEnterNode );
        } else {
            _onEnterNode = [];

            for( i = 0, l = onEnterNode.length; i < l; i += 2 ){
                _onEnterNode[ i     ] = onEnterNode[ i ];
                _onEnterNode[ i + 1 ] = NicePageBuilder._createHandler( isStreamContext, nicePageContext, /** @type {!Function} */ (onEnterNode[ i + 1 ]) );
            };
            return _onEnterNode;
        };
    };
};

/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.NicePageOptions} pageOptions
 * @param {!function(!VNode) | void} onDocumentReady
 * @return {!function(!VNode) | void}
 */
NicePageBuilder.bindNicePageContextToDocumentReadyHandler = function( context, pageOptions, onDocumentReady ){
    if( onDocumentReady ){
        var nicePageContext = new NicePageContext( context, pageOptions.FILE_PATH, pageOptions );

        return onDocumentReady.bind( nicePageContext );
    };
};


/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.NicePageOptions} pageOptions
 * @param {!function(string) | void} onError
 * @return {!function(string) | void}
 */
NicePageBuilder.bindNicePageContextToErrorHandler = function( context, pageOptions, onError ){
    if( onError ){
        var nicePageContext = new NicePageContext( context, pageOptions.FILE_PATH, pageOptions );

        return onError.bind( nicePageContext );
    };
};

/**
 * @constructor
 * @private
 * @param {!NicePageBuilder.Context} context
 * @param {string} filePath
 * @param {!NicePageBuilder.NicePageOptions} pageOptions
 */
function NicePageContext( context, filePath, pageOptions ){
    this._path     = context.path;
    this._jsonList = context._jsonList;
    this._baseURL  = context.path.filePathToURL( filePath );

    this.getOptions = function(){ return pageOptions };
};
/**
 * 
 * @param {string} rootRelativePath 
 * @return {!Object} */
NicePageContext.prototype.getJSON = function( rootRelativePath ){
    return this._jsonList[ rootRelativePath ] = this._jsonList[ rootRelativePath ] || {};
};

/**
 * @param {string} url 
 * @return {string} */
NicePageContext.prototype.toRelativeURL = function( url ){
    return this._path.toRelativeURL( this._baseURL, url );
};

/**
 * @param {string} url 
 * @return {string} */
NicePageContext.prototype.toRootRelativeURL = function( url ){
    return this._path.toRootRelativeURL( this._baseURL, url );
};

/**
 * @param {string} url 
 * @return {string} */
NicePageContext.prototype.toAbsoluteURL = function( url ){
    return this._path.rootRelativeURLToAbsoluteURL( this.toRootRelativeURL( url ) );
};
