goog.provide( 'NicePageBuilder.Context' );

goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'NicePageBuilder.SourceRootRelativeFilePath' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.require( 'TinyPath' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );

/**
 * @package
 * @constructor
 * 
 * @param {Object=} opt_options
 * @return {!NicePageBuilder.Context}
 */
NicePageBuilder.Context = function( opt_options ){
    const options     = opt_options || {},
          Path        = require( 'path' ),
          srcRootPath = Path.resolve( options[ 'srcRootPath' ] || './' ) + '/', // 'src' -> 'C://XX/XX/MyWebSiteProject/src/'
          tinyPath    = new TinyPath( options[ 'urlOrigin' ] || '', srcRootPath );

    this.srcRootPath            = tinyPath._absolutePathOfSrcRoot,
    this.allPagesPath           = options[ 'allPagesPath'           ] || '';
    this.metadataOfAllPagesPath = options[ 'metadataOfAllPagesPath' ] || 'metadata-of-all-pages.json';
    this.allMixinsPath          = options[ 'allMixinsPath'          ] || 'all-mixins.json';
    this.allTempletesPath       = options[ 'allTempletesPath'       ] || 'all-templetes.json';
    this.keywordMixins          = _jsonFilePathToOriginalExtname( this.allMixinsPath   , tinyPath ),
    this.keywordTempletes       = _jsonFilePathToOriginalExtname( this.allTempletesPath, tinyPath ),
    this.mixins                 = options[ 'mixins'             ] || {},
    this.templetes              = options[ 'templetes'          ] || {},
    this.metadataOfAllPages     = options[ 'metadataOfAllPages' ] || {},
    this.mergedPropertiesOf     = {},
    this.allPages               = {},
    this.allAppendixes          = {},
    this.path                   = tinyPath;

    /** @type {*} */ this.html2json;
    /** @type {*} */ this.builder;
    /** @type {*} */ this.json2json;
    /** @type {*} */ this.json2html;
    /** @type {*} */ this.dest;
};

/**
 * [2n+0] Vinyl
 * [2n+1] HTMLJson | HTMLJsonWithMetadata
 * 
 * @this {!NicePageBuilder.Context}
 * @param {!Array.<string | !HTMLJson | !HTMLJsonWithMetadata>} PAGE_FILE_LIST 
 */
NicePageBuilder.Context.prototype.storeMetadataOfNewPages = function( PAGE_FILE_LIST ){
    for( let i = 0, l = PAGE_FILE_LIST.length; i < l; i += 2 ){
        const htmlJson = /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (PAGE_FILE_LIST[ i + 1 ]);

        if( NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
            this.storeMetadata( /** @type {!NicePageBuilder.Metadata} */ (htmlJson[ 0 ]) );
        };
    };
};

/**
 * @this {!NicePageBuilder.Context}
 * @param {!NicePageBuilder.Metadata} metadata
 * @return {!NicePageBuilder.Metadata}
 */
NicePageBuilder.Context.prototype.storeMetadata = function( metadata ){
    const rootRelativeURL = metadata.URL;

    if( !this.metadataOfAllPages[ rootRelativeURL ] ){
        this.metadataOfAllPages[ rootRelativeURL ] = _deepCopyMetadata( metadata );
    };
    return this.metadataOfAllPages[ rootRelativeURL ];
};

/**
 * @this {!NicePageBuilder.Context}
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!function((string | !Error))=} opt_onError
 * @return {!NicePageBuilder.Metadata}
 */
NicePageBuilder.Context.prototype.getMergedMetadata = function( metadata, opt_onError ){
    const rootRelativeURL = metadata.URL;

    this.storeMetadata( metadata );

    metadata = this.metadataOfAllPages[ rootRelativeURL ];

    this.mergeMetadata( metadata, [], opt_onError );

    return metadata;
};

/**
 * @param {string} rootRelativeURL
 * @param {!function((string | !Error))=} opt_onError
 * @return {NicePageBuilder.Metadata | null} 
 */
NicePageBuilder.Context.prototype.getMetadataOf = function( rootRelativeURL, opt_onError ){
    let metadata = this.metadataOfAllPages[ rootRelativeURL ] || null;

    if( metadata ){
        // if( !this.mergedPropertiesOf[ rootRelativeURL ] ){
            this.mergeMetadata( metadata, [], opt_onError );
        // };
    };
    return metadata;
};

/**
 * @param {!NicePageBuilder.Metadata} metadata
 */
NicePageBuilder.Context.prototype.unmergeMetadata = function( metadata ){
    const rootRelativeURL  = metadata.URL;
    const mergedProperties = this.mergedPropertiesOf[ rootRelativeURL ];
    const _metadata        = _deepCopyMetadata( metadata );

    if( mergedProperties ){
        _mergeOrUnmerge( mergedProperties, this,  _metadata, [] );
    };

    delete _metadata.UPDATED_AT;

    return _metadata;
};

/**
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!Array.<NicePageBuilder.RootRelativeURL>} templeteStack
 * @param {!function((string | !Error))=} opt_onError
 */
NicePageBuilder.Context.prototype.mergeMetadata = function( metadata, templeteStack, opt_onError ){
    // MIXINS が更新されているかもしれないので unmerge して merge する
    const rootRelativeURL  = metadata.URL;
    let mergedProperties = this.mergedPropertiesOf[ rootRelativeURL ];

    if( mergedProperties ){
        _mergeOrUnmerge( mergedProperties, this,  metadata, [] );
    };

    mergedProperties = _mergeOrUnmerge( null, this,  metadata, templeteStack, opt_onError );

    if( mergedProperties.length ){
        this.mergedPropertiesOf[ rootRelativeURL ] = mergedProperties;
    };
};

/**
 * @param {Array.<string> | null} mergedProperties for unmerge
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} targetMetadata
 * @param {!Array.<NicePageBuilder.RootRelativeURL>} templeteStack
 * @param {!function((string | !Error))=} opt_onError
 * @return {!Array.<string>} merged properties
 */
function _mergeOrUnmerge( mergedProperties, context,  targetMetadata, templeteStack, opt_onError ){ // TODO traverse
    const isUnmerge = !!mergedProperties;

    let updatedAt = targetMetadata.MODIFIED_AT;
    let templeteRootRelativePath;

    if( !isUnmerge ){
        mergedProperties = [];
    };

    if( targetMetadata.TEMPLETE ){
        templeteRootRelativePath = context.path.toRootRelativeURL( targetMetadata.URL, targetMetadata.TEMPLETE );
    };

    mergeMinxins( targetMetadata.URL, targetMetadata );

    while( templeteRootRelativePath ){
        templeteStack.push( templeteRootRelativePath );

        const tmpTempleteRootRelativePath = templeteRootRelativePath;
        const templete                    = context.templetes[ templeteRootRelativePath ];

        if( !templete ){
            if( opt_onError ){
                opt_onError( 'Templete not found!' );
            } else if( NicePageBuilder.DEFINE.DEBUG ){
                throw '[merge] Templete: ' + templeteRootRelativePath + ' required by ' + context.path.urlToFilePath( targetMetadata.URL ) + ' not found!';
            };
        };

        const templeteMetadata = NicePageBuilder.util.getMetadata( templete );
        templeteRootRelativePath = '';

        if( templeteMetadata ){
            mix( tmpTempleteRootRelativePath, templeteMetadata, /** @type {number} */ (templete[ NicePageBuilder.INDEXES.UPDATED_AT ]), true );
            mergeMinxins( tmpTempleteRootRelativePath, templeteMetadata );
        };
    };

    targetMetadata.UPDATED_AT = updatedAt;

    return /** @type {!Array.<string>} */ (mergedProperties);

    /**
     * @param {string} baseRootRelativeURL
     * @param {!NicePageBuilder.Metadata | void} metadata
     */
    function mergeMinxins( baseRootRelativeURL, metadata ){
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

                mix( mixinRootRelativeURL, /** @type {!NicePageBuilder.Metadata} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_OPTIONS ]), /** @type {number} */ (mixin[ NicePageBuilder.INDEXES.UPDATED_AT ]), false );
            };
        };
    };

    /**
     * @param {string} baseRootRelativeURL
     * @param {!NicePageBuilder.Metadata} metadataToMerge
     * @param {number} metadataToMergeUpatedAt
     * @param {boolean} isTemplete
     */
    function mix( baseRootRelativeURL, metadataToMerge, metadataToMergeUpatedAt, isTemplete ){
        let changed = 0;

        for( const k in metadataToMerge ){
            if( k === 'MIXINS' ){

            } else if( k === 'TEMPLETE' ){
                if( !templeteRootRelativePath ){
                    templeteRootRelativePath = context.path.toRootRelativeURL( baseRootRelativeURL, metadataToMerge[ k ] ); // page.html や templete.html にある TEMPLETE が優勢、mixin の中の TEMPLETE は劣勢
                    ++changed;
                };
            } else if( isUnmerge && mergedProperties.indexOf( k ) !== -1 ){
                if( true || _deepEquals( targetMetadata[ k ], metadataToMerge[ k ] ) ){
                    delete targetMetadata[ k ];
                };
            } else if( !isUnmerge && targetMetadata[ k ] === undefined ){
                targetMetadata[ k ] = metadataToMerge[ k ];
                ++changed;
                mergedProperties.push( k );
            };
        };
        if( changed || isTemplete ){
            if( updatedAt < metadataToMergeUpatedAt ){
                updatedAt = metadataToMergeUpatedAt;
            };
        };
        mergeMinxins( baseRootRelativeURL, metadataToMerge );
    };
};

/**
 * @private
 * @param {!NicePageBuilder.Metadata} metadata
 * @return {!NicePageBuilder.Metadata}
 */
function _deepCopyMetadata( metadata ){
    return /** @type {!NicePageBuilder.Metadata} */ (JSON.parse( JSON.stringify( metadata ) ));
};

/**
 * @private
 * `"/.json/xxx.AAA.json" => "AAA"`
 * 
 * @param {string} filePath
 * @param {!TinyPath} path
 */
function _jsonFilePathToOriginalExtname( filePath, path ){
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
 * @private
 *   original:
 *     https://qiita.com/dojyorin/items/a5eb096c195aa1377737
 * @param {*} d1 
 * @param {*} d2 
 * @return {boolean}
 */
function _deepEquals( d1, d2 ){
    function toKV( obj ){
        var keyList = [], i = -1, key;

        for( key in obj  ){
            keyList[ ++i ] = key;
        };
        return keyList.sort();
    };

    var isArray, l, i, keyList1, keyList2, keyList1Len, k1, k2;

    if( d1 === d2 ){
        return true;
    };

    if( !m_isObject( d1 ) || !m_isObject( d2 ) ){
        return false;
    };

    isArray = m_isArray( d1 );

    if( isArray !== m_isArray( d2 ) ){
        return false;
    };

    if( isArray ){
        l = d1.length;

        if( l !== d2.length ){
            return false;
        };

        for( i = 0; i < l; ++i ){
            if( !_deepEquals( d1[ i ], d2[ i ] ) ){
                return false;
            };
        };
    } else {
        keyList1 = toKV( d1 ),
        keyList2 = toKV( d2 ),
        keyList1Len = keyList1.length;

        if( keyList1Len !== keyList2.length ){
            return false;
        };

        for( i = 0; i < keyList1Len; ++i ){
            k1 = keyList1[ i ];
            k2 = keyList2[ i ];

            if( k1 !== k2 || !_deepEquals( d1[ k1 ], d2[ k1 ] ) ){
                return false;
            };
        };
    };
    return true;
};
