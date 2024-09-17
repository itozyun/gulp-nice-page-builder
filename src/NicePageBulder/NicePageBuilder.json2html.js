goog.provide( 'NicePageBuilder.json2html' );
goog.provide( '__NicePageBuilder_internal__.json2html' );

goog.require( 'json2html' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.requireType( 'NicePageBuilder.Context' );

/** @private */
NicePageBuilder.json2html = true;

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!Array} htmlJson 破壊
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {string} html string
 */
__NicePageBuilder_internal__.json2html = function( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    const context = this;

    const pageOptions = !m_isArray( htmlJson[ 0 ] ) && m_isObject( htmlJson[ 0 ] ) ? htmlJson[ 0 ] : null;

    if( pageOptions ){
        htmlJson.shift();
        // TODO options が 存在する場合、opt_onInstruction, opt_onEnterNode, opt_onError の 各コールバックの this コンテキストに this.getOptions() 等を追加
        // bindNicePageBuilderContextToCallback( context, pageOptions, opt_onInstruction, opt_onEnterNode, opt_onError );
    };
    
    const htmlString = json2html( htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options );

    return htmlString || '';
};

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2htmlGulpPlugin = function( opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.json2html',
          PluginError = require( 'plugin-error' ),
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
                    const htmlJson = /** @type {!Array} */ (JSON.parse( file.contents.toString( encoding ) ));
                    const filePathElements = file.path.split( '.json' );

                    filePathElements.pop();

                    file.path     = filePathElements.join( '.json' );
                    file.contents = Buffer.from( __NicePageBuilder_internal__.json2html.call( context, htmlJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ) );
                    file.extname  = '.' + originalExtname;
                    break;
            };
            this.push( file );
            callback();
        }
    );
};