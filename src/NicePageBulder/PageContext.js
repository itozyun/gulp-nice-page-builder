goog.provide( 'NicePageBuilder.PageContext' );
goog.provide( 'NicePageBuilder.PageContext.bindToInstructuionHandler' );
goog.provide( 'NicePageBuilder.PageContext.bindToEnterNodeHandler' );
goog.provide( 'NicePageBuilder.PageContext.bindToDocumentReadyHandler' );
goog.provide( 'NicePageBuilder.PageContext.bindToErrorHandler' );

goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'InstructionHandler' );
goog.requireType( 'EnterNodeHandler' );
goog.requireType( 'VNode' );
goog.require( 'NicePageBuilder.getMetadataOf' );

/**
 * @private
 * @constructor
 *
 * @param {!NicePageBuilder.Context} context
 * @param {string} rootRelativeURL */
NicePageBuilder.PageContext = function( context, rootRelativeURL ){
    this.path      = context.path;
    this._jsonList = context._jsonList;
    this._baseURL  = rootRelativeURL;

    /**
     * @param {string} url 
     * @return {NicePageBuilder.Metadata | null}
     */
    this.getMetadataOf = function( url ){
        var rootRelativeURL = this.toRootRelativeURL( this.path.clearHash( url ) );

        return NicePageBuilder.getMetadataOf( context, rootRelativeURL, false )
    };
};

// @see _bindPageContextToHandler
// NicePageBuilder.PageContext.prototype.paused = false;
// NicePageBuilder.PageContext.prototype.pause;
// NicePageBuilder.PageContext.prototype.resume;

/**
 * @return {NicePageBuilder.Metadata | null} */
NicePageBuilder.PageContext.prototype.getMetadata = function(){
    return this.getMetadataOf( this._baseURL );
};

/**
 * 
 * @param {string} rootRelativePath 
 * @return {!Object} */
NicePageBuilder.PageContext.prototype.getJSON = function( rootRelativePath ){
    return this._jsonList[ rootRelativePath ] = this._jsonList[ rootRelativePath ] || {};
};

/**
 * @param {string} url 
 * @return {string} */
NicePageBuilder.PageContext.prototype.toRelativeURL = function( url ){
    return this.path.toRelativeURL( this._baseURL, url );
};

/**
 * @param {string} url 
 * @return {string} */
NicePageBuilder.PageContext.prototype.toRootRelativeURL = function( url ){
    return this.path.toRootRelativeURL( this._baseURL, url );
};

/**
 * @param {string} url 
 * @return {string} */
NicePageBuilder.PageContext.prototype.toAbsoluteURL = function( url ){
    return this.path.rootRelativeURLToAbsoluteURL( this.toRootRelativeURL( url ) );
};

/**
 * @param {string} url 
 * @return {string} */
NicePageBuilder.PageContext.prototype.getShortestURL = function( url ){
    var relativeURL = this.toRelativeURL( url ),
        rootRelativeURL = this.toRootRelativeURL( url );

    return relativeURL.length < rootRelativeURL.length ? relativeURL : rootRelativeURL;
};

/** ===========================================================================
 *  public
 */

/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!InstructionHandler | void} onInstruction
 * @param {boolean} isStreamContext
 * @return {!InstructionHandler | void}
 */
NicePageBuilder.PageContext.bindToInstructuionHandler = function( context, metadata, onInstruction, isStreamContext ){
    if( onInstruction ){
        var nicePageContext = new NicePageBuilder.PageContext( context, metadata.URL ), funcName, _onInstruction;

        if( typeof onInstruction === 'function' ){
            return _bindPageContextToHandler( isStreamContext, nicePageContext, onInstruction );
        } else {
            _onInstruction = {};

            for( funcName in onInstruction ){
                _onInstruction[ funcName ] = _bindPageContextToHandler( isStreamContext, nicePageContext, onInstruction[ funcName ] );
            };
            return _onInstruction;
        };
    };
};

/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!EnterNodeHandler | void} onEnterNode
 * @param {boolean} isStreamContext
 * @return {!EnterNodeHandler | void}
 */
NicePageBuilder.PageContext.bindToEnterNodeHandler = function( context, metadata, onEnterNode, isStreamContext ){
    if( onEnterNode ){
        var nicePageContext = new NicePageBuilder.PageContext( context, metadata.URL ), i, l, _onEnterNode;

        if( typeof onEnterNode === 'function' ){
            return _bindPageContextToHandler( isStreamContext, nicePageContext, onEnterNode );
        } else {
            _onEnterNode = [];

            for( i = 0, l = onEnterNode.length; i < l; i += 2 ){
                _onEnterNode[ i     ] = onEnterNode[ i ];
                _onEnterNode[ i + 1 ] = _bindPageContextToHandler( isStreamContext, nicePageContext, /** @type {!Function} */ (onEnterNode[ i + 1 ]) );
            };
            return _onEnterNode;
        };
    };
};

/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!function(!VNode) | void} onDocumentReady
 * @return {!function(!VNode) | void}
 */
NicePageBuilder.PageContext.bindToDocumentReadyHandler = function( context, metadata, onDocumentReady ){
    if( onDocumentReady ){
        var nicePageContext = new NicePageBuilder.PageContext( context, metadata.URL );

        return onDocumentReady.bind( nicePageContext );
    };
};


/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!function((string | !Error)) | void} onError
 * @return {!function((string | !Error)) | void}
 */
NicePageBuilder.PageContext.bindToErrorHandler = function( context, metadata, onError ){
    if( onError ){
        var nicePageContext = new NicePageBuilder.PageContext( context, metadata.URL );

        return onError.bind( nicePageContext );
    };
};

/** ===========================================================================
 *  private
 */

/**
 * @private
 * @param {boolean} isStreamContext
 * @param {!NicePageBuilder.PageContext} pageContext
 * @param {!Function} originalHandler
 * @return {!Function}
 */
function _bindPageContextToHandler( isStreamContext, pageContext, originalHandler ){
    if( !isStreamContext ){
        return originalHandler.bind( pageContext );
    };
    return function(){
        var stream = this || {}, result;

        if( stream.pause && stream.resume ){
            pageContext.pause = function(){
                stream.pause();
                pageContext.paused = stream.paused;
            };
            pageContext.resume = function(){
                stream.resume();
                pageContext.paused = stream.paused;
            };
        };

        result = originalHandler.apply( pageContext, arguments );

        if( stream.pause && stream.resume ){
            pageContext.pause = null;
        };
        return result;
    };
};
