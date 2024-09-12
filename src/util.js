goog.provide( 'NicePageBuilder.util' );

goog.provide( 'NicePageBuilder.srcRootPath' );

goog.requireType( 'NicePageOrTemplete' );
goog.requireType( 'NicePageOptions' );

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
    return url.substr(0, 2) === '//' || url.substr(0, 7) === 'http://' || url.substr(0, 8) === 'https://';
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
    return filePathOrURL.charAt( 0 ) === '/' &&
           !NicePageBuilder.util.isAbsoluteURL( filePathOrURL ); // '//' で始まらない
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
            throw filePath + ' は絶対パスではありません!';
        };
    };
    // pathElements.shift();
    return '/' + NicePageBuilder.util.normalizePath( filePath ).substring( NicePageBuilder.srcRootPath.length );
};

/**
 * Source root relative path => Absolute path
 * 
 * @param {string} filePath
 * @return {string}
 */
NicePageBuilder.util.srcRootRelativePathToAbsolutePath = function( filePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( filePath ) ){
            throw filePath + ' はルート相対パスではありません!';
        };
    };

    return NicePageBuilder.srcRootPath + filePath.substr( 1 ); // 頭に / がいる
};

/**
 * @param {string} filePath
 * @return {string}
 */
NicePageBuilder.util.filePathToURL = function( filePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( filePath ) ){
            throw filePath + ' はルート相対パスではありません!';
        };
    };

    filePath = filePath.split( 'index.html' );

    // "/index.html" => ["/", ""] => "/"
    // "/index.html/index.html" => ["/", "/", ""] => "/index.html/"
    if( !filePath[ filePath.length - 1 ] ){
        filePath.pop();
    };
    return filePath.join( 'index.html' );
};

/**
 * @param {string} basePath filePath!!
 * @param {string} relativePath
 * @return {string}
 */
NicePageBuilder.util.relativePathToSrcRootRelativePath = function( basePath, relativePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( basePath ) ){
            throw basePath + ' はルート相対パスではありません!';
        };
        if( NicePageBuilder.util.isRootRelativePath( relativePath ) ){
            throw relativePath + ' は相対パスではありません!';
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
NicePageBuilder.util.relativePathToSrcRootRelativePath = function( basePath, relativeURL ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( basePath ) ){
            throw basePath + ' はルート相対パスではありません!';
        };
        if( NicePageBuilder.util.isRootRelativePath( relativeURL ) ){
            throw relativeURL + ' は相対パスではありません!';
        };
    };

    var targetHash       = relativeURL.substring( relativeURL.indexOf( '#' ) );
    var rootRelativePath = NicePageBuilder.util.srcRootRelativePathToRelativePath( basePath, relativeURL.split( '#' )[ 0 ] )

    rootRelativePath = rootRelativePath === '/index.html' ? '/' : rootRelativePath;

    if( targetHash ){
        rootRelativePath += targetHash;
    };
    return rootRelativePath;
};

/**
 * @param {string} basePath filePath!!
 * @param {string} srcRootRelativePath
 * @return {string}
 */
NicePageBuilder.util.srcRootRelativePathToRelativePath = function( basePath, srcRootRelativePath ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( basePath ) ){
            throw basePath + ' はルート相対パスではありません!';
        };
        if( !NicePageBuilder.util.isRootRelativePath( srcRootRelativePath ) ){
            throw srcRootRelativePath + ' はルート相対パスではありません!';
        };
    };

    var currentName, link = [], targetName, i = 0, l, depth, skipCompare = false;

    basePath = basePath.split( '/' );
    baseName = basePath.pop();
    baseName = baseName === '' ? 'index.html' : baseName;

    srcRootRelativePath = srcRootRelativePath.split( '/' );
    targetName = srcRootRelativePath.pop();
    targetName = targetName === '' ? 'index.html' : targetName;

    for( depth = basePath.length, l = Math.max( srcRootRelativePath.length, depth ); i < l; ++i ){
        if( skipCompare || srcRootRelativePath[ i ] !== basePath[ i ] ){
            if( i < depth ){
                link.unshift( '..' );
            };
            if( srcRootRelativePath[ i ] ){
                link.push( srcRootRelativePath[ i ] );
            };
            skipCompare = true;
        };
    };
    if( skipCompare || currentName !== targetName ){
        link.push( targetName );
    };
    return link.join( '/' );
};


/**
 * @param {string} basePath filePath!!
 * @param {string} srcRootRelativeURL
 * @return {string}
 */
NicePageBuilder.util.srcRootRelativeURLToRelativeURL = function( basePath, srcRootRelativeURL ){
    if( NicePageBuilder.DEFINE.DEBUG ){
        if( !NicePageBuilder.util.isRootRelativePath( basePath ) ){
            throw basePath + ' はルート相対パスではありません!';
        };
        if( !NicePageBuilder.util.isRootRelativePath( srcRootRelativeURL ) ){
            throw srcRootRelativeURL + ' はルート相対パスではありません!';
        };
    };

    var targetHash  = srcRootRelativePath.substring( srcRootRelativePath.indexOf( '#' ) );
    var relativeURL = NicePageBuilder.util.srcRootRelativePathToRelativePath( basePath, srcRootRelativeURL.split( '#' )[ 0 ] )

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
    return /** @type {!Array} */ (nicePageOrTemplete[ 0 ]);
};

/**
 * 
 * @param {!NicePageOrTemplete} nicePageOrTemplete 
 * @return {!NicePageOptions}
 */
NicePageBuilder.util.getNiceOptions = function( nicePageOrTemplete ){
    return /** @type {!NicePageOptions} */ (NicePageBuilder.util.getHTMLJson( nicePageOrTemplete )[ 0 ]);
};
