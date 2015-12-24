var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./client/scss/**/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
  gulp.src('./client/scss/airspott.club.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./client/club/css/'));

  gulp.src('./client/scss/airspott.shop.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./client/shop/css/'))
    .on('end', done);
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});
