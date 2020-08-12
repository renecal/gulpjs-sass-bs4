const gulp = require('gulp');
const sass = require('gulp-sass');

function style(){
    return gulp.src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
}

function watch(){
    gulp.watch('assets/scss/**/*.scss', style)
}

function jquery(){
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('assets/vendor/jquery'))
}

function popperjs(){
    return gulp.src('node_modules/popper.js/dist/popper.min.js')
    .pipe(gulp.dest('assets/vendor/popper'))
}

function bootstrapjs(){
    return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('assets/vendor/bootstrap'))
}

exports.jquery = jquery
exports.popperjs = popperjs
exports.bootstrapjs =  bootstrapjs
exports.style = style
exports.default  = watch

