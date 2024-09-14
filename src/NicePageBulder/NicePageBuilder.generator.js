goog.provide( 'NicePageBuilder.generator' );
goog.provide( 'NicePageBuilder.generator.gulp' );

goog.requireType( 'NicePageOptions' );
goog.requireType( 'NicePageOrTemplete' );
goog.requireType( 'Mixin' );
goog.requireType( 'sourceRootRelativePath' );
goog.requireType( 'STAT_INDEXES' );
goog.require( 'NicePageBuilder.module' );
goog.require( 'htmljson.base' );
goog.require( 'NicePageBuilder.util.getHTMLJson' );
goog.require( 'NicePageBuilder.util.getNiceOptions' );
goog.require( 'getSLotElement' );

/**
 * @param {!Array} htmlJson
 * @param {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} TEMPLETE_LIST 
 * @param {!Object.<sourceRootRelativePath, !Mixin>} MIXIN_LIST 
 * @return {!Array}
 */
NicePageBuilder.generator = function( htmlJson, TEMPLETE_LIST, MIXIN_LIST ){
    const pageOptions = !m_isArray( htmlJson[ 0 ] ) && m_isObject( htmlJson[ 0 ] ) ? htmlJson[ 0 ] : null;

    if( !pageOptions ){
        return htmlJson;
    };

    let updatedAt = pageOptions.MODIFIED_AT;
    let templetePath = pageOptions.TEMPLETE;

    mergeMinxins( pageOptions.MIXINS );

    while( templetePath ){
        const templete = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        templetePath = '';
        if( templeteOptions ){
            mix( templeteOptions, /** @type {number} */ (templete[ STAT_INDEXES.UPDATED_AT ]) );
            mergeMinxins( templeteOptions.MIXINS );
        };
    };

    /**
     * @param {!Array.<sourceRootRelativePath> | void} mixinPathList
     */
    function mergeMinxins( mixinPathList ){
        if( mixinPathList ){
            for( let i = 0; i < mixinPathList.length; ++i ){
                const mixin = MIXIN_LIST[ mixinPathList[ i ] ];

                mix( /** @type {!NicePageOptions} */ (mixin[ STAT_INDEXES.MIXIN_OPTIONS ]), /** @type {number} */ (mixin[ STAT_INDEXES.UPDATED_AT ]) );
            };
        };
    };

    /**
     * @param {!NicePageOptions} altPageOptions 
     * @param {number} altUpdatedAt
     */
    function mix( altPageOptions, altUpdatedAt ){
        let changed = 0;

        for( const k in altPageOptions ){
            if( k === 'TEMPLETE' ){
                templetePath = templetePath || altPageOptions[ k ]; // page.html や templete.html にある TEMPLETE が顕性、mixin の中の TEMPLETE は潜性
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
    templetePath = pageOptions.TEMPLETE;

    while( templetePath ){
        const templete  = TEMPLETE_LIST[ templetePath ];
        const templeteOptions = NicePageBuilder.util.getNiceOptions( templete );

        contentHtmlJson = _insertContentToTemplete( NicePageBuilder.util.getHTMLJson( templete ), contentHtmlJson );
        if( templeteOptions ){
            templetePath = templeteOptions.TEMPLETE;
        } else {
            templetePath = '';
        };
    };

    delete pageOptions.TEMPLETE;
    delete pageOptions.MIXINS;
    pageOptions.UPDATED_AT  = updatedAt;

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

    let result = getSLotElement( templeteJSONNode );

    if( result ){
        const parentJSONNode = /** @type {!Array} */ (result[ 1 ]);

        let myIndex = /** @type {number} */ (result[ 2 ]),
            options;

        if( m_isAttributes( contentJSONNode[ 0 ] ) ){
            options = contentJSONNode.shift();
        };

        let i = m_getChildNodeStartIndex( contentJSONNode ),
            l = contentJSONNode.length;

        parentJSONNode.splice( myIndex, 1 ); // remove <slot/>

        for( myIndex -= i; i < l; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            parentJSONNode.splice( myIndex + i, 0, contentJSONNode[ i ] );
        };

        if( options ){
            templeteJSONNode.unshift( options );
        };
    };
    return templeteJSONNode;
};

NicePageBuilder.generator.gulp = function( _options ){
    const pluginName  = 'NicePageBuilder.generator.gulp',
          PluginError = require( 'plugin-error' ),
          _Vinyl      = require( 'vinyl'        ),
          through     = require( 'through2'     );

    /** @type {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} */
    const PAGE_LIST = {};

    /** @type {!Object.<sourceRootRelativePath, !NicePageOrTemplete>} */
    let TEMPLETE_LIST;

    /** @type {!Object.<sourceRootRelativePath, !Mixin>} */
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
                    PAGE_LIST[ /** @type {!NicePageOptions} */ (json[ 0 ]).FILE_PATH ] = json;
                    return callback();
                case 'templetes' :
                    if( !m_isArray( json ) && m_isObject( json ) ){
                        /** @suppress {checkTypes} */
                        TEMPLETE_LIST = json;
                    };
                    break;
                case 'mixins' :
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
                const htmlJson = NicePageBuilder.generator( /** @type {!Array} */ (PAGE_LIST[ filePath ]), TEMPLETE_LIST, MIXIN_LIST );
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