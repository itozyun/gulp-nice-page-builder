goog.provide( 'NicePageBuilder.builder' );
goog.provide( '__NicePageBuilder_internal__.builder' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.Metadata' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.RootRelativeURL' );
goog.requireType( 'NicePageBuilder.Context' );
goog.requireType( 'HTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.util.isHTMLJsonWithMetadata' );
goog.require( 'NicePageBuilder.INDEXES' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.DEFINE.DEBUG' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getSLotElement' );

/**
 * @this {NicePageBuilder.Context}
 * 
 * @param {!HTMLJson | !HTMLJsonWithMetadata} htmlJson
 * @return {!HTMLJson | !HTMLJsonWithMetadata}
 */
__NicePageBuilder_internal__.builder = function( htmlJson ){
    if( !NicePageBuilder.util.isHTMLJsonWithMetadata( htmlJson ) ){
        return htmlJson;
    };

    const metadata      = htmlJson[ 0 ];
    const templeteStack = []; // Array.<NicePageBuilder.RootRelativeURL>

    this.storeMetadata( metadata );
    this.mergeMetadata( metadata, templeteStack );

    let contentHtmlJson = htmlJson;

    while( templeteStack.length ){
        const templetePath = templeteStack.shift();
        const templete = this.templetes[ templetePath ];

        if( NicePageBuilder.DEFINE.DEBUG ){
            if( !templete ){
                throw 'Templete: ' + templetePath + ' required by ' + this.path.urlToFilePath( metadata.URL ) + ' not found!';
            };
        };
        contentHtmlJson = _insertContentToTemplete( NicePageBuilder.util.getHTMLJson( templete ), contentHtmlJson );
    };

    this.unmergeMetadata( metadata );

    delete metadata.TEMPLETE;
    delete metadata.MIXINS;

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
            metadata;

        if( !m_isArray( contentJSONNode[ 0 ] ) && m_isObject( contentJSONNode[ 0 ] ) ){
            metadata = contentJSONNode.shift();
        };

        let i = m_getChildNodeStartIndex( contentJSONNode ),
            l = contentJSONNode.length;

        parentJSONNode.splice( myIndex, 1 ); // remove <slot/>

        for( myIndex -= i; i < l; ++i ){
            parentJSONNode.splice( myIndex + i, 0, contentJSONNode[ i ] );
        };

        if( metadata ){
            templeteJSONNode.unshift( metadata );
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

    /** @const {!Array.<!Vinyl | !HTMLJson | !HTMLJsonWithMetadata>} */
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
                return callback( null, file );
            };
    
            const text = file.contents.toString( encoding );
            const json = JSON.parse( text );

            switch( file.stem.split( '.' ).pop() ){ // _jsonFilePathToOriginalExtname
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    if( NicePageBuilder.util.isHTMLJsonWithMetadata( /** @type {!HTMLJson} */ (json) ) ){
                        PAGE_FILE_LIST.push( file, /** @type {!HTMLJsonWithMetadata} */ (json) );
                        return callback();
                    };
                case context.keywordTempletes :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        for( var rootRelativeURL in json ){
                            context.templetes[ rootRelativeURL ] = /** @type {!NicePageBuilder.NicePageOrTemplete} */ (json[ rootRelativeURL ]);
                        };
                    };
                    break;
                case context.keywordMixins :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        for( var rootRelativeURL in json ){
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

        // 書出し
            while( PAGE_FILE_LIST.length ){
                const file     = PAGE_FILE_LIST.shift();
                const htmlJson = __NicePageBuilder_internal__.builder.call( context, /** @type {!HTMLJson | !HTMLJsonWithMetadata} */ (PAGE_FILE_LIST.shift()) );

                file.contents = Buffer.from( JSON.stringify( htmlJson ) );

                this.push( file );
            };

            callback();
        }
    );
};