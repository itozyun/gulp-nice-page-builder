goog.provide( 'NicePageBuilder.DEFINE.DEBUG' );
goog.provide( 'NicePageBuilder.srcRootPath' );

goog.provide( 'NicePageBuilder.util' );
goog.provide( 'NicePageBuilder.util.normalizePath' );
goog.provide( 'NicePageBuilder.util.isAbsoluteFilePath' );
goog.provide( 'NicePageBuilder.util.isAbsoluteURL' );
goog.provide( 'NicePageBuilder.util.isAbsolutePath' );
goog.provide( 'NicePageBuilder.util.isRootRelativePath' );
goog.provide( 'NicePageBuilder.util.isRelativePath' );
goog.provide( 'NicePageBuilder.util.absolutePathToSrcRootRelativePath' );
goog.provide( 'NicePageBuilder.util.rootRelativePathToAbsolutePath' );
goog.provide( 'NicePageBuilder.util.filePathToURL' );
goog.provide( 'NicePageBuilder.util.urlToFilePath' );
goog.provide( 'NicePageBuilder.util.relativePathToSrcRootRelativePath' );
goog.provide( 'NicePageBuilder.util.relativeURLToSrcRootRelativeURL' );
goog.provide( 'NicePageBuilder.util.rootRelativePathToRelativePath' );
goog.provide( 'NicePageBuilder.util.rootRelativeURLToRelativeURL' );
goog.provide( 'NicePageBuilder.util.getHTMLJson' );
goog.provide( 'NicePageBuilder.util.getNiceOptions' );

goog.requireType( 'NicePageOrTemplete' );
goog.requireType( 'NicePageOptions' );

/** @define {boolean} */
NicePageBuilder.DEFINE.DEBUG = goog.define( 'NicePageBuilder.DEFINE.DEBUG' , false );

/** @type {string} */
NicePageBuilder.srcRootPath = '';

/**
 * @param {string} filePath
 * @return {string}
 */
NicePageBuilder.util.normalizePath = function( filePath ){
    return filePath.split( '\\' ).join( '/' );
};

/**
 * @param {string} filePath
 * @return {boolean}
 */
NicePageBuilder.util.isAbsoluteFilePath = function( filePath ){
    return filePath.indexOf( NicePageBuilder.srcRootPath ) === 0;
};

/**
 * @param {string} url
 * @return {boolean}
 */
NicePageBuilder.util.isAbsoluteURL = function( url ){
    return url.substr( 0, 2 ) === '//' || url.substr( 0, 7 ) === 'http://' || url.substr( 0, 8 ) === 'https://';
};

/**
 * @param {string} filePathOrURL
 * @return {boolean}
 */
NicePageBuilder.util.isAbsolutePath = function( filePathOrURL ){
    return NicePageBuilder.util.isAbsoluteFilePath( filePathOrURL ) || NicePageBuilder.util.isAbsoluteURL( filePathOrURL );
};

/**
 * @param {string} filePathOrURL
 * @return {boolean}
 */
NicePageBuilder.util.isRootRelativePath = function( filePathOrURL ){
    return filePathOrURL.charAt( 0 ) === '/' && filePathOrURL.substr( 0, 2 ) !== '//';
};

/**
 * @param {string} filePath
 * @return {boolean}
 */
NicePageBuilder.util.isRelativePath = function( filePath ){
    return !NicePageBuilder.util.isAbsoluteFilePath( filePath ) && !NicePageBuilder.util.isRootRelativePath( filePath );
};

/**
 * Absolute path => Source root relative path
 * 
 * @param {string} filePath
 * @return {string}
 */
NicePageBuilder.util.absolutePathToSrcRootRelativePath = function( filePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isAbsoluteFilePath( filePath ) ){
            throw filePath + ' is not a absolute path!';
        };
    };
    // pathElements.shift();
    return NicePageBuilder.util.normalizePath( filePath ).substr( NicePageBuilder.srcRootPath.length - 1 ); // -1 で "/" を残す
};

/**
 * Source root relative path => Absolute path
 * 
 * @param {string} filePath
 * @return {string}
 */
NicePageBuilder.util.rootRelativePathToAbsolutePath = function( filePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( filePath ) ){
            throw filePath + ' is not a root relative path!';
        };
    };

    return NicePageBuilder.srcRootPath + filePath.substr( 1 ); // 頭に / がいる
};

/**
 * @param {string} filePath
 * @return {string}
 */
NicePageBuilder.util.filePathToURL = function( filePath ){
    var rootRelativeURL = filePath.split( 'index.html' );

    // "/index.html" => ["/", ""] => "/"
    // "/index.html/index.html" => ["/", "/", ""] => "/index.html/"
    if( !rootRelativeURL[ rootRelativeURL.length - 1 ] ){
        rootRelativeURL.pop();
    };
    return rootRelativeURL.join( 'index.html' );
};

/**
 * @param {string} url
 * @return {string}
 */
NicePageBuilder.util.urlToFilePath = function( url ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( NicePageBuilder.util.isAbsoluteURL( url ) ){
            throw url + ' is not a root relative path or relative path!';
        };
    };

    var urlElements = url.split( '#' )[ 0 ].split( '/' );

    // "/" => ["", ""] => "/index.html"
    // "/index.html/" => ["", "index.html", ""] => "/index.html/index.html"
    if( !urlElements[ urlElements.length - 1 ] ){
        urlElements[ urlElements.length - 1 ] = 'index.html';
    };
    return urlElements.join( '/' );
};

/**
 * @param {string} filePath
 * @return {string}
 */
NicePageBuilder.util.htmlJsonfilePathToHtmlFilePath = function( filePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( filePath ) ){
            throw filePath + ' is not a root relative path!';
        };
    };

    var rootRelativeURL = filePath.split( '.json' );

    // "/home.html.json" => ["/home.html", ""] => "/"
    // "/.json-store/products.html.json" => ["/", "-store/products.html", ""] => "/.json-store/products.html"
    if( !rootRelativeURL[ rootRelativeURL.length - 1 ] ){
        rootRelativeURL.pop();
    };
    return rootRelativeURL.join( '.json' );
};

/**
 * @param {string} basePath filePath!!
 * @param {string} relativePath
 * @return {string}
 */
NicePageBuilder.util.relativePathToSrcRootRelativePath = function( basePath, relativePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( basePath ) ){
            throw basePath + ' is not a root relative path!';
        };
        if( NicePageBuilder.util.isRootRelativePath( relativePath ) || NicePageBuilder.util.isAbsolutePath( relativePath ) ){
            throw relativePath + ' is not a relative path!';
        };
    };

    var basePathElements = basePath.split( '/' );
    basePathElements.pop();
    basePathElements[ 0 ] === '' && basePathElements.shift();

    if( relativePath.substr( 0, 2 ) === './' ){
        relativePath = relativePath.substr( 2 );
    };

    // 相対リンク
    while( relativePath.substr( 0, 3 ) === '../' ){
        relativePath = relativePath.substr( 3 );
        --basePathElements.length;
    };
    return basePathElements.join( '/' ) + '/' + relativePath;
};

/**
 * @param {string} basePath filePath!!
 * @param {string} relativeURL
 * @return {string}
 */
NicePageBuilder.util.relativeURLToSrcRootRelativeURL = function( basePath, relativeURL ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( basePath ) ){
            throw basePath + ' is not a root relative path!';
        };
        if( NicePageBuilder.util.isRootRelativePath( relativeURL ) || NicePageBuilder.util.isAbsolutePath( relativeURL ) ){
            throw relativeURL + ' is not a relative path!';
        };
    };

    var targetHash      = relativeURL.substr( relativeURL.indexOf( '#' ) );
    var rootRelativeURL = NicePageBuilder.util.filePathToURL(
                              NicePageBuilder.util.rootRelativePathToRelativePath(
                                  NicePageBuilder.util.urlToFilePath( basePath ),
                                  NicePageBuilder.util.urlToFilePath( relativeURL )
                              )
                          );

    if( targetHash ){
        rootRelativeURL += targetHash;
    };
    return rootRelativeURL;
};

/**
 * @param {string} basePath filePath!!
 * @param {string} rootRelativePath
 * @return {string}
 */
NicePageBuilder.util.rootRelativePathToRelativePath = function( basePath, rootRelativePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( basePath ) ){
            throw basePath + ' is not a root relative path!';
        };
        if( !NicePageBuilder.util.isRootRelativePath( rootRelativePath ) ){
            throw rootRelativePath + ' is not a root relative path!';
        };
    };

    var link = [], i = 0, skipCompare = false,
        basePathElements, baseName,
        rootRelativePathElements, targetName,
        depth, l;

    basePathElements = basePath.split( '/' );
    baseName = basePathElements.pop();

    if( basePath === rootRelativePath ){
        return baseName;
    };

    rootRelativePathElements = rootRelativePath.split( '/' );
    targetName = rootRelativePathElements.pop();

    for( depth = basePathElements.length, l = Math.max( rootRelativePathElements.length, depth ); i < l; ++i ){
        if( skipCompare || rootRelativePathElements[ i ] !== basePathElements[ i ] ){
            if( i < depth ){
                link.unshift( '..' );
            };
            if( rootRelativePathElements[ i ] ){
                link.push( rootRelativePathElements[ i ] );
            };
            skipCompare = true;
        };
    };
    if( skipCompare || baseName !== targetName ){
        link.push( targetName );
    };
    return link.join( '/' );
};

/**
 * @param {string} basePath filePath!!
 * @param {string} rootRelativeURL
 * @return {string}
 */
NicePageBuilder.util.rootRelativeURLToRelativeURL = function( basePath, rootRelativeURL ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( basePath ) ){
            throw basePath + ' is not a root relative path!';
        };
        if( !NicePageBuilder.util.isRootRelativePath( rootRelativeURL ) ){
            throw rootRelativeURL + ' is not a root relative path!';
        };
    };

    var targetHash  = rootRelativeURL.substr( rootRelativeURL.indexOf( '#' ) );
    var relativeURL = NicePageBuilder.util.filePathToURL(
                          NicePageBuilder.util.rootRelativePathToRelativePath(
                              NicePageBuilder.util.urlToFilePath( basePath ),
                              NicePageBuilder.util.urlToFilePath( rootRelativeURL )
                          )
                      );

    if( targetHash ){
        relativeURL += targetHash;
    };
    return relativeURL ? relativeURL : './';
};

/**
 * 
 * @param {!NicePageOrTemplete} nicePageOrTemplete 
 * @return {!Array}
 */
NicePageBuilder.util.getHTMLJson = function( nicePageOrTemplete ){
    var htmlJson = /** @type {!Array} */ (nicePageOrTemplete[ STAT_INDEXES.HTML_JSON ]);

    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !m_isArray( htmlJson ) ){
            throw 'NOT_HTML_JSON_ERROR!';
        };
    };
    return htmlJson;
};

/**
 * 
 * @param {!NicePageOrTemplete} nicePageOrTemplete 
 * @return {NicePageOptions | null}
 */
NicePageBuilder.util.getNiceOptions = function( nicePageOrTemplete ){
    var options = /** @type {!NicePageOptions} */ (NicePageBuilder.util.getHTMLJson( nicePageOrTemplete )[ 0 ]);

    return !m_isArray( options ) && m_isObject( options ) ? options : null;
};
