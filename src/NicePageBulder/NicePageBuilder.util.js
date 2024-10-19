goog.provide( 'NicePageBuilder.DEFINE.DEBUG' );
goog.provide( 'NicePageBuilder.util' );
goog.provide( 'NicePageBuilder.util.getHTMLJson' );
goog.provide( 'NicePageBuilder.util.getMetadata' );
goog.provide( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.provide( 'NicePageBuilder.util.isPrebuild' );
goog.provide( 'NicePageBuilder.util.traverseMetadataStack' );
goog.provide( 'NicePageBuilder.util.getJsonScriptElement' );
goog.provide( 'NicePageBuilder.util.getSLotElement' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );

/** @define {boolean} */
NicePageBuilder.DEFINE.DEBUG = goog.define( 'NicePageBuilder.DEFINE.DEBUG' , false );

/**
 * 
 * @param {!NicePageBuilder.NicePageOrTemplete} nicePageOrTemplete 
 * @return {!HTMLJson | !HTMLJsonWithMetadata}
 */
NicePageBuilder.util.getHTMLJson = function( nicePageOrTemplete ){
    var htmlJson = /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (nicePageOrTemplete[ NicePageBuilder.INDEXES.HTML_JSON ]);

    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !m_isArray( htmlJson ) ){
            throw 'Not html.json! ' + JSON.stringify( htmlJson );
        };
    };
    return htmlJson;
};

/**
 * 
 * @param {!NicePageBuilder.NicePageOrTemplete} nicePageOrTemplete 
 * @return {NicePageBuilder.Metadata | null}
 */
NicePageBuilder.util.getMetadata = function( nicePageOrTemplete ){
    var metadata = /** @type {!NicePageBuilder.Metadata} */ (NicePageBuilder.util.getHTMLJson( nicePageOrTemplete )[ 0 ]);

    return !m_isArray( metadata ) && m_isObject( metadata ) ? metadata : null;
};

/**
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata} htmlJson 
 * @return {boolean}
 */
NicePageBuilder.util.isHTMLJsonWithMetadata = function( htmlJson ){
    var metadata = htmlJson[ 0 ];

    return m_isArray( htmlJson ) && !m_isArray( metadata ) && m_isObject( metadata );
};

/**
 * 
 * @param {!NicePageBuilder.Metadata} htmlJsonOrMetadata
 * @return {boolean}
 */
NicePageBuilder.util.isPrebuild = function( htmlJsonOrMetadata ){
    return !!htmlJsonOrMetadata.MIXINS || !!htmlJsonOrMetadata.TEMPLETE;
};

/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} baseMetadata
 * @param {!function(NicePageBuilder.RootRelativeURL, !NicePageBuilder.Metadata, number)} onReachMixin 
 * @param {!function(NicePageBuilder.RootRelativeURL, (NicePageBuilder.Metadata | null ), number)} onReachTemplete
 * @param {!function((string | !Error))=} opt_onError
 */
NicePageBuilder.util.traverseMetadataStack = function( context, baseMetadata, onReachMixin, onReachTemplete, opt_onError ){
    function traverseMixins( baseRootRelativeURL, metadata ){
        const mixinPathList = metadata.MIXINS;

        if( mixinPathList ){
            for( let i = 0; i < mixinPathList.length; ++i ){
                const mixinRootRelativeURL = context.path.toRootRelativeURL( baseRootRelativeURL, mixinPathList[ i ] );
                const mixin                = context.mixins[ mixinRootRelativeURL ];

                if( !mixin ){
                    if( opt_onError ){
                        opt_onError( 'Mixin not found!' );
                    } else if( NicePageBuilder.DEFINE.DEBUG ){
                        throw '[merge] Mixin: ' + mixinRootRelativeURL + ' required by ' + context.path.urlToFilePath( baseRootRelativeURL ) + ' not found!';
                    };
                };
                const metadataMixin = /** @type {!NicePageBuilder.Metadata} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_METADATA ]);

                onReachMixin( mixinRootRelativeURL, metadataMixin, /** @type {number} */ (mixin[ NicePageBuilder.INDEXES.UPDATED_AT ]) );
                if( !templeteRootRelativePath && metadataMixin.TEMPLETE ){
                    templeteRootRelativePath = context.path.toRootRelativeURL( mixinRootRelativeURL, metadataMixin.TEMPLETE );
                    requiredBy = mixinRootRelativeURL;
                };
                // MIXINS[i].MIXINS
                traverseMixins( mixinRootRelativeURL, metadataMixin );
            };
        };
    };

    let templeteRootRelativePath, requiredBy;

    if( baseMetadata.TEMPLETE ){
        templeteRootRelativePath = context.path.toRootRelativeURL( baseMetadata.URL, baseMetadata.TEMPLETE );
        requiredBy = baseMetadata.URL;
    };

    // MIXINS
    traverseMixins( baseMetadata.URL, baseMetadata );

    while( templeteRootRelativePath ){
        const tmpTempleteRootRelativePath = templeteRootRelativePath;
        const templete                    = context.templetes[ templeteRootRelativePath ];

        if( !templete ){
            if( opt_onError ){
                opt_onError( 'Templete not found!' );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                throw '[merge] Templete: ' + tmpTempleteRootRelativePath + ' required by ' + context.path.urlToFilePath( requiredBy ) + ' not found!';
            };
        };
        templeteRootRelativePath = requiredBy = '';

        const templeteMetadata = NicePageBuilder.util.getMetadata( templete );

        onReachTemplete( tmpTempleteRootRelativePath, templeteMetadata, /** @type {number} */ (templete[ NicePageBuilder.INDEXES.UPDATED_AT ]) );

        if( templeteMetadata ){
            if( templeteMetadata.TEMPLETE ){
                templeteRootRelativePath = context.path.toRootRelativeURL( tmpTempleteRootRelativePath, templeteMetadata.TEMPLETE );
                requiredBy = tmpTempleteRootRelativePath;
            };
            traverseMixins( tmpTempleteRootRelativePath, templeteMetadata );
        };
    };
};

/**
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata} rootJSONNode
 * @return {!Array | void}
 */
NicePageBuilder.util.getJsonScriptElement = function( rootJSONNode ){
    return _getElementByFilter(
        rootJSONNode,
        function( tagName, attrs ){
            return ( tagName === 'SCRIPT' || tagName === 'script' ) &&
                   attrs &&
                   ( attrs.type === 'application/ld+json' || attrs.type === 'application/json' || attrs.type === 'nice-page-builder/object' ) || false;
        }
    );
};

/**
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata} rootJSONNode
 * @param {boolean} dropMetadata
 * @return {!Array | void}
 */
NicePageBuilder.util.getSLotElement = function( rootJSONNode, dropMetadata ){
    return _getElementByFilter(
        rootJSONNode,
        function( tagName, attrs ){
            return tagName === 'SLOT' || tagName === 'slot';
        },
        dropMetadata
    );
};

/**
 * @private
 * @param {!HTMLJson | !HTMLJsonWithMetadata} rootJSONNode
 * @param {function(string, (Attrs | null)):boolean} filter
 * @param {boolean=} opt_dropMetadata
 * @return {!Array | void} 0:target node, 1:parentnode, 3:index
 */
function _getElementByFilter( rootJSONNode, filter, opt_dropMetadata ){
    let metadata = rootJSONNode[ 0 ], result;

    if( !m_isArray( metadata ) && m_isObject( metadata ) ){
        rootJSONNode.shift();
        result = walkChildNodes( /** @type {!HTMLJson} */ (rootJSONNode) );

        if( !opt_dropMetadata ){
            rootJSONNode.unshift( metadata );
            if( result ){
                if( result[ 1 ] === rootJSONNode ){ // if parentNode === rootNode
                    return [ result[ 0 ], rootJSONNode, ++result[ 2 ] /** increment index */ ];
                };
            };
        };
        return result;
    };
    return walkChildNodes( /** @type {!HTMLJson} */ (rootJSONNode) );

    /**
     * 
     * @param {!HTMLJson} currentJSONNode
     * @return {!Array | void}
     */
    function walkChildNodes( currentJSONNode ){
        let i = m_getChildNodeStartIndex( currentJSONNode ),
            l = currentJSONNode.length, result;

        for( ; i < l; ++i ){
            const childNode = currentJSONNode[ i ];

            if( m_isArray( childNode ) ){
                if( result = walkNode( /** @type {!HTMLJson} */ (childNode), currentJSONNode, i ) ){
                    return result;
                };
            };
        };
    };

    /**
     * 
     * @param {!HTMLJson} currentJSONNode 
     * @param {!HTMLJson} parentJSONNode 
     * @param {number} myIndex
     * @return {!Array | void}
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex ){
        const arg0 = currentJSONNode[ 0 ],
              arg1 = currentJSONNode[ 1 ];
        let tagName = arg0, attrsIndex = 1;

        switch( arg0 ){
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                return walkChildNodes( currentJSONNode );
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                tagName = arg1;
                attrsIndex = 2;
            default :
                if( m_isString( tagName ) ){
                    const attrs = currentJSONNode[ attrsIndex ];

                    if( filter( /** @type {string} */ (tagName), m_isAttributes( attrs ) ? /** @type {!Attrs} */ (attrs) : null ) ){
                        return [ currentJSONNode, parentJSONNode, myIndex ];
                    } else {
                        return walkChildNodes( currentJSONNode );
                    };
                };
        };
    };
};
