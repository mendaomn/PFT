// Load plugins
var gulp = require( "gulp" ),
  //  jshint = require( "gulp-jshint" ),
    uglify = require( "gulp-uglify" ),
    rename = require( "gulp-rename" ),
    concat = require( "gulp-concat" ),
    watch = require( "gulp-watch" );

// Scripts
gulp.task( "scripts", function() {
    return gulp.src([ "_components/**/*.js", "_script/**/*.js" ])
        .pipe( concat( "main.js" ) )
        .pipe( rename({
            suffix: ".min"
        }) )
        .pipe( uglify() )
        .pipe( gulp.dest( "assets/js" ) );
});

// Watch
gulp.task( "watch", function() {
    gulp.watch( "./**/*.js", [ "scripts" ]);
});

// Default task
gulp.task( "default", [ "watch" ], function( cb ) {
});
