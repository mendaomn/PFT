// Load plugins
var gulp = require( "gulp" ),
  //  jshint = require( "gulp-jshint" ),
  uglify = require( "gulp-uglify" ),
  rename = require( "gulp-rename" ),
  concat = require( "gulp-concat" ),
  imagemin = require( "gulp-imagemin" ),
  imageResize = require( "gulp-image-resize" ),
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

gulp.task( "images", function() {
  return gulp.src( "assets/img/**/*" )
    .pipe( imagemin({
      progressive: true
    }) )
    .pipe( imageResize({
      width: 1024,
      // height: 100,
      // crop: true,
      upscale: false
    }) )
    .pipe( gulp.dest( "assets/img/" ) );
});

// Watch
gulp.task( "watch", function() {
  gulp.watch( "./**/*.js", [ "scripts" ]);
});

// Default task
gulp.task( "default", [ "watch" ], function( cb ) {});
