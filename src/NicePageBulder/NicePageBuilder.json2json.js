goog.provide( 'NicePageBuilder.json2json' );
goog.provide( '__NicePageBuilder_internal__.json2json' );

goog.require( 'json2json' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.requireType( 'NicePageBuilder.Context' );

/** @private */
NicePageBuilder.json2json = true;

/**
 * @package
 * @this {NicePageBuilder.Context}
 *
 * @param {!Array} htmlJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(string)=} opt_onError
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
__NicePageBuilder_internal__.json2json = function( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const pageOptions = !m_isArray( htmlJson[ 0 ] ) && m_isObject( htmlJson[ 0 ] ) ? htmlJson[ 0 ] : null;

    if( pageOptions ){
        htmlJson.shift();
        // TODO options が 存在する場合、opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError の 各コールバックの this コンテキストに this.getOptions() に
        // bindNicePageBuilderContextToCallback( context, opt_onInstruction, opt_onEnterNode, opt_onError );
    };

    const isStaticWebPage = json2json( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );

    if( pageOptions ){
        htmlJson.unshift( pageOptions );
    };

    return isStaticWebPage;
};

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(string)=} opt_onError
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2jsonGulpPlugin = function( opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const context          = this,
          dynamicPagesPath = context.dynamicPagesPath;

    const pluginName  = 'NicePageBuilder.gulp.json2json',
          PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     );

    if( dynamicPagesPath ){
        var dynamicPageList = [];
    };

    return through.obj(
        /**
         * @this {stream.Writable}
         * @param {!Vinyl} file
         * @param {string} encoding
         * @param {function()} callback
         */
        function( file, encoding, callback ){
            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };

            if( file.extname !== '.json' ){
                this.push( file );
                return callback();
            };

            const originalExtname = file.stem.split( '.' ).pop();

            switch( originalExtname ){
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    const htmlJson = /** @type {!Array} */ (JSON.parse( file.contents.toString( encoding ) ));
                    const options  = /** @type {!NicePageBuilder.NicePageOptions} */ (htmlJson[ 0 ]);
                    const filePath = options.FILE_PATH;

                    const isStaticWebPage = __NicePageBuilder_internal__.json2json.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options )

                    if( dynamicPageList && !isStaticWebPage ){
                        dynamicPageList.push( filePath );
                    };

                    file.path     = filePath;
                    file.contents = Buffer.from( JSON.stringify( htmlJson ) );
                    file.extname  = '.' + originalExtname;
                    break;
            };
            this.push( file );
            callback();
        },
        dynamicPageList
            ? function( callback ){
                  const _Vinyl = require( 'vinyl' );
                  const file = new _Vinyl(
                            {
                                base     : '/',
                                path     : dynamicPagesPath,
                                contents : Buffer.from( JSON.stringify( dynamicPageList ) )
                            }
                        );
                  file.extname = '.json';
                  this.push( file );
                  callback();
              }
            : null
    );
};