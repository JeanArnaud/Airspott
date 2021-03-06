var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var exec = require('gulp-exec');

var paths = {
    sass: ['./client/scss/**/**/*.scss']
};

gulp.task('default', ['sass', 'apiservices:generate']);

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

gulp.task('apiservices:generate', function (cb) {
    gulp.src('.')
        .pipe(exec('lb-ng <%= file.path %>/server/server.js <%= file.path %>/client/common/js/api.js -m "com.airspott.api"'));
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});
