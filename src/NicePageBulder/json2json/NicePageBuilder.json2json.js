goog.provide( 'NicePageBuilder.json2json' );
goog.provide( '__NicePageBuilder_internal__.json2json' );

goog.require( 'json2json.main' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'VNode' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.requireType( 'InstructionHandler' );
goog.requireType( 'EnterNodeHandler' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.require( 'NicePageBuilder.PageContext.bindToInstructuionHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToEnterNodeHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToDocumentReadyHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToErrorHandler' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.util.hasTEMPLETEProperty' );
goog.require( 'NicePageBuilder.util.hasMIXINSProperty' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );

/**
 * @this {NicePageBuilder.Context}
 *
 * @param {!HTMLJson | !HTMLJsonWithMetadata} htmlJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
__NicePageBuilder_internal__.json2json = function( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const context = this;

    let metadata;

    if( NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
        metadata = context.getMergedMetadata( htmlJson.shift(), opt_onError );

        opt_onInstruction   = NicePageBuilder.PageContext.bindToInstructuionHandler( context, metadata, opt_onInstruction, false );
        opt_onEnterNode     = NicePageBuilder.PageContext.bindToEnterNodeHandler( context, metadata, opt_onEnterNode, false );
        opt_onDocumentReady = NicePageBuilder.PageContext.bindToDocumentReadyHandler( context, metadata, opt_onDocumentReady );
        opt_onError         = NicePageBuilder.PageContext.bindToErrorHandler( context, metadata, opt_onError );
    };

    const isStaticWebPage = json2json.main( /** @type {!HTMLJson} */ (htmlJson), opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );

    if( metadata ){
        htmlJson.unshift( context.unmergeMetadata( metadata ) ); // 更新済の metadata から mergedProperties を削除したものを htmljson に戻す
    };

    return isStaticWebPage;
};

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2jsonGulpPlugin = function( opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.json2json',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @const {!Array.<string | !HTMLJson | !HTMLJsonWithMetadata>} */
    const PAGE_FILE_LIST = [];

    return through.obj(
        /**
         * @this {stream.Writable}
         * @param {!Vinyl} file
         * @param {string} encoding
         * @param {function(Error=, Vinyl=)} callback
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

            const originalExtname = file.stem.split( '.' ).pop(); // _jsonFilePathToOriginalExtname

            switch( originalExtname ){
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    var json = JSON.parse( file.contents.toString( encoding ) );

                    if( m_isArray( json ) ){
                        PAGE_FILE_LIST.push( file.path, /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (json) );
                        return callback();
                    };
                case context.keywordTempletes :
                    var json = JSON.parse( file.contents.toString( encoding ) );

                    if( !m_isArray( json ) && m_isObject( json ) ){
                        for( const rootRelativeURL in json ){
                            context.templetes[ rootRelativeURL ] = /** @type {!NicePageBuilder.NicePageOrTemplete} */ (json[ rootRelativeURL ]);
                        };
                    };
                    break;
                case context.keywordMixins :
                    var json = JSON.parse( file.contents.toString( encoding ) );

                    if( !m_isArray( json ) && m_isObject( json ) ){
                        for( const rootRelativeURL in json ){
                            context.mixins[ rootRelativeURL ] = /** @type {!NicePageBuilder.Mixin} */ (json[ rootRelativeURL ]);
                        };
                    };
                    break;
            };
            callback( null, file );
        },
        /**
         * @this {stream.Writable}
         * @param {function()} callback
         */
        function( callback ){
            context.storeMetadataOfNewPages( PAGE_FILE_LIST );

            while( PAGE_FILE_LIST.length ){
                const filePath = PAGE_FILE_LIST.shift();
                const htmlJson = /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (PAGE_FILE_LIST.shift());

                __NicePageBuilder_internal__.json2json.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );

                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : filePath,
                            contents : Buffer.from( JSON.stringify( htmlJson ) )
                        }
                    )
                );
            };
            if( opt_options && opt_options[ 'processedTemplets' ] ){
                for( const rootRelativePath in context.templetes ){
                    const htmlJson = NicePageBuilder.util.getHTMLJson( context.templetes[ rootRelativePath ] );

                    __NicePageBuilder_internal__.json2json.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );
                };
            };
            callback();
        }
    );
};