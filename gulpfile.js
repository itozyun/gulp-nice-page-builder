const gulp            = require( 'gulp' ),
      nicePageBuilder = require( './index.js' );

gulp.task( 'tutorial_1', function(){
    return gulp.src( [ './tutorial/1/source/**/*.html', '!./tutorial/1/source/templete.html' ]
                ).pipe(
                    nicePageBuilder( {
                        rootPath : './tutorial/1/source'
                    } )
                ).pipe( gulp.dest( './tutorial/1/output' ) );
    }
);

gulp.task( 'tutorial_2', function(){
    return gulp.src( [ './tutorial/2/source/**/*.html', '!templete.html' ]
                ).pipe(
                    nicePageBuilder( {
                        rootPath : './tutorial/2/source'
                    } )
                ).pipe( gulp.dest( './tutorial/2/output' ) );
    }
);

gulp.task( 'tutorial_3', function(){
    return gulp.src( [ './tutorial/3/source/**/*.html', '!templete.html' ]
                ).pipe(
                    nicePageBuilder( {
                        rootPath : './tutorial/3/source'
                    } )
                ).pipe( gulp.dest( './tutorial/3/output' ) );
    }
);

gulp.task( 'tutorial_4', function(){
    return gulp.src( [ './tutorial/4/source/**/*.html', '!templete.html' ]
                ).pipe(
                    nicePageBuilder( {
                        rootPath : './tutorial/4/source'
                    } )
                ).pipe( gulp.dest( './tutorial/4/output' ) );
    }
);

gulp.task( 'tutorial_5', function(){
    return gulp.src( [ './tutorial/5/source/**/*.html', '!templete.html' ]
                ).pipe(
                    nicePageBuilder( {
                        rootPath : './tutorial/5/source'
                    } )
                ).pipe( gulp.dest( './tutorial/5/output' ) );
    }
);

gulp.task( 'tutorial_6', function(){
    return gulp.src( [ './tutorial/6/source/**/*.html', '!templete.html' ]
                ).pipe(
                    nicePageBuilder( {
                        rootPath : './tutorial/6/source',
                        json : {
                            favorites : './tutorial/json/favorites.json'
                        }
                    } )
                ).pipe( gulp.dest( './tutorial/6/output' ) );
    }
);