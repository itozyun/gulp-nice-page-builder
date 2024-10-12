goog.provide( 'NicePageBuilder.DEFINE.DEBUG' );
goog.provide( 'NicePageBuilder.util' );
goog.provide( 'NicePageBuilder.util.getHTMLJson' );
goog.provide( 'NicePageBuilder.util.getOptions' );
goog.provide( 'NicePageBuilder.util.isHTMLJsonWithOptions' );
goog.provide( 'NicePageBuilder.util.hasTEMPLETEProperty' );
goog.provide( 'NicePageBuilder.util.hasMIXINSProperty' );
goog.provide( 'NicePageBuilder.util.mergeOptions' );
goog.provide( 'NicePageBuilder.util.jsonFilePathToOriginalExtname' );
goog.provide( 'NicePageBuilder.util.getJsonScriptElement' );
goog.provide( 'NicePageBuilder.util.getSLotElement' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );

/** @define {boolean} */
NicePageBuilder.DEFINE.DEBUG = goog.define( 'NicePageBuilder.DEFINE.DEBUG' , false );

/**
 * 
 * @param {!NicePageBuilder.NicePageOrTemplete} nicePageOrTemplete 
 * @return {!HTMLJson | !HTMLJsonWithOptions}
 */
NicePageBuilder.util.getHTMLJson = function( nicePageOrTemplete ){
    var htmlJson = /** @type {!HTMLJson | !HTMLJsonWithOptions} */ (nicePageOrTemplete[ NicePageBuilder.INDEXES.HTML_JSON ]);

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
 * @return {NicePageBuilder.NicePageOptions | null}
 */
NicePageBuilder.util.getOptions = function( nicePageOrTemplete ){
    var options = /** @type {!NicePageBuilder.NicePageOptions} */ (NicePageBuilder.util.getHTMLJson( nicePageOrTemplete )[ 0 ]);

    return !m_isArray( options ) && m_isObject( options ) ? options : null;
};

/**
 * 
 * @param {!HTMLJson | !HTMLJsonWithOptions} htmlJson 
 * @return {boolean}
 */
NicePageBuilder.util.isHTMLJsonWithOptions = function( htmlJson ){
    var options = htmlJson[ 0 ];

    return m_isArray( htmlJson ) && !m_isArray( options ) && m_isObject( options );
};

/**
 * 
 * @param {!HTMLJson | !HTMLJsonWithOptions | !NicePageBuilder.NicePageOptions} htmlJsonOrOptions
 * @return {boolean}
 */
NicePageBuilder.util.hasTEMPLETEProperty = function( htmlJsonOrOptions ){
    if( !m_isArray( htmlJsonOrOptions ) && m_isObject( htmlJsonOrOptions ) ){
        return !!htmlJsonOrOptions.TEMPLETE;
    };

    if( NicePageBuilder.util.isHTMLJsonWithOptions( /** @type {!HTMLJson | !HTMLJsonWithOptions} */ (htmlJsonOrOptions) ) ){
        return htmlJsonOrOptions[ 0 ].TEMPLETE || false;
    };

    return false;
};

/**
 * 
 * @param {!HTMLJson | !HTMLJsonWithOptions | !NicePageBuilder.NicePageOptions} htmlJsonOrOptions
 * @return {boolean}
 */
NicePageBuilder.util.hasMIXINSProperty = function( htmlJsonOrOptions ){
    if( !m_isArray( htmlJsonOrOptions ) && m_isObject( htmlJsonOrOptions ) ){
        return !!htmlJsonOrOptions.MIXINS;
    };

    if( NicePageBuilder.util.isHTMLJsonWithOptions( /** @type {!HTMLJson | !HTMLJsonWithOptions} */ (htmlJsonOrOptions) ) ){
        return htmlJsonOrOptions[ 0 ].MIXINS || false;
    };

    return false;
};


/**
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.NicePageOptions} pageOptions
 * @param {!Array.<NicePageBuilder.RootRelativeURL>} templeteStack
 * @param {Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.NicePageOrTemplete> | null=} TEMPLETE_LIST 
 * @param {Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.Mixin> | null=} MIXIN_LIST
 * @param {!function((string | !Error))=} opt_onError
 */
NicePageBuilder.util.mergeOptions = function( context, pageOptions, templeteStack, TEMPLETE_LIST, MIXIN_LIST, opt_onError ){
    const filePath = context.path.urlToFilePath( pageOptions.URL );

    if( NicePageBuilder.util.hasTEMPLETEProperty( pageOptions ) && !TEMPLETE_LIST ){
        if( opt_onError ){
            return opt_onError( filePath + ' has TEMPLETE property, and no templetes found!' );
        } else if( NicePageBuilder.DEFINE.DEBUG ){
            throw filePath + ' has TEMPLETE property, and no templetes found!';
        };
    };
    if( NicePageBuilder.util.hasMIXINSProperty( pageOptions ) && !MIXIN_LIST ){
        if( opt_onError ){
            return opt_onError( filePath + ' has MIXINS property, and no mixins found!' );
        } else if( NicePageBuilder.DEFINE.DEBUG ){
            throw filePath + ' has MIXINS property, and no mixins found!';
        };
    };

    let updatedAt = pageOptions.MODIFIED_AT;
    let templeteRootRelativePath;

    if( pageOptions.TEMPLETE ){
        templeteRootRelativePath = context.path.toRootRelativeURL( pageOptions.URL, pageOptions.TEMPLETE );
    };

    mergeMinxins( pageOptions.URL, pageOptions.MIXINS );

    if( templeteRootRelativePath ){
        templeteStack[ 0 ] = templeteRootRelativePath;
    };

    while( templeteRootRelativePath ){
        const tmpTempleteRootRelativePath = templeteRootRelativePath;
        const templete                    = TEMPLETE_LIST[ templeteRootRelativePath ];

        if( NicePageBuilder.DEFINE.DEBUG ){
            if( !templete ){
                throw 'Templete: ' + templeteRootRelativePath + ' required by ' + context.path.urlToFilePath( pageOptions.URL ) + ' not found!';
            };
        };

        const templeteOptions = NicePageBuilder.util.getOptions( templete );

        if( templeteOptions ){
            if( NicePageBuilder.util.hasMIXINSProperty( templeteOptions ) && !MIXIN_LIST ){
                if( opt_onError ){
                    return opt_onError( templeteRootRelativePath + ' has MIXINS property, and no mixins found!' );
                } else if( NicePageBuilder.DEFINE.DEBUG ){
                    throw templeteRootRelativePath + ' has MIXINS property, and no mixins found!';
                };
            };
            templeteRootRelativePath = '';
            mix( tmpTempleteRootRelativePath, templeteOptions, /** @type {number} */ (templete[ NicePageBuilder.INDEXES.UPDATED_AT ]), false );
            mergeMinxins( tmpTempleteRootRelativePath, templeteOptions.MIXINS );
            if( templeteRootRelativePath ){
                templeteStack.push( templeteRootRelativePath );
            };
        } else {
            templeteRootRelativePath = '';
        };
    };

    pageOptions.UPDATED_AT = updatedAt;

    /**
     * @param {string} rootRelativePath
     * @param {!Array.<NicePageBuilder.RootRelativeURL> | void} mixinPathList
     */
    function mergeMinxins( rootRelativePath, mixinPathList ){
        if( mixinPathList ){
            for( let i = 0; i < mixinPathList.length; ++i ){
                const mixinRootRelativeURL = context.path.toRootRelativeURL( rootRelativePath, mixinPathList[ i ] );
                const mixin                = MIXIN_LIST[ mixinRootRelativeURL ];

                mix( mixinRootRelativeURL, /** @type {!NicePageBuilder.NicePageOptions} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_OPTIONS ]), /** @type {number} */ (mixin[ NicePageBuilder.INDEXES.UPDATED_AT ]), true );
            };
        };
    };

    /**
     * @param {string} rootRelativePath
     * @param {!NicePageBuilder.NicePageOptions} altPageOptions 
     * @param {number} altUpdatedAt
     * @param {boolean} isMixin
     */
    function mix( rootRelativePath, altPageOptions, altUpdatedAt, isMixin ){
        let changed = 0;

        for( const k in altPageOptions ){
            if( NicePageBuilder.DEFINE.DEBUG && isMixin && k === 'MIXINS' ){
                throw 'Mixin has MIXINS property!';
            } else if( k === 'TEMPLETE' ){
                if( !templeteRootRelativePath ){
                    templeteRootRelativePath = context.path.toRootRelativeURL( rootRelativePath, altPageOptions[ k ] ); // page.html や templete.html にある TEMPLETE が優勢、mixin の中の TEMPLETE は劣勢
                    ++changed;
                };
            } else if( pageOptions[ k ] === undefined ){
                pageOptions[ k ] = altPageOptions[ k ];
                ++changed;
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
 * `"/.json/xxx.AAA.json" => "AAA"`
 * @param {string} filePath
 * @param {!TinyPath} path
 */
NicePageBuilder.util.jsonFilePathToOriginalExtname = function( filePath, path ){
    let filePathElements = path.normalizeFilePath( filePath ).split( '.json' );
 
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( filePathElements[ filePathElements.length - 1 ] ){
            throw filePath + ' is not .json file path!';
        };
    };

    filePathElements.pop();
    filePathElements = filePathElements.join( '.json' ).split( '/' );

    return filePathElements.pop().split( '.' ).pop();
};

/**
 * 
 * @param {!HTMLJson | !HTMLJsonWithOptions} rootJSONNode
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
 * @param {!HTMLJson | !HTMLJsonWithOptions} rootJSONNode
 * @param {boolean} dropOptions
 * @return {!Array | void}
 */
NicePageBuilder.util.getSLotElement = function( rootJSONNode, dropOptions ){
    return _getElementByFilter(
        rootJSONNode,
        function( tagName, attrs ){
            return tagName === 'SLOT' || tagName === 'slot';
        },
        dropOptions
    );
};

/**
 * @private
 * @param {!HTMLJson | !HTMLJsonWithOptions} rootJSONNode
 * @param {function(string, (Attrs | null)):boolean} filter
 * @param {boolean=} opt_dropOptions
 * @return {!Array | void} 0:target node, 1:parentnode, 3:index
 */
function _getElementByFilter( rootJSONNode, filter, opt_dropOptions ){
    let options = rootJSONNode[ 0 ], result;

    if( !m_isArray( options ) && m_isObject( options ) ){
        rootJSONNode.shift();
        result = walkChildNodes( /** @type {!HTMLJson} */ (rootJSONNode) );

        if( !opt_dropOptions ){
            rootJSONNode.unshift( options );
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
