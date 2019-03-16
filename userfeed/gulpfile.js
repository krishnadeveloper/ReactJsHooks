var gulp = require('gulp'),
    sass = require('gulp-sass'),
    contact = require('gulp-concat'),
    uglify = require('gulp-uglify');


// Eaxmple
gulp.task('homepage',function(){
    return gulp.src('src/sass/home/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/assets/css/home/'))
});

// Watch Task example
gulp.task('watch', function() {
    gulp.watch('src/sass/home/*.scss', gulp.series('homepage'));
});


// Execute all tasks, which are passed under glup.parallel
//gulp.task('default', gulp.parallel('homepage','comman','login','watch'));
