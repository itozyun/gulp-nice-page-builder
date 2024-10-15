goog.provide( 'NicePageBuilder.gulp' );

goog.require( 'NicePageBuilder.module' );
goog.require( 'NicePageBuilder.createContext' );
goog.require( '__NicePageBuilder_internal__' );
goog.requireType( 'NicePageBuilder.Context' );

/**
 * @param {Object=} opt_options
 * @return {!NicePageBuilder.Context}
 */
module.exports.gulp = function( opt_options ){
    var context = NicePageBuilder.createContext( opt_options );

    if( __NicePageBuilder_internal__.html2json ){
        context.html2json = __NicePageBuilder_internal__._html2jsonGulpPlugin;
    };
    if( __NicePageBuilder_internal__.builder ){
        context.builder = __NicePageBuilder_internal__._builderGulpPlugin;
    };
    if( __NicePageBuilder_internal__.json2json ){
        context.json2json = __NicePageBuilder_internal__._json2jsonGulpPlugin;
    };
    if( __NicePageBuilder_internal__.json2html ){
        context.json2html = __NicePageBuilder_internal__._json2htmlGulpPlugin;
    };
    if( __NicePageBuilder_internal__.json2htmlStream ){
        if( !context.json2html ){
            context.json2html = {};
        };
        context.json2html.stream = __NicePageBuilder_internal__.json2htmlStream.bind( context );
    };
    if( __NicePageBuilder_internal__._destGulpPlugin ){
        context.dest = __NicePageBuilder_internal__._destGulpPlugin;
    };
    return context;
};
