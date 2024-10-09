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
                        './.submodules/html.json/src/closure-primitives/base.js',
                        './.submodules/html.json/.submodules/htmlparser/src/js/**/*.js',
                        './.submodules/tiny-path/src/js/**/*.js', 
                        './.submodules/html.json/src/js/**/*.js',
                        './src/**/*.js'
                    ]
                ).pipe(
                    ClosureCompiler(
                        {
                            dependency_mode   : 'PRUNE',
                            entry_point       : 'goog:NicePageBuilder.all',
                            externs           : [
                               // './src/js-externs/console.js',
                               // './node_modules/@externs/nodejs/v8/nodejs.js',
                               // './node_modules/@externs/nodejs/v8/global.js',
                               // './node_modules/@externs/nodejs/v8/fs.js',
                               // './node_modules/@externs/nodejs/v8/http.js',
                               // './node_modules/@externs/nodejs/v8/https.js',
                               // './node_modules/@externs/nodejs/v8/net.js',
                               // './node_modules/@externs/nodejs/v8/events.js',
                                './node_modules/@externs/nodejs/v8/global/buffer.js',
                                './node_modules/@externs/nodejs/v8/stream.js',
                               // './node_modules/@externs/nodejs/v8/zlib.js',
                                './node_modules/@externs/nodejs/v8/path.js',
                                './.submodules/html.json/src/js-externs/externs.js'
                                // './.submodules/html.json/src/js-externs/tags-and-attributes.js'
                            ],
                            define            : [
                                'htmlparser.DEFINE.useXML=' + true,
                                'htmlparser.DEFINE.useVML=' + true,
                                'htmlparser.DEFINE.useDocTypeNode=' + true,
                                'htmlparser.DEFINE.useProcessingInstruction=' + true,
                                'htmlparser.DEFINE.useLazy=' + false,
                                'htmlparser.DEFINE.parsingStop=' + false,
                                'htmlparser.DEFINE.useCDATASection=' + true,
                                'htmlparser.DEFINE.attributePrefixSymbol=":"',

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
    'test',
    gulp.series(
        function(){
            let NicePageBuilder = require( './index.js' ).gulp( { srcRootPath : 'test/input', allPagesPath : 'all-pages.json', allPageOptionsPath : 'all-options.json' } );

            return gulp.src(
                    [
                        './test/input/**/*.html', './test/input/**/*.php', './test/input/**/*.json' // .xhtml, .htm
                    ]
                ).pipe(
                    NicePageBuilder.html2json( null, { trimWhitespaces: 'aggressive' } )
                ).pipe(
                    NicePageBuilder.json2json( null, null, function(){} )
                ).pipe(
                    NicePageBuilder.builder()
                ).pipe(
                    NicePageBuilder.json2html()
                ).pipe(
                    gulp.dest( 'test/output' )
                );
        }
    )
);