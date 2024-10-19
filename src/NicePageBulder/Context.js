goog.provide( 'NicePageBuilder.Context' );

goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'NicePageBuilder.SourceRootRelativeFilePath' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.require( 'TinyPath' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.util.isPrebuild' );
goog.require( 'NicePageBuilder.util.traverseMetadataStack' );

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

    this.srcRootPath         = tinyPath._absolutePathOfSrcRoot;
    this.allPagesPath        = options[ 'allPagesPath'           ] || '';
    this.allPageMetadataPath = options[ 'allPageMetadataPath' ] || 'metadata-of-all-pages.json';
    this.allMixinsPath       = options[ 'allMixinsPath'          ] || 'all-mixins.json';
    this.allTempletesPath    = options[ 'allTempletesPath'       ] || 'all-templetes.json';
    this.keywordMixins       = _jsonFilePathToOriginalExtname( this.allMixinsPath   , tinyPath );
    this.keywordTempletes    = _jsonFilePathToOriginalExtname( this.allTempletesPath, tinyPath );
    this.mixins              = options[ 'mixins'             ] || {};
    this.templetes           = options[ 'templetes'          ] || {};
    this.allPageMetadata     = options[ 'allPageMetadata' ] || {};
    this.mergedPropertiesOf  = {};
    this.allPages            = {};
    /** @const {!Object.<string, (!Object | !Array)>} */
    this.additionalJsons     = options[ 'additionalJsons'    ] || {};
    this.path                = tinyPath;

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

    if( !this.allPageMetadata[ rootRelativeURL ] ){
        this.allPageMetadata[ rootRelativeURL ] = _deepCopyMetadata( metadata );
    };
    return this.allPageMetadata[ rootRelativeURL ];
};

/**
 * @this {!NicePageBuilder.Context}
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Array.<NicePageBuilder.RootRelativeURL>=} opt_templeteStack
 * @return {!NicePageBuilder.Metadata}
 */
NicePageBuilder.Context.prototype.getMergedMetadata = function( metadata, opt_onError, opt_templeteStack ){
    const rootRelativeURL = metadata.URL;

    this.storeMetadata( metadata );

    metadata = this.allPageMetadata[ rootRelativeURL ];

    _mergeMetadata( this, metadata, opt_templeteStack || [], opt_onError );

    return metadata;
};

/**
 * @param {string} rootRelativeURL
 * @param {!function((string | !Error))=} opt_onError
 * @return {NicePageBuilder.Metadata | null} 
 */
NicePageBuilder.Context.prototype.getMetadataOf = function( rootRelativeURL, opt_onError ){
    rootRelativeURL = this.path.clearHash( rootRelativeURL );

    let metadata = this.allPageMetadata[ rootRelativeURL ] || null;

    if( metadata ){
        _mergeMetadata( this, metadata, [], opt_onError );
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
        _unmerge( mergedProperties, _metadata );
    };

    return _metadata;
};

/**
 * @private
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!Array.<NicePageBuilder.RootRelativeURL>} templeteStack
 * @param {!function((string | !Error))=} opt_onError
 */
function _mergeMetadata( context, metadata, templeteStack, opt_onError ){
    if( NicePageBuilder.util.isPrebuild( metadata ) ){
        // MIXINS が更新されているかもしれないので unmerge して merge する
        const rootRelativeURL = metadata.URL;
        let mergedProperties = context.mergedPropertiesOf[ rootRelativeURL ];

        if( mergedProperties ){
            _unmerge( mergedProperties, metadata );
        };
        context.mergedPropertiesOf[ rootRelativeURL ] = _merge( context, metadata, templeteStack, opt_onError );
    };
};

/**
 * @private
 * @param {!Array.<NicePageBuilder.RootRelativeURL>} mergedProperties
 * @param {!NicePageBuilder.Metadata} targetMetadata
 */
function _unmerge( mergedProperties, targetMetadata ){
    for( const k in targetMetadata ){
        if( mergedProperties.indexOf( k ) !== -1 ){
            delete targetMetadata[ k ];
        };
    };
};

/**
 * @private
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} targetMetadata
 * @param {!Array.<NicePageBuilder.RootRelativeURL>} templeteStack
 * @param {!function((string | !Error))=} opt_onError
 */
function _merge( context, targetMetadata, templeteStack, opt_onError ){
    /**
     * @param {!NicePageBuilder.Metadata} metadataToMerge
     * @param {number} metadataToMergeUpatedAt
     * @param {boolean} isTemplete
     */
    function mix( metadataToMerge, metadataToMergeUpatedAt, isTemplete ){
        let changed = false;

        for( const k in metadataToMerge ){
            if( k !== 'MIXINS' && k !== 'TEMPLETE' && targetMetadata[ k ] === undefined ){
                targetMetadata[ k ] = metadataToMerge[ k ];
                changed = true;
                mergedProperties.push( k );
            };
        };
        if( changed || isTemplete ){
            if( updatedAt < metadataToMergeUpatedAt ){
                updatedAt = metadataToMergeUpatedAt;
            };
        };
    };

    const mergedProperties = [];
    let updatedAt;

    NicePageBuilder.util.traverseMetadataStack(
        context, targetMetadata,
        /**
         * 
         * @param {NicePageBuilder.RootRelativeURL} mixinRootRelativeURL 
         * @param {!NicePageBuilder.Metadata} metadataMixin
         * @param {number} updatedAt
         */
        function( mixinRootRelativeURL, metadataMixin, updatedAt ){
            mix( metadataMixin, updatedAt, false );
        },
        /**
         * 
         * @param {NicePageBuilder.RootRelativeURL} templeteRootRelativeURL 
         * @param {NicePageBuilder.Metadata | null} metadataTemplete
         * @param {number} updatedAt
         */
        function( templeteRootRelativeURL, metadataTemplete, updatedAt ){
            templeteStack.push( templeteRootRelativeURL );
            metadataTemplete && mix( metadataTemplete, updatedAt, true );
        },
        opt_onError
    );

    mergedProperties.push( 'UPDATED_AT' );
    targetMetadata.UPDATED_AT = updatedAt;

    return mergedProperties;
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
