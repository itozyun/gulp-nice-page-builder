goog.provide( 'NicePageBuilder.json2html' );
goog.provide( '__NicePageBuilder_internal__.json2html' );

goog.require( 'json2html.main' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.require( 'NicePageBuilder.bindNicePageContextToInstructuionHandler' );
goog.require( 'NicePageBuilder.bindNicePageContextToEnterNodeHandler' );
goog.require( 'NicePageBuilder.bindNicePageContextToDocumentReadyHandler' );
goog.require( 'NicePageBuilder.bindNicePageContextToErrorHandler' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithOptions' );
goog.require( 'NicePageBuilder.util.hasTEMPLETEProperty' );
goog.require( 'NicePageBuilder.util.hasMIXINSProperty' );

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!HTMLJson | !HTMLJsonWithOptions} htmlJson 破壊
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error)=)=} opt_onError
 * @param {!Object=} opt_options
 * @return {string} html string
 */
__NicePageBuilder_internal__.json2html = function( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    if( NicePageBuilder.util.isHTMLJsonWithOptions( htmlJson ) ){
        const context     = this;
        const pageOptions = htmlJson.shift();

        if( NicePageBuilder.DEFINE.DEBUG ){
            if( NicePageBuilder.util.hasTEMPLETEProperty( pageOptions ) || NicePageBuilder.util.hasMIXINSProperty( pageOptions ) ){
                throw pageOptions.FILE_PATH + ' is not complete document! Use nicePageBuilder.builder() before json2html().';
            };
        };

        opt_onInstruction = NicePageBuilder.bindNicePageContextToInstructuionHandler( context, pageOptions, opt_onInstruction, false );
        opt_onEnterNode   = NicePageBuilder.bindNicePageContextToEnterNodeHandler( context, pageOptions, opt_onEnterNode, false );
        opt_onError       = NicePageBuilder.bindNicePageContextToErrorHandler( context, pageOptions, opt_onError );
    };
    
    const htmlString = json2html.main( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options );

    return htmlString || '';
};

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error)=)=} opt_onError
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2htmlGulpPlugin = function( opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.json2html',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

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
                    const htmlJson = /** @type {!HTMLJson | !HTMLJsonWithOptions} */ (JSON.parse( file.contents.toString( encoding ) ));
                    const filePathElements = file.path.split( '.json' );

                    filePathElements.pop();

                    file.path     = filePathElements.join( '.json' );
                    file.contents = Buffer.from( __NicePageBuilder_internal__.json2html.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ) );
                    file.extname  = '.' + originalExtname;
                    break;
            };
            this.push( file );
            callback();
        },
        function( callback ){
            for( const filePath in context._jsonList ){
                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : filePath,
                            contents : Buffer.from( JSON.stringify( context._jsonList[ filePath ] ) )
                        }
                    )
                );
            };
            callback();
        }
    );
};