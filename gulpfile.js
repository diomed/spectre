
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');


gulp.task('sass', function () { 
    gulp.src('./css/**/*.scss')
        .pipe(plumber({
          errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
         }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass'], function(){
    gulp.watch('./css/**.scss', ['sass'])    
});