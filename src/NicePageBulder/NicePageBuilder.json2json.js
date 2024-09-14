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
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
__NicePageBuilder_internal__.json2json = function( json, onInstruction, opt_onError, opt_options ){
    const options = json.shift();

    // TODO onInstruction の 各コールバックの this コンテキストを options に

    const isStaticWebPage = json2json( json, onInstruction, opt_onError, opt_options );

    json.unshift( options );

    return isStaticWebPage;
};

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 */
__NicePageBuilder_internal__._json2jsonGulpPlugin = function( onInstruction, opt_onError, opt_options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.json2json.gulp',
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
                    const options  = /** @type {!NicePageBuilder.NicePageOptions} */ (htmlJson[ 0 ]);

                    const isStaticWebPage = __NicePageBuilder_internal__.json2json.call( context, htmlJson, onInstruction, opt_onError, opt_options )

                    file.path     = options.FILE_PATH;
                    file.contents = Buffer.from( JSON.stringify( htmlJson ) );
                    file.extname  = '.' + originalExtname;
                    break;
            };
            this.push( file );
            callback();
        }
    );
};