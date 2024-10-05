goog.provide( 'NicePageBuilder.DEFINE.DEBUG' );
goog.provide( 'NicePageBuilder.util' );
goog.provide( 'NicePageBuilder.util.getHTMLJson' );
goog.provide( 'NicePageBuilder.util.getNiceOptions' );
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
NicePageBuilder.util.getNiceOptions = function( nicePageOrTemplete ){
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
 * @param {!NicePageBuilder.NicePageOptions} pageOptions
 * @param {!Array.<NicePageBuilder.SourceRootRelativePath>} templeteStack
 * @param {Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.NicePageOrTemplete> | null=} TEMPLETE_LIST 
 * @param {Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.Mixin> | null=} MIXIN_LIST
 * @param {!function(string)=} opt_onError
 */
NicePageBuilder.util.mergeOptions = function( pageOptions, templeteStack, TEMPLETE_LIST, MIXIN_LIST, opt_onError ){
    if( NicePageBuilder.util.hasTEMPLETEProperty( pageOptions ) && !TEMPLETE_LIST ){
        if( opt_onError ){
            opt_onError( pageOptions.FILE_PATH + ' has TEMPLETE property, and no templetes found!' );
        } else {
            throw pageOptions.FILE_PATH + ' has TEMPLETE property, and no templetes found!';
        };
        return;
    };
    if( NicePageBuilder.util.hasMIXINSProperty( pageOptions ) && !MIXIN_LIST ){
        if( opt_onError ){
            opt_onError( pageOptions.FILE_PATH + ' has MIXINS property, and no mixins found!' );
        } else {
            throw pageOptions.FILE_PATH + ' has MIXINS property, and no mixins found!';
        };
        return;
    };

    let templetePath = pageOptions.TEMPLETE;
    let updatedAt = pageOptions.MODIFIED_AT;

    mergeMinxins( pageOptions.MIXINS );

    if( templetePath ){
        templeteStack[ 0 ] = templetePath;
    };

    while( templetePath ){
        const templete = TEMPLETE_LIST[ templetePath ];

        if( NicePageBuilder.DEFINE.DEBUG ){
            if( !templete ){
                throw 'Templete: ' + templetePath + ' required by ' + pageOptions.FILE_PATH + ' not found!';
            };
        };

        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        if( templeteOptions ){
            if( NicePageBuilder.util.hasMIXINSProperty( templeteOptions ) && !MIXIN_LIST ){
                if( opt_onError ){
                    opt_onError( templetePath + ' has MIXINS property, and no mixins found!' );
                } else {
                    throw templetePath + ' has MIXINS property, and no mixins found!';
                };
                return;
            };
            templetePath = '';
            mix( templeteOptions, /** @type {number} */ (templete[ NicePageBuilder.INDEXES.UPDATED_AT ]), true );
            mergeMinxins( templeteOptions.MIXINS );
            if( templetePath ){
                templeteStack.push( templetePath );
            };
        } else {
            templetePath = '';
        };
    };

    pageOptions.UPDATED_AT = updatedAt;

    /**
     * @param {!Array.<NicePageBuilder.SourceRootRelativePath> | void} mixinPathList
     */
    function mergeMinxins( mixinPathList ){
        if( mixinPathList ){
            for( let i = 0; i < mixinPathList.length; ++i ){
                const mixin = MIXIN_LIST[ mixinPathList[ i ] ];

                mix( /** @type {!NicePageBuilder.NicePageOptions} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_OPTIONS ]), /** @type {number} */ (mixin[ NicePageBuilder.INDEXES.UPDATED_AT ]), false );
            };
        };
    };

    /**
     * @param {!NicePageBuilder.NicePageOptions} altPageOptions 
     * @param {number} altUpdatedAt
     * @param {boolean} isTemplete
     */
    function mix( altPageOptions, altUpdatedAt, isTemplete ){
        let changed = 0;

        for( const k in altPageOptions ){
            if( NicePageBuilder.DEFINE.DEBUG && !isTemplete && k === 'MIXINS' ){
                throw 'Mixin has MIXINS property!';
            } else if( k === 'TEMPLETE' ){
                templetePath = templetePath || altPageOptions[ k ]; // page.html や templete.html にある TEMPLETE が優勢、mixin の中の TEMPLETE は劣勢
                if( templetePath === altPageOptions[ k ] ){
                    ++changed;
                };
            } else if( pageOptions[ k ] === undefined ){
                pageOptions[ k ] = altPageOptions[ k ];
                ++changed;
            };
        };
        if( changed || isTemplete ){
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
