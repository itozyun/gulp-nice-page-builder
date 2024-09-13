goog.provide( 'NicePageBuilder.module' );

goog.require( 'NicePageBuilder' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = NicePageBuilder;

NicePageBuilder.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
NicePageBuilder.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
NicePageBuilder.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
NicePageBuilder.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
NicePageBuilder.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
NicePageBuilder.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
NicePageBuilder.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
NicePageBuilder.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
NicePageBuilder.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
NicePageBuilder.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
NicePageBuilder.ELEMENT_START_TAG             = htmljson.NODE_TYPE.ELEMENT_START_TAG;
NicePageBuilder.ELEMENT_END_TAG               = htmljson.NODE_TYPE.ELEMENT_END_TAG;
