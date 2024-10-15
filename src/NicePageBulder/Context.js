goog.provide( 'NicePageBuilder.Context' );
goog.provide( 'NicePageBuilder.createContext' );

goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'NicePageBuilder.SourceRootRelativeFilePath' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.require( 'TinyPath' );

/**
 * @typedef {{
 *   srcRootPath            : string,
 *   allPagesPath           : string,
 *   metadataOfAllPagesPath : string,
 *   allMixinsPath          : string,
 *   allTempletesPath       : string,
 *   mixins                 : (Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.Mixin>),
 *   templetes              : (Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.NicePageOrTemplete>),
 *   metadataOfAllPages     : (Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.Metadata>),
 *   _metadataOfAllPages    : (Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.Metadata>),
 *   allPages               : (Object.<NicePageBuilder.RootRelativeURL, !HTMLJsonWithMetadata>),
 *   keywordTempletes       : string,
 *   keywordMixins          : string,
 *   path                   : !TinyPath,
 *   _jsonList              : !Object.<NicePageBuilder.SourceRootRelativeFilePath, !Object>,
 *   html2json              : *,
 *   builder                : *,
 *   json2json              : *,
 *   json2html              : *,
 *   dest                   : *,
 *   storeMetadataOfNewPages : function(!Array.<!Vinyl | !HTMLJson | !HTMLJsonWithMetadata>)
 * }}
*/
NicePageBuilder.Context;

/**
 * @package
 * 
 * @param {Object=} opt_options
 * @return {!NicePageBuilder.Context}
 */
NicePageBuilder.createContext = function( opt_options ){
    const options     = opt_options || {},
          Path        = require( 'path' ),
          srcRootPath = Path.resolve( options[ 'srcRootPath' ] || './' ) + '/', // 'src' -> 'C://XX/XX/MyWebSiteProject/src/'
          tinyPath    = new TinyPath( options[ 'urlOrigin' ] || '', srcRootPath );

    const allPagesPath           = options[ 'allPagesPath'           ] || '',
          metadataOfAllPagesPath = options[ 'metadataOfAllPagesPath' ] || 'netadata-of-all-pages,json',
          allMixinsPath          = options[ 'allMixinsPath'          ] || 'all-mixins.json',
          allTempletesPath       = options[ 'allTempletesPath'       ] || 'all-templetes.json';

    return {
        srcRootPath             : tinyPath._absolutePathOfSrcRoot,
        allPagesPath,
        metadataOfAllPagesPath,
        allMixinsPath,
        allTempletesPath,
        keywordTempletes        : _jsonFilePathToOriginalExtname( allTempletesPath, tinyPath ),
        keywordMixins           : _jsonFilePathToOriginalExtname( allMixinsPath   , tinyPath ),
        mixins                  : options[ 'mixins'             ] || {},
        templetes               : options[ 'templetes'          ] || {},
        metadataOfAllPages      : options[ 'metadataOfAllPages' ] || {},
        _metadataOfAllPages     : {},
        allPages                : {},
        _jsonList               : {},
        path                    : tinyPath,
        storeMetadataOfNewPages : _storeMetadataOfNewPages
    };
};

/**
 * [2n+0] Vinyl
 * [2n+1] HTMLJson | HTMLJsonWithMetadata
 * 
 * @param {!Array.<!Vinyl | !HTMLJson | !HTMLJsonWithMetadata>} PAGE_FILE_LIST 
 */
function _storeMetadataOfNewPages( PAGE_FILE_LIST ){
    const context = this;

    for( let i = 0, l = PAGE_FILE_LIST.length; i < l; i += 2 ){
        const htmlJson = /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (PAGE_FILE_LIST[ i + 1 ]);

        if( NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
            const metadata = /** @type {!NicePageBuilder.Metadata} */ (htmlJson[ 0 ]);
            const rootRelativeURL = metadata.URL;

            if( !context.metadataOfAllPages[ rootRelativeURL ] ){
                const _metadata = NicePageBuilder.deepCopy( metadata );

                delete _metadata.URL;
                context.metadataOfAllPages[ rootRelativeURL ] = _metadata;
            };
        };
    };
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