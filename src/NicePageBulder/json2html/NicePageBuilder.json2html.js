goog.provide( 'NicePageBuilder.json2html' );
goog.provide( '__NicePageBuilder_internal__.json2html' );

goog.require( 'json2html.main' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.requireType( 'InstructionHandler' );
goog.requireType( 'EnterNodeHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToInstructuionHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToEnterNodeHandler' );
goog.require( 'NicePageBuilder.PageContext.bindToErrorHandler' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.util.hasTEMPLETEProperty' );
goog.require( 'NicePageBuilder.util.hasMIXINSProperty' );

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata} htmlJson 破壊
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {string} html string
 */
__NicePageBuilder_internal__.json2html = function( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    if( NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
        const context     = this;
        const metadata = htmlJson.shift();

        if( NicePageBuilder.DEFINE.DEBUG ){
            if( NicePageBuilder.util.hasTEMPLETEProperty( metadata ) || NicePageBuilder.util.hasMIXINSProperty( metadata ) ){
                throw this.path.urlToFilePath( metadata.URL ) + ' is not complete document! Use nicePageBuilder.builder() before json2html().';
            };
        };

        opt_onInstruction = NicePageBuilder.PageContext.bindToInstructuionHandler( context, metadata, opt_onInstruction, false );
        opt_onEnterNode   = NicePageBuilder.PageContext.bindToEnterNodeHandler( context, metadata, opt_onEnterNode, false );
        opt_onError       = NicePageBuilder.PageContext.bindToErrorHandler( context, metadata, opt_onError );
    };
    
    const htmlString = json2html.main( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options );

    return htmlString || '';
};

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2htmlGulpPlugin = function( opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.json2html',
          PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     );

    const CONTENT_FILE_LIST = [];

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
                return callback( null, file );
            };

            const originalExtname = file.stem.split( '.' ).pop();

            switch( originalExtname ){
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    CONTENT_FILE_LIST.push( file, encoding, originalExtname );
                    return callback();
            };
            callback( null, file );
        },
        /**
         * @this {stream.Writable}
         * @param {function()} callback
         */
        function( callback ){
            while( CONTENT_FILE_LIST.length ){
                const file = CONTENT_FILE_LIST.shift();
                const encoding = CONTENT_FILE_LIST.shift();
                const originalExtname = CONTENT_FILE_LIST.shift();

                const htmlJson = /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (JSON.parse( file.contents.toString( encoding ) ));
                const filePathElements = file.path.split( '.json' );

                filePathElements.pop();

                file.path     = filePathElements.join( '.json' );
                file.contents = Buffer.from( __NicePageBuilder_internal__.json2html.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ) );
                file.extname  = '.' + originalExtname;

                this.push( file );
            };
            callback();
        }
    );
};