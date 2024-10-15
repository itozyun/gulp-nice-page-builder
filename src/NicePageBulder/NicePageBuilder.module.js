goog.provide( 'NicePageBuilder.module' );

goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'NicePageBuilder.Context' );
goog.require( '__NicePageBuilder_internal__' );

/**
 * @param {Object=} opt_options
 * @return {!NicePageBuilder.Context}
 */
module.exports = function( opt_options ){
    var context = new NicePageBuilder.Context( opt_options );

    if( __NicePageBuilder_internal__.html2json ){
        context.html2json = __NicePageBuilder_internal__.html2json;
    };
    if( __NicePageBuilder_internal__.builder ){
        context.builder = __NicePageBuilder_internal__.builder;
    };
    if( __NicePageBuilder_internal__.json2json ){
        context.json2json = __NicePageBuilder_internal__.json2json;
    };
    if( __NicePageBuilder_internal__.json2html ){
        context.json2html = __NicePageBuilder_internal__.json2html;
    };
    if( __NicePageBuilder_internal__.json2htmlStream ){
        if( !context.json2html ){
            context.json2html = {};
        };
        context.json2html.stream = __NicePageBuilder_internal__.json2htmlStream.bind( context );
    };
    return context;
};

module.exports.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
module.exports.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
module.exports.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
module.exports.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
module.exports.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
module.exports.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
module.exports.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
module.exports.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
module.exports.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
module.exports.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
module.exports.ELEMENT_START_TAG             = htmljson.NODE_TYPE.ELEMENT_START_TAG;
module.exports.ELEMENT_END_TAG               = htmljson.NODE_TYPE.ELEMENT_END_TAG;
