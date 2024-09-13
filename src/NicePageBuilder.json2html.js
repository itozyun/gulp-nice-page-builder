goog.provide( 'NicePageBuilder.json2html' );
goog.provide( 'NicePageBuilder.json2html.gulp' );

goog.require( 'json2html' );
goog.require( 'NicePageBuilder.module' );
goog.requireType( 'NicePageOptions' );

/**
 * @param {!Array} json
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {string | void} html string
 */
NicePageBuilder.json2html = function( json, onInstruction, opt_onError, opt_options ){
    const options = json.shift();

    // TODO onInstruction の 各コールバックの this コンテキストを options に

    return json2html( json, onInstruction, opt_onError, opt_options );
};

NicePageBuilder.json2html.gulp = function( onInstruction, opt_onError, opt_options ){
    const pluginName  = 'NicePageBuilder.json2html.gulp',
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

            switch( file.stem.split( '/' ).pop() ){
                case '.html'  :
                case '.htm'   :
                case '.xhtml' :
                case '.php'   :
                    const htmlJson = /** @type {!Array} */ (JSON.parse( file.contents.toString( encoding ) ));

                    this.push(
                        new _Vinyl(
                            {
                                base     : '/',
                                path     : /** @type {!NicePageOptions} */ (htmlJson[ 0 ]).FILE_PATH,
                                contents : NicePageBuilder.json2html( htmlJson, onInstruction, opt_onError, opt_options )
                            }
                        )
                    );
                    break;
                default :
                    this.push( file );
                    break;
            };
            callback();
        }
    );
};