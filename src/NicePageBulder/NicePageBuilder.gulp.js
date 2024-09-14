goog.provide( 'NicePageBuilder.gulp' );

goog.require( 'NicePageBuilder.module' );
goog.require( 'NicePageBuilder._createContext' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );

/**
 * @param {Object=} opt_options
 * @return {!NicePageBuilder.Context}
 */
NicePageBuilder.gulp = function( opt_options ){
    var context = NicePageBuilder._createContext( opt_options );

    if( __NicePageBuilder_internal__.html2json ){
        context.html2json = _html2jsonGulpPlugin;
    };
    if( __NicePageBuilder_internal__.generator ){
        context.generator = _generatorGulpPlugin;
    };
    if( __NicePageBuilder_internal__.json2json ){
        // context.json2json = _json2jsonGulpPlugin;
    };
    if( __NicePageBuilder_internal__.json2html ){
        context.json2html = _json2htmlGulpPlugin;
    };

    return context;
};
