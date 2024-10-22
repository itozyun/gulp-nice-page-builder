goog.provide( 'NicePageBuilder.DEFINE.DEBUG' );
goog.provide( 'NicePageBuilder.util' );
goog.provide( 'NicePageBuilder.util.getHTMLJson' );
goog.provide( 'NicePageBuilder.util.getMetadata' );
goog.provide( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.provide( 'NicePageBuilder.util.isPrebuild' );
goog.provide( 'NicePageBuilder.util.traverseMetadataStack' );
goog.provide( 'NicePageBuilder.util.completePage' );
goog.provide( 'NicePageBuilder.util.getJsonScriptElement' );
goog.provide( 'NicePageBuilder.util.getSLotElement' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplate' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );

/** @define {boolean} */
NicePageBuilder.DEFINE.DEBUG = goog.define( 'NicePageBuilder.DEFINE.DEBUG' , false );

/**
 * 
 * @param {!NicePageBuilder.NicePageOrTemplate} nicePageOrTemplate 
 * @return {!HTMLJson | !HTMLJsonWithMetadata}
 */
NicePageBuilder.util.getHTMLJson = function( nicePageOrTemplate ){
    var htmlJson = /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (nicePageOrTemplate[ NicePageBuilder.INDEXES.HTML_JSON ]);

    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !m_isArray( htmlJson ) ){
            throw 'Not html.json! ' + JSON.stringify( htmlJson );
        };
    };
    return htmlJson;
};

/**
 * 
 * @param {!NicePageBuilder.NicePageOrTemplate} nicePageOrTemplate 
 * @return {NicePageBuilder.Metadata | null}
 */
NicePageBuilder.util.getMetadata = function( nicePageOrTemplate ){
    var metadata = /** @type {!NicePageBuilder.Metadata} */ (NicePageBuilder.util.getHTMLJson( nicePageOrTemplate )[ 0 ]);

    return !m_isArray( metadata ) && m_isObject( metadata ) ? metadata : null;
};

/**
 * 
 * @param {*} htmlJson 
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
    return !!htmlJsonOrMetadata.MIXINS || !!htmlJsonOrMetadata.TEMPLATE;
};

/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} baseMetadata
 * @param {!function(NicePageBuilder.RootRelativeURL, !NicePageBuilder.Metadata, number)} onReachMixin 
 * @param {!function(NicePageBuilder.RootRelativeURL, (NicePageBuilder.Metadata | null ), number)} onReachTemplate
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.NicePageOrTemplate>=} opt_altTemplates for html2json
 */
NicePageBuilder.util.traverseMetadataStack = function( context, baseMetadata, onReachMixin, onReachTemplate, opt_onError, opt_altTemplates ){
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
                if( !templateRootRelativeURL && metadataMixin.TEMPLATE ){
                    templateRootRelativeURL = context.path.toRootRelativeURL( mixinRootRelativeURL, metadataMixin.TEMPLATE );
                    requiredBy = mixinRootRelativeURL;
                };
                // MIXINS[i].MIXINS
                traverseMixins( mixinRootRelativeURL, metadataMixin );
            };
        };
    };

    let templateRootRelativeURL, requiredBy;

    if( baseMetadata.TEMPLATE ){
        templateRootRelativeURL = context.path.toRootRelativeURL( baseMetadata.URL, baseMetadata.TEMPLATE );
        requiredBy = baseMetadata.URL;
    };

    // MIXINS
    traverseMixins( baseMetadata.URL, baseMetadata );

    while( templateRootRelativeURL ){
        const tmpTemplateRootRelativeURL = templateRootRelativeURL;
        const template = opt_altTemplates && opt_altTemplates[ templateRootRelativeURL ] || context.templates[ templateRootRelativeURL ];

        if( !template ){
            if( opt_onError ){
                opt_onError( 'Template not found!' );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                throw '[merge] Template: ' + context.path.urlToFilePath( tmpTemplateRootRelativeURL ) + ' required by ' + context.path.urlToFilePath( requiredBy ) + ' not found!';
            };
        };
        templateRootRelativeURL = requiredBy = '';

        const templateMetadata = NicePageBuilder.util.getMetadata( template );

        onReachTemplate( tmpTemplateRootRelativeURL, templateMetadata, /** @type {number} */ (template[ NicePageBuilder.INDEXES.UPDATED_AT ]) );

        if( templateMetadata ){
            if( templateMetadata.TEMPLATE ){
                templateRootRelativeURL = context.path.toRootRelativeURL( tmpTemplateRootRelativeURL, templateMetadata.TEMPLATE );
                requiredBy = tmpTemplateRootRelativeURL;
            };
            traverseMixins( tmpTemplateRootRelativeURL, templateMetadata );
        };
    };
};

/**
 * @param {NicePageBuilder.Context} context
 * @param {!HTMLJsonWithMetadata} htmlJson
 * @param {!function((string | !Error))=} opt_onError
 * @return {!HTMLJsonWithMetadata}
 */
NicePageBuilder.util.completePage = function( context, htmlJson, opt_onError ){
    /**
     * @param {!HTMLJson | !HTMLJsonWithMetadata} templateJSONNode 
     * @param {!HTMLJson | !HTMLJsonWithMetadata} contentJSONNode
     * @return {!HTMLJson | !HTMLJsonWithMetadata}
     */
    function _insertContentToTemplate( templateJSONNode, contentJSONNode ){
        templateJSONNode = /** @type {!HTMLJson} */ (JSON.parse( JSON.stringify( templateJSONNode ) )); // deep copy

        let result = NicePageBuilder.util.getSLotElement( templateJSONNode, true );

        if( result ){
            const parentJSONNode = /** @type {!HTMLJson} */ (result[ 1 ]);

            let myIndex = /** @type {number} */ (result[ 2 ]),
                metadata;

            if( NicePageBuilder.util.isHTMLJsonWithMetadata( contentJSONNode ) ){
                metadata = contentJSONNode.shift();
            };

            let i = m_getChildNodeStartIndex( contentJSONNode ),
                l = contentJSONNode.length;

            parentJSONNode.splice( myIndex, 1 ); // remove <slot/>

            for( myIndex -= i; i < l; ++i ){
                parentJSONNode.splice( myIndex + i, 0, contentJSONNode[ i ] );
            };

            if( metadata ){
                templateJSONNode.unshift( metadata );
            };
        };
        return templateJSONNode;
    };

    const metadata = _deepCopyMetadata( context.getMergedMetadata( /** @type {!NicePageBuilder.Metadata} */ (htmlJson[ 0 ]) ) );

    NicePageBuilder.util.traverseMetadataStack(
        context, metadata,
        function( mixinRootRelativeURL, metadataMixin, updatedAt ){},
        /**
         * 
         * @param {NicePageBuilder.RootRelativeURL} templateRootRelativeURL 
         * @param {NicePageBuilder.Metadata | null} metadataTemplate
         * @param {number} updatedAt
         */
        function( templateRootRelativeURL, metadataTemplate, updatedAt ){
            const template = context.templates[ templateRootRelativeURL ];

            htmlJson = _insertContentToTemplate( NicePageBuilder.util.getHTMLJson( template ), htmlJson );
        },
        opt_onError
    );

    delete metadata.TEMPLATE;
    delete metadata.MIXINS;

    htmlJson[ 0 ] = metadata;

    return htmlJson;
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
