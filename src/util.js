goog.provide( 'NicePageBuilder.util' );
goog.provide( 'NicePageBuilder.srcRootPath' );
goog.provide( 'NicePageBuilder.util.normalizePath' );
goog.provide( 'NicePageBuilder.util.isAbsoluteFilePath' );
goog.provide( 'NicePageBuilder.util.isAbsoluteURL' );
goog.provide( 'NicePageBuilder.util.isAbsolutePath' );
goog.provide( 'NicePageBuilder.util.isRootRelativePath' );
goog.provide( 'NicePageBuilder.util.absolutePathToSrcRootRelativePath' );
goog.provide( 'NicePageBuilder.util.rootRelativePathToAbsolutePath' );
goog.provide( 'NicePageBuilder.util.rootRelativePathToRootRelativeURL' );
goog.provide( 'NicePageBuilder.util.relativePathToSrcRootRelativePath' );
goog.provide( 'NicePageBuilder.util.relativeURLToSrcRootRelativeURL' );
goog.provide( 'NicePageBuilder.util.rootRelativePathToRelativePath' );
goog.provide( 'NicePageBuilder.util.rootRelativeURLToRelativeURL' );
goog.provide( 'NicePageBuilder.util.getHTMLJson' );
goog.provide( 'NicePageBuilder.util.getNiceOptions' );

goog.requireType( 'NicePageOrTemplete' );
goog.requireType( 'NicePageOptions' );
goog.require( 'STAT_INDEXES' );

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
NicePageBuilder.util.rootRelativePathToRootRelativeURL = function( filePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( filePath ) ){
            throw filePath + ' is not a root relative path!';
        };
    };

    var rootRelativeURL = filePath.split( 'index.html' );

    // "/index.html" => ["/", ""] => "/"
    // "/index.html/index.html" => ["/", "/", ""] => "/index.html/"
    if( !rootRelativeURL[ rootRelativeURL.length - 1 ] ){
        rootRelativeURL.pop();
    };
    return rootRelativeURL.join( 'index.html' );
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

    basePath = basePath.split( '/' );
    basePath[ 0 ] === '' && basePath.shift();

    // 相対リンク
    while( relativePath.substr( 0, 3 ) === '../' ){
        relativePath = relativePath.substr( 3 );
        --basePath.length;
    };
    return ( basePath.length ? basePath.join( '/' ) + '/' : '' ) + relativePath;
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
        if( NicePageBuilder.util.isRootRelativePath( relativePath ) || NicePageBuilder.util.isAbsolutePath( relativePath ) ){
            throw relativeURL + ' is not a relative path!';
        };
    };

    var targetHash      = relativeURL.substr( relativeURL.indexOf( '#' ) );
    var rootRelativeURL = NicePageBuilder.util.rootRelativePathToRelativePath( basePath, relativeURL.split( '#' )[ 0 ] )

    rootRelativeURL = rootRelativeURL === '/index.html' ? '/' : rootRelativeURL;

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

    var link = [], i = 0, skipCompare = false, baseName, targetName, l, depth;

    basePath = basePath.split( '/' );
    baseName = basePath.pop();
    baseName = baseName === '' ? 'index.html' : baseName;

    rootRelativePath = rootRelativePath.split( '/' );
    targetName = rootRelativePath.pop();
    targetName = targetName === '' ? 'index.html' : targetName;

    for( depth = basePath.length, l = Math.max( rootRelativePath.length, depth ); i < l; ++i ){
        if( skipCompare || rootRelativePath[ i ] !== basePath[ i ] ){
            if( i < depth ){
                link.unshift( '..' );
            };
            if( rootRelativePath[ i ] ){
                link.push( rootRelativePath[ i ] );
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

    var targetHash  = rootRelativePath.substr( rootRelativePath.indexOf( '#' ) );
    var relativeURL = NicePageBuilder.util.rootRelativePathToRelativePath( basePath, rootRelativeURL.split( '#' )[ 0 ] )

    relativeURL = relativeURL === 'index.html' ? './' : relativeURL;

    if( targetHash ){
        relativeURL += targetHash;
    };
    return relativeURL;
};

/**
 * 
 * @param {!NicePageOrTemplete} nicePageOrTemplete 
 * @return {!Array}
 */
NicePageBuilder.util.getHTMLJson = function( nicePageOrTemplete ){
    return /** @type {!Array} */ (nicePageOrTemplete[ STAT_INDEXES.HTML_JSON ]);
};

/**
 * 
 * @param {!NicePageOrTemplete} nicePageOrTemplete 
 * @return {!NicePageOptions}
 */
NicePageBuilder.util.getNiceOptions = function( nicePageOrTemplete ){
    return /** @type {!NicePageOptions} */ (NicePageBuilder.util.getHTMLJson( nicePageOrTemplete )[ 0 ]);
};
