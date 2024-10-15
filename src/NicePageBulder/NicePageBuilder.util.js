goog.provide( 'NicePageBuilder.DEFINE.DEBUG' );
goog.provide( 'NicePageBuilder.util' );
goog.provide( 'NicePageBuilder.util.getHTMLJson' );
goog.provide( 'NicePageBuilder.util.getMetadata' );
goog.provide( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.provide( 'NicePageBuilder.util.hasTEMPLETEProperty' );
goog.provide( 'NicePageBuilder.util.hasMIXINSProperty' );
goog.provide( 'NicePageBuilder.util.mergeMetadata' );
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
 * @param {!HTMLJson | !HTMLJsonWithMetadata | !NicePageBuilder.Metadata} htmlJsonOrMetadata
 * @return {boolean}
 */
NicePageBuilder.util.hasTEMPLETEProperty = function( htmlJsonOrMetadata ){
    if( !m_isArray( htmlJsonOrMetadata ) && m_isObject( htmlJsonOrMetadata ) ){
        return !!htmlJsonOrMetadata.TEMPLETE;
    };

    if( NicePageBuilder.util.isHTMLJsonWithMetadata( /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (htmlJsonOrMetadata) ) ){
        return htmlJsonOrMetadata[ 0 ].TEMPLETE || false;
    };

    return false;
};

/**
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata | !NicePageBuilder.Metadata} htmlJsonOrMetadata
 * @return {boolean}
 */
NicePageBuilder.util.hasMIXINSProperty = function( htmlJsonOrMetadata ){
    if( !m_isArray( htmlJsonOrMetadata ) && m_isObject( htmlJsonOrMetadata ) ){
        return !!htmlJsonOrMetadata.MIXINS;
    };

    if( NicePageBuilder.util.isHTMLJsonWithMetadata( /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (htmlJsonOrMetadata) ) ){
        return htmlJsonOrMetadata[ 0 ].MIXINS || false;
    };

    return false;
};


/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!Array.<NicePageBuilder.RootRelativeURL>} templeteStack
 * @param {!function((string | !Error))=} opt_onError
 */
NicePageBuilder.util.mergeMetadata = function( context, metadata, templeteStack, opt_onError ){
    let updatedAt = metadata.MODIFIED_AT;
    let templeteRootRelativePath;

    if( metadata.TEMPLETE ){
        templeteRootRelativePath = context.path.toRootRelativeURL( metadata.URL, metadata.TEMPLETE );
    };

    mergeMinxins( metadata.URL, metadata.MIXINS );

    if( templeteRootRelativePath ){
        templeteStack[ 0 ] = templeteRootRelativePath;
    };

    while( templeteRootRelativePath ){
        const tmpTempleteRootRelativePath = templeteRootRelativePath;
        const templete                    = context.templetes[ templeteRootRelativePath ];

        if( !templete ){
            if( opt_onError ){
                opt_onError( 'Templete not found!' );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                throw 'Templete: ' + templeteRootRelativePath + ' required by ' + context.path.urlToFilePath( metadata.URL ) + ' not found!';
            };
        };

        const templeteMetadata = NicePageBuilder.util.getMetadata( templete );

        if( templeteMetadata ){
            templeteRootRelativePath = '';
            mix( tmpTempleteRootRelativePath, templeteMetadata, /** @type {number} */ (templete[ NicePageBuilder.INDEXES.UPDATED_AT ]), false );
            mergeMinxins( tmpTempleteRootRelativePath, templeteMetadata.MIXINS );
            if( templeteRootRelativePath ){
                templeteStack.push( templeteRootRelativePath );
            };
        } else {
            templeteRootRelativePath = '';
        };
    };

    metadata.UPDATED_AT = updatedAt;

    /**
     * @param {string} rootRelativePath
     * @param {!Array.<NicePageBuilder.RootRelativeURL> | void} mixinPathList
     */
    function mergeMinxins( rootRelativePath, mixinPathList ){
        if( mixinPathList ){
            for( let i = 0; i < mixinPathList.length; ++i ){
                const mixinRootRelativeURL = context.path.toRootRelativeURL( rootRelativePath, mixinPathList[ i ] );
                const mixin                = context.mixins[ mixinRootRelativeURL ];

                if( !mixin ){
                    if( opt_onError ){
                        opt_onError( 'Mixin not found!' );
                    } else if( NicePageBuilder.DEFINE.DEBUG ){
                        throw 'Mixin: ' + mixinRootRelativeURL + ' required by ' + context.path.urlToFilePath( rootRelativePath ) + ' not found!';
                    };
                };

                mix( mixinRootRelativeURL, /** @type {!NicePageBuilder.Metadata} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_OPTIONS ]), /** @type {number} */ (mixin[ NicePageBuilder.INDEXES.UPDATED_AT ]), true );
            };
        };
    };

    /**
     * @param {string} rootRelativePath
     * @param {!NicePageBuilder.Metadata} altMetadata 
     * @param {number} altUpdatedAt
     * @param {boolean} isMixin
     */
    function mix( rootRelativePath, altMetadata, altUpdatedAt, isMixin ){
        let changed = 0;

        for( const k in altMetadata ){
            if( NicePageBuilder.DEFINE.DEBUG && isMixin && k === 'MIXINS' ){ // TODO
                throw 'Mixin has MIXINS property!';
            } else if( k === 'TEMPLETE' ){
                if( !templeteRootRelativePath ){
                    templeteRootRelativePath = context.path.toRootRelativeURL( rootRelativePath, altMetadata[ k ] ); // page.html や templete.html にある TEMPLETE が優勢、mixin の中の TEMPLETE は劣勢
                    ++changed;
                };
            } else if( metadata[ k ] === undefined ){
                metadata[ k ] = altMetadata[ k ];
                ++changed;
                // TODO mixedProperties
            };
        };
        if( changed || !isMixin ){
            if( updatedAt < altUpdatedAt ){
                updatedAt = altUpdatedAt;
            };
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
