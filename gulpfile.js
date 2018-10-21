let gulp = require('gulp');
let less = require('gulp-less');

gulp.task('css', () => {
    return gulp.src('src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch-less', () => gulp.watch(
    ['src/css/*.less'],
    ['css']
));