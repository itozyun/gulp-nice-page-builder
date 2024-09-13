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
                        './.submodules/html.json/src/js/**/*.js',
                        './src/**/*.js'
                    ]
                ).pipe(
                    ClosureCompiler(
                        {
                            dependency_mode   : 'PRUNE',
                            entry_point       : 'goog:NicePageBuilder.gulp',
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
                    gulp.dest( 'dist' )
                );
        }
    )
);
