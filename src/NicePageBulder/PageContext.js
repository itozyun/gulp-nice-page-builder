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

/**
 * @constructor
 *
 * @param {!NicePageBuilder.Context} context
 * @param {string} rootRelativeURL
 * @param {!NicePageBuilder.Metadata=} opt_templeteMetadata
 */
NicePageBuilder.PageContext = function( context, rootRelativeURL, opt_templeteMetadata ){
    this.path = context.path;
    /** @private */ this._allAppendixes = context.allAppendixes;
    /** @private */ this._baseURL       = rootRelativeURL;

    /**
     * @param {string} url 
     * @return {NicePageBuilder.Metadata | null}
     */
    this.getMetadataOf = function( url ){
        var rootRelativeURL = this.toRootRelativeURL( url );

        return context.getMetadataOf( rootRelativeURL )
    };

    if( opt_templeteMetadata ){
        this.getMetadata = function(){
            return /** @type {!NicePageBuilder.Metadata} */ (opt_templeteMetadata);
        };
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
    return this._allAppendixes[ rootRelativePath ] = this._allAppendixes[ rootRelativePath ] || {};
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
 * @param {!NicePageBuilder.PageContext} pageContext
 * @param {!InstructionHandler | void} onInstruction
 * @param {boolean} isStreamContext
 * @return {!InstructionHandler | void}
 */
NicePageBuilder.PageContext.bindToInstructuionHandler = function( pageContext, onInstruction, isStreamContext ){
    if( onInstruction ){
        if( typeof onInstruction === 'function' ){
            return _bindPageContextToHandler( isStreamContext, pageContext, onInstruction );
        } else {
            var _onInstruction = {}, funcName;

            for( funcName in onInstruction ){
                _onInstruction[ funcName ] = _bindPageContextToHandler( isStreamContext, pageContext, onInstruction[ funcName ] );
            };
            return _onInstruction;
        };
    };
};

/**
 * @param {!NicePageBuilder.PageContext} pageContext
 * @param {!EnterNodeHandler | void} onEnterNode
 * @param {boolean} isStreamContext
 * @return {!EnterNodeHandler | void}
 */
NicePageBuilder.PageContext.bindToEnterNodeHandler = function( pageContext, onEnterNode, isStreamContext ){
    if( onEnterNode ){
        if( typeof onEnterNode === 'function' ){
            return _bindPageContextToHandler( isStreamContext, pageContext, onEnterNode );
        } else {
            var i = 0, l = onEnterNode.length, _onEnterNode = [];

            for( ; i < l; i += 2 ){
                _onEnterNode[ i     ] = onEnterNode[ i ];
                _onEnterNode[ i + 1 ] = _bindPageContextToHandler( isStreamContext, pageContext, /** @type {!Function} */ (onEnterNode[ i + 1 ]) );
            };
            return _onEnterNode;
        };
    };
};

/**
 * @param {!NicePageBuilder.PageContext} pageContext
 * @param {!function(!VNode) | void} onDocumentReady
 * @return {!function(!VNode) | void}
 */
NicePageBuilder.PageContext.bindToDocumentReadyHandler = function( pageContext, onDocumentReady ){
    if( onDocumentReady ){
        return onDocumentReady.bind( pageContext );
    };
};


/**
 * @param {!NicePageBuilder.PageContext} pageContext
 * @param {!function((string | !Error)) | void} onError
 * @return {!function((string | !Error)) | void}
 */
NicePageBuilder.PageContext.bindToErrorHandler = function( pageContext, onError ){
    if( onError ){
        return onError.bind( pageContext );
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
