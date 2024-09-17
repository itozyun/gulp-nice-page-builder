goog.provide( 'NicePageBuilder.generator' );
goog.provide( '__NicePageBuilder_internal__.generator' );

goog.require( 'htmljson.base' );
goog.requireType( 'NicePageBuilder.NicePageOptions' );
goog.requireType( 'NicePageBuilder.NicePageOrTemplete' );
goog.requireType( 'NicePageBuilder.Mixin' );
goog.requireType( 'NicePageBuilder.SourceRootRelativePath' );
goog.requireType( 'NicePageBuilder.INDEXES' );
goog.requireType( 'NicePageBuilder.Context' );
goog.require( '__NicePageBuilder_internal__' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.require( 'NicePageBuilder.util.getSLotElement' );

/** @private */
NicePageBuilder.generator = true;

/**
 * @package
 * @this {NicePageBuilder.Context}
 * 
 * @param {!Array} htmlJson
 * @param {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.NicePageOrTemplete>} TEMPLETE_LIST 
 * @param {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.Mixin>} MIXIN_LIST 
 * @return {!Array}
 */
__NicePageBuilder_internal__.generator = function( htmlJson, TEMPLETE_LIST, MIXIN_LIST ){
    const pageOptions = !m_isArray( htmlJson[ 0 ] ) && m_isObject( htmlJson[ 0 ] ) ? htmlJson[ 0 ] : null;

    if( !pageOptions ){
        return htmlJson;
    };

    const templeteStack = [];

    let updatedAt = pageOptions.MODIFIED_AT;
    let templetePath = pageOptions.TEMPLETE;

    mergeMinxins( pageOptions.MIXINS );

    if( templetePath ){
        templeteStack[ 0 ] = templetePath;
    };

    while( templetePath ){
        const templete = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        templetePath = '';
        if( templeteOptions ){
            mix( templeteOptions, /** @type {number} */ (templete[ NicePageBuilder.INDEXES.UPDATED_AT ]) );
            mergeMinxins( templeteOptions.MIXINS );
            templeteStack.push( templetePath );
        };
    };

    /**
     * @param {!Array.<NicePageBuilder.SourceRootRelativePath> | void} mixinPathList
     */
    function mergeMinxins( mixinPathList ){
        if( mixinPathList ){
            for( let i = 0; i < mixinPathList.length; ++i ){
                const mixin = MIXIN_LIST[ mixinPathList[ i ] ];

                mix( /** @type {!NicePageBuilder.NicePageOptions} */ (mixin[ NicePageBuilder.INDEXES.MIXIN_OPTIONS ]), /** @type {number} */ (mixin[ NicePageBuilder.INDEXES.UPDATED_AT ]) );
            };
        };
    };

    /**
     * @param {!NicePageBuilder.NicePageOptions} altPageOptions 
     * @param {number} altUpdatedAt
     */
    function mix( altPageOptions, altUpdatedAt ){
        let changed = 0;

        for( const k in altPageOptions ){
            if( k === 'TEMPLETE' ){
                templetePath = templetePath || altPageOptions[ k ]; // page.html や templete.html にある TEMPLETE が優勢、mixin の中の TEMPLETE は劣勢
                if( templetePath === altPageOptions[ k ] ){
                    ++changed;
                };
            } else if( pageOptions[ k ] === undefined ){
                pageOptions[ k ] = altPageOptions[ k ];
                ++changed;
            };
        };
        if( changed ){
            if( updatedAt < altUpdatedAt ){
                updatedAt = altUpdatedAt;
            };
        };
    };

    let contentHtmlJson = htmlJson;

    while( templeteStack.length ){
        const templete = TEMPLETE_LIST[ templeteStack.shift() ];

        contentHtmlJson = _insertContentToTemplete( NicePageBuilder.util.getHTMLJson( templete ), contentHtmlJson );
    };

    delete pageOptions.TEMPLETE;
    delete pageOptions.MIXINS;
    pageOptions.UPDATED_AT = updatedAt;

    return contentHtmlJson;
};

/**
 * @private
 * @param {!Array} templeteJSONNode 
 * @param {!Array} contentJSONNode
 * @return {!Array}
 */
function _insertContentToTemplete( templeteJSONNode, contentJSONNode ){
    templeteJSONNode = /** @type {!Array} */ (JSON.parse( JSON.stringify( templeteJSONNode ) )); // deep copy

    let result = NicePageBuilder.util.getSLotElement( templeteJSONNode, true );

    if( result ){
        const parentJSONNode = /** @type {!Array} */ (result[ 1 ]);

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
 * 
 * @param {*} _options
 */
__NicePageBuilder_internal__._generatorGulpPlugin = function( _options ){
    const context = this;

    const pluginName  = 'NicePageBuilder.gulp.generator',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @type {!Object.<NicePageBuilder.SourceRootRelativePath, !Array>} */
    const PAGE_LIST = {};

    /** @type {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.NicePageOrTemplete>} */
    let TEMPLETE_LIST;

    /** @type {!Object.<NicePageBuilder.SourceRootRelativePath, !NicePageBuilder.Mixin>} */
    let MIXIN_LIST;

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
    
            const json = /** @type {!Array} */ (JSON.parse( file.contents.toString( encoding ) ));

            switch( file.stem.split( '.' ).pop() ){
                case 'html'  :
                case 'htm'   :
                case 'xhtml' :
                case 'php'   :
                    PAGE_LIST[ /** @type {!NicePageBuilder.NicePageOptions} */ (json[ 0 ]).FILE_PATH ] = json;
                    return callback();
                case context.keywordTempletes :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        /** @suppress {checkTypes} */
                        TEMPLETE_LIST = json;
                    };
                    break;
                case context.keywordMixins :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        /** @suppress {checkTypes} */
                        MIXIN_LIST = json;
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
                const htmlJson = __NicePageBuilder_internal__.generator.call( context, /** @type {!Array} */ (PAGE_LIST[ filePath ]), TEMPLETE_LIST, MIXIN_LIST );
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