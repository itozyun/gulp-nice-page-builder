goog.provide( 'NicePageBuilder.transform' );

goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.Context' );
goog.require( 'NicePageBuilder.NicePageOrTemplate' );
goog.require( 'NicePageBuilder.Mixin' );
goog.require( 'NicePageBuilder.RootRelativeURL' );
goog.require( 'NicePageBuilder.Metadata' );

/**
 * 
 * @param {NicePageBuilder.Context} context 
 * @param {string} pluginName 
 * @param {boolean} isHTML2JSON page.html is html.json or html
 * @param {!function(*):boolean} testHTMLJson
 * @param {function(string, string, number, number) | null} storePage
 * @param {!function(string, !HTMLJson)=} storePageJson
 * @return {function(this: stream.Writable, !Vinyl, string, function(Error=, Vinyl=))}
 */
NicePageBuilder.transform = function( context, pluginName, isHTML2JSON, testHTMLJson, storePage, storePageJson ){
    const PluginError = require( 'plugin-error' );

    return function( file, encoding, callback ){
        function isHTMLOrTemplate( extname ){
            return [ '.html', '.htm', '.xhtml', '.php' ].indexOf( extname ) !== -1;
        };

        if( file.isNull() ) return callback();

        if( file.isStream() ){
            this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
            return callback();
        };

        const filePath        = context.path.normalizeFilePath( file.path ),
              rootRelativeURL = context.path.filePathToURL(
                                    context.path.isAbsoluteFilePath( filePath )
                                        ? context.path.absoluteFilePathToSrcRootRelativeFilePath( filePath )
                                        : filePath
                                ),
              contents        = file.contents.toString( encoding ),
              createdTimeMs   = file.stat ? parseInt( file.stat.birthtimeMs, 10 ) : 0,
              updatedTimeMs   = file.stat ? parseInt( file.stat.ctimeMs    , 10 ) : 0;

        if( isHTML2JSON ){
            if( isHTMLOrTemplate( file.extname ) ){
                if( filePath.indexOf( context.srcRootPath ) !== 0 ){
                    this.emit( 'error', new PluginError( pluginName, '"' + filePath + '" is outside of srcRootPath:"' + context.srcRootPath + '"' ) );
                } else {
                    storePage( rootRelativeURL, contents, createdTimeMs, updatedTimeMs );
                };
                return callback();
            };
        };

        if( file.extname !== '.json' ){
            return callback( null, file );
        };

        const originalExtname = '.' + file.stem.split( '.' ).pop(); // _jsonFilePathToOriginalExtname
        const json            = JSON.parse( contents );

        if( !isHTML2JSON ){
            if( isHTMLOrTemplate( originalExtname ) ){
                if( testHTMLJson( json ) ){
                    storePageJson( rootRelativeURL, /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (json) );
                } else {
                    this.push( file );
                };
                return callback();
            };
        };

        // templates & mixins
        switch( file.stem ){
            case context.keywordTemplates :
                if( !m_isArray( json ) && m_isObject( json ) ){
                    for( const rootRelativeURL in json ){
                        if( !context.templates[ rootRelativeURL ] ){
                            context.templates[ rootRelativeURL ] = /** @type {!NicePageBuilder.NicePageOrTemplate} */ (json[ rootRelativeURL ]);
                        };
                    };
                } else if( NicePageBuilder.DEFINE.DEBUG ){
                    this.emit( 'error', new PluginError( pluginName, 'Invalid templates!' + filePath ) );
                    return callback();
                };
                break;
            case context.keywordMixins :
                if( !m_isArray( json ) && m_isObject( json ) ){
                    for( const rootRelativeURL in json ){
                        if( !context.mixins[ rootRelativeURL ] ){
                            context.mixins[ rootRelativeURL ] = /** @type {!NicePageBuilder.Mixin} */ (json[ rootRelativeURL ]);
                        };
                    };
                } else if( NicePageBuilder.DEFINE.DEBUG ){
                    this.emit( 'error', new PluginError( pluginName, 'Invalid mixins!' + filePath ) );
                    return callback();
                };
                break;
            case context.keywordAllPageMeta :
                if( !m_isArray( json ) && m_isObject( json ) ){
                    context.storeAllPageMetadata( /** @type {!Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.Metadata>} */ (json) );
                } else if( NicePageBuilder.DEFINE.DEBUG ){
                    this.emit( 'error', new PluginError( pluginName, 'Invalid allPageMetadata!' + filePath ) );
                    return callback();
                };
                break;
            default :
                if( isHTML2JSON ){
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        context.mixins[ rootRelativeURL ] = [ /** @type {!NicePageBuilder.Metadata} */ (json), createdTimeMs, updatedTimeMs ];
                    } else if( NicePageBuilder.DEFINE.DEBUG ){
                        this.emit( 'error', new PluginError( pluginName, 'Invalid mixin!' + filePath ) );
                    };
                    return callback();
                };
                break;
        };
        callback( null, file );
    };
};