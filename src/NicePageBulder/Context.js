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
 */
NicePageBuilder.Context.prototype.storeMetadata = function( metadata ){
    const rootRelativeURL = metadata.URL;

    if( !this.metadataOfAllPages[ rootRelativeURL ] ){
        this.metadataOfAllPages[ rootRelativeURL ] = _deepCopyMetadata( metadata );
    };
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
        if( !this.mergedPropertiesOf[ rootRelativeURL ] ){
            this.mergedPropertiesOf[ rootRelativeURL ] = this.mergeMetadata( metadata, [], opt_onError );
        };
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
 * @return {!Array.<string>} merged properties
 */
NicePageBuilder.Context.prototype.mergeMetadata = function( metadata, templeteStack, opt_onError ){
    return _mergeOrUnmerge( null, this,  metadata, templeteStack, opt_onError );
};

/**
 * @param {Array.<string> | null} mergedProperties for unmerge
 * @param {!NicePageBuilder.Context} context
 * @param {!NicePageBuilder.Metadata} metadata
 * @param {!Array.<NicePageBuilder.RootRelativeURL>} templeteStack
 * @param {!function((string | !Error))=} opt_onError
 * @return {!Array.<string>} merged properties
 */
function _mergeOrUnmerge( mergedProperties, context,  metadata, templeteStack, opt_onError ){
    const isUnmerge = !!mergedProperties;

    if( !isUnmerge ){
        mergedProperties = [];
    };

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
        templeteRootRelativePath = '';

        if( templeteMetadata ){
            mix( tmpTempleteRootRelativePath, templeteMetadata, /** @type {number} */ (templete[ NicePageBuilder.INDEXES.UPDATED_AT ]), false );
            mergeMinxins( tmpTempleteRootRelativePath, templeteMetadata.MIXINS );
            if( templeteRootRelativePath ){
                templeteStack.push( templeteRootRelativePath );
            };
        };
    };

    metadata.UPDATED_AT = updatedAt;

    return /** @type {!Array.<string>} */ (mergedProperties);

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
            if( isUnmerge && mergedProperties.indexOf( k ) !== -1 ){
                if( metadata[ k ] === altMetadata[ k ] ){
                    delete metadata[ k ];
                };
            } else if( NicePageBuilder.DEFINE.DEBUG && isMixin && k === 'MIXINS' ){ // TODO
                throw 'Mixin has MIXINS property!';
            } else if( k === 'TEMPLETE' ){
                if( !templeteRootRelativePath ){
                    templeteRootRelativePath = context.path.toRootRelativeURL( rootRelativePath, altMetadata[ k ] ); // page.html や templete.html にある TEMPLETE が優勢、mixin の中の TEMPLETE は劣勢
                    ++changed;
                };
            } else if( !isUnmerge && metadata[ k ] === undefined ){
                metadata[ k ] = altMetadata[ k ];
                ++changed;
                mergedProperties.push( k );
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
