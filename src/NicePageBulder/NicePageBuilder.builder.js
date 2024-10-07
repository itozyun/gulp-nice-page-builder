goog.provide( 'NicePageBuilder.builder' );
goog.provide( '__NicePageBuilder_internal__.builder' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.SourceRootRelativePath' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( 'NicePageBuilder.INDEXES' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.require( 'NicePageBuilder.util.mergeOptions' );
goog.require( 'NicePageBuilder.util.getSLotElement' );

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!HTMLJson | !HTMLJsonWithOptions} htmlJson
 * @param {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.NicePageOrTemplete> | null=} TEMPLETE_LIST 
 * @param {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.Mixin> | null=} MIXIN_LIST 
 * @return {!HTMLJson | !HTMLJsonWithOptions}
 */
__NicePageBuilder_internal__.builder = function( htmlJson, TEMPLETE_LIST, MIXIN_LIST ){
    if( !NicePageBuilder.util.isHTMLJsonWithOptions( htmlJson ) ){
        return htmlJson;
    };

    const pageOptions   = htmlJson[ 0 ];
    const templeteStack = [];

    NicePageBuilder.util.mergeOptions( pageOptions, templeteStack, TEMPLETE_LIST || this.templetes, MIXIN_LIST || this.mixins );

    let contentHtmlJson = htmlJson;

    while( templeteStack.length ){
        const templetePath = templeteStack.shift();
        const templete = ( TEMPLETE_LIST || this.templetes )[ templetePath ];

        if( NicePageBuilder.DEFINE.DEBUG ){
            if( !templete ){
                throw 'Templete: ' + templetePath + ' required by ' + pageOptions.FILE_PATH + ' not found!';
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
 * @package
 * @this {NicePageBuilder.Context}
 */
__NicePageBuilder_internal__._builderGulpPlugin = function(){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.builder',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @type {!Object.<NicePageBuilder.SourceRootRelativePath, (!HTMLJsonWithOptions)>} */
    const PAGE_LIST = {};

    /** @type {Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.NicePageOrTemplete> | null} */
    let TEMPLETE_LIST = context.templetes;

    /** @type {Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.Mixin> | null} */
    let MIXIN_LIST = context.mixins;

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
    
            const text = file.contents.toString( encoding );
            const json = /** @type {!HTMLJson} */ (JSON.parse( text ));

            switch( file.stem.split( '.' ).pop() ){
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    PAGE_LIST[ /** @type {!NicePageBuilder.NicePageOptions} */ (json[ 0 ]).FILE_PATH ] = json;
                    return callback();
                case context.keywordTempletes :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        if( context.templetes && JSON.stringify( context.templetes ) !== JSON.stringify( json ) ){
                            console.log( pluginName + ' templete list changed!' );
                        };
                        /** @suppress {checkTypes} */
                        TEMPLETE_LIST = context.templetes = json;
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
            this.push( file );
            callback();
        },
        /**
         * @this {stream.Writable}
         * @param {function()} callback
         */
        function( callback ){
        // 書出し
            for( const filePath in PAGE_LIST ){
                const htmlJson = __NicePageBuilder_internal__.builder.call( context, /** @type {!HTMLJson} */ (PAGE_LIST[ filePath ]), TEMPLETE_LIST, MIXIN_LIST );
                delete PAGE_LIST[ filePath ];

                this.push(
                    new _Vinyl(
                        {
                            base     : '/',
                            path     : filePath + '.json',
                            contents : Buffer.from( JSON.stringify( htmlJson ) )
                        }
                    )
                );
            };

            callback();
        }
    );
};