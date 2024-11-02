const gulp = require( 'gulp' );

let ClosureCompiler;

let isDebug = true;
let isPrettify = true;

gulp.task(
    'dist',
    gulp.series(
        function(){
            ClosureCompiler = ClosureCompiler || require( 'google-closure-compiler' ).gulp();

            return gulp.src(
                    [
                        './node_modules/@externs/nodejs/**/*.js',
                        './.submodules/html.json/.submodules/htmlparser/src/closure-primitives/base.js',
                        './.submodules/html.json/.submodules/htmlparser/src/js/**/*.js',
                        './.submodules/tiny-path/src/js/**/*.js', 
                        './.submodules/html.json/src/**/*.js',
                        './src/**/*.js'
                    ]
                ).pipe(
                    ClosureCompiler(
                        {
                            dependency_mode   : 'PRUNE',
                            entry_point       : 'goog:NicePageBuilder.all',
                            define            : [
                                'htmlparser.DEFINE.USE_XML=' + true,
                                'htmlparser.DEFINE.USE_VML=' + true,
                                'htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE=' + true,
                                'htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION=' + true,
                                'htmlparser.DEFINE.TIME_SLICE_EXECUTION=' + false,
                                'htmlparser.DEFINE.STOP_PARSING=' + false,
                                'htmlparser.DEFINE.USE_CDATA_SECTION=' + true,

                                'TinyPath.DEFINE.DEBUG=' + isDebug,
                                'htmljson.DEFINE.DEBUG=' + isDebug,
                                'NicePageBuilder.DEFINE.DEBUG=' + isDebug
                            ],
                            // env               : 'CUSTOM',
                            compilation_level : false      ? 'SIMPLE_OPTIMIZATIONS' : 'ADVANCED', /* 'WHITESPACE_ONLY' */
                            formatting        : isPrettify ? 'PRETTY_PRINT'         : 'SINGLE_QUOTES',
                            warning_level     : 'VERBOSE',
                            // language_in       : 'ECMASCRIPT3',
                            // language_out      : 'ECMASCRIPT3',
                            js_output_file    : 'index.js'
                        }
                    )
                ).pipe(
                    gulp.dest( './' )
                );
        }
    )
);

gulp.task(
    'tutorial',
    gulp.series(
        function(){
            let NicePageBuilder = require( './index.js' ).gulp( { srcRootPath : 'tutorial/input', allPagesPath : 'all-pages.json' } );

            return gulp.src(
                    [
                        './tutorial/input/**/*.html', './tutorial/input/**/*.php', './tutorial/input/**/*.json' // .xhtml, .htm
                    ]
                ).pipe(
                    NicePageBuilder.html2json( null, { trimWhitespaces: 'aggressive' } )
                ).pipe(
                    NicePageBuilder.json2json( null, null, function(){console.log( this )} )
                ).pipe(
                    NicePageBuilder.dest( 1 + 2 + 4 + 8 + 16 )
                ).pipe(
                    NicePageBuilder.builder()
                ).pipe(
                    NicePageBuilder.json2html()
                ).pipe(
                    gulp.dest( 'tutorial/output' )
                );
        }
    )
);