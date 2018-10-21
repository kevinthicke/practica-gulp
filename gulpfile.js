let gulp = require('gulp');
let less = require('gulp-less');
let cleancss = require('gulp-clean-css');
let rename = require('gulp-rename');

gulp.task('css', () => {
    return gulp.src('src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch-less', () => gulp.watch(
    ['src/css/*.less'],
    ['css']
));