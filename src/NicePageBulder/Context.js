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
 *   dest                   : *
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
        srcRootPath         : tinyPath._absolutePathOfSrcRoot,
        allPagesPath,
        metadataOfAllPagesPath,
        allMixinsPath,
        allTempletesPath,
        keywordTempletes    : _jsonFilePathToOriginalExtname( allTempletesPath, tinyPath ),
        keywordMixins       : _jsonFilePathToOriginalExtname( allMixinsPath   , tinyPath ),
        mixins              : options[ 'mixins'             ] || {},
        templetes           : options[ 'templetes'          ] || {},
        metadataOfAllPages  : options[ 'metadataOfAllPages' ] || {},
        _metadataOfAllPages : {},
        allPages            : {},
        _jsonList           : {},
        path                : tinyPath
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