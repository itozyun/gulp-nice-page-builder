goog.provide( 'NicePageBuilder.builder' );
goog.provide( '__NicePageBuilder_internal__.builder' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithOptions' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithOptions' );
goog.require( 'NicePageBuilder.INDEXES' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.mergeOptions' );
goog.require( 'NicePageBuilder.util.getSLotElement' );

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!HTMLJson | !HTMLJsonWithOptions} htmlJson
 * @param {!Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.NicePageOrTemplete> | null=} TEMPLETE_LIST 
 * @param {!Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.Mixin> | null=} MIXIN_LIST 
 * @return {!HTMLJson | !HTMLJsonWithOptions}
 */
__NicePageBuilder_internal__.builder = function( htmlJson, TEMPLETE_LIST, MIXIN_LIST ){
    if( !NicePageBuilder.util.isHTMLJsonWithOptions( htmlJson ) ){
        return htmlJson;
    };

    const pageOptions   = htmlJson[ 0 ];
    const templeteStack = []; // Array.<NicePageBuilder.RootRelativeURL>

    NicePageBuilder.util.mergeOptions( this, pageOptions, templeteStack, TEMPLETE_LIST || this.templetes, MIXIN_LIST || this.mixins );

    let contentHtmlJson = htmlJson;

    while( templeteStack.length ){
        const templetePath = templeteStack.shift();
        const templete = ( TEMPLETE_LIST || this.templetes )[ templetePath ];

        if( NicePageBuilder.DEFINE.DEBUG ){
            if( !templete ){
                throw 'Templete: ' + templetePath + ' required by ' + this.path.urlToFilePath( pageOptions.URL ) + ' not found!';
            };
        };
        contentHtmlJson = _insertContentToTemplete( NicePageBuilder.util.getHTMLJson( templete ), contentHtmlJson );
    };

    delete pageOptions.TEMPLETE;
    delete pageOptions.MIXINS;

    return contentHtmlJson;
};

/**
 * @private
 * @param {!HTMLJson} templeteJSONNode 
 * @param {!HTMLJson} contentJSONNode
 * @return {!HTMLJson}
 */
function _insertContentToTemplete( templeteJSONNode, contentJSONNode ){
    templeteJSONNode = /** @type {!HTMLJson} */ (JSON.parse( JSON.stringify( templeteJSONNode ) )); // deep copy

    let result = NicePageBuilder.util.getSLotElement( templeteJSONNode, true );

    if( result ){
        const parentJSONNode = /** @type {!HTMLJson} */ (result[ 1 ]);

        let myIndex = /** @type {number} */ (result[ 2 ]),
            options;

        if( !m_isArray( contentJSONNode[ 0 ] ) && m_isObject( contentJSONNode[ 0 ] ) ){
            options = contentJSONNode.shift();
        };

        let i = m_getChildNodeStartIndex( contentJSONNode ),
            l = contentJSONNode.length;

        parentJSONNode.splice( myIndex, 1 ); // remove <slot/>

        for( myIndex -= i; i < l; ++i ){
            parentJSONNode.splice( myIndex + i, 0, contentJSONNode[ i ] );
        };

        if( options ){
            templeteJSONNode.unshift( options );
        };
    };
    return templeteJSONNode;
};

/**
 * @this {NicePageBuilder.Context}
 */
__NicePageBuilder_internal__._builderGulpPlugin = function(){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.builder',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @type {!Object.<NicePageBuilder.RootRelativeURL, (!HTMLJsonWithOptions)>} */
    const PAGE_LIST = {};

    /** @type {Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.NicePageOrTemplete> | null} */
    let TEMPLETE_LIST = context.templetes;

    /** @type {Object.<NicePageBuilder.RootRelativeURL, !NicePageBuilder.Mixin> | null} */
    let MIXIN_LIST = context.mixins;

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
    
            const text = file.contents.toString( encoding );
            const json = /** @type {!HTMLJson} */ (JSON.parse( text ));

            switch( file.stem.split( '.' ).pop() ){
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    PAGE_LIST[ /** @type {!NicePageBuilder.NicePageOptions} */ (json[ 0 ]).URL ] = json;
                    return callback();
                case context.keywordTempletes :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        if( context.templetes && JSON.stringify( context.templetes ) !== JSON.stringify( json ) ){
                            console.log( pluginName + ' templete list changed!' );
                        };
                        /** @suppress {checkTypes} */
                        TEMPLETE_LIST = context.templetes = json;
                        // TODO for in json; context.templetes[rruel]=json[rrurl]
                    };
                    break;
                case context.keywordMixins :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        if( context.mixins && JSON.stringify( context.mixins ) !== JSON.stringify( json ) ){
                            console.log( pluginName + ' templete list changed!' );
                        };
                        /** @suppress {checkTypes} */
                        MIXIN_LIST = context.mixins = json;
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
        // 書出し
            for( const rootRelativeURL in PAGE_LIST ){
                const htmlJson = __NicePageBuilder_internal__.builder.call( context, /** @type {!HTMLJson} */ (PAGE_LIST[ rootRelativeURL ]), TEMPLETE_LIST, MIXIN_LIST );
                delete PAGE_LIST[ rootRelativeURL ];

                this.push(
                    new _Vinyl(
                        {
                            path     : context.path.urlToFilePath( rootRelativeURL ) + '.json',
                            contents : Buffer.from( JSON.stringify( htmlJson ) )
                        }
                    )
                );
            };

            callback();
        }
    );
};