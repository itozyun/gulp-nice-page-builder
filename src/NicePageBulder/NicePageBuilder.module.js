goog.provide( 'NicePageBuilder.module' );

goog.require( 'NicePageBuilder.init' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = NicePageBuilder.init;

NicePageBuilder.init.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
NicePageBuilder.init.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
NicePageBuilder.init.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
NicePageBuilder.init.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
NicePageBuilder.init.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
NicePageBuilder.init.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
NicePageBuilder.init.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
NicePageBuilder.init.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
NicePageBuilder.init.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
NicePageBuilder.init.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
NicePageBuilder.init.ELEMENT_START_TAG             = htmljson.NODE_TYPE.ELEMENT_START_TAG;
NicePageBuilder.init.ELEMENT_END_TAG               = htmljson.NODE_TYPE.ELEMENT_END_TAG;
