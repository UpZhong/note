var gulp = require('gulp');
var rm = require('gulp-rm');
var uglify = require('gulp-uglify');
const runSequence = require('gulp4-run-sequence');

gulp.task("copy-file", function () {
    return gulp.src('app/**/*', { base: '.' })
        .pipe(gulp.dest('cache'));
})

gulp.task('minify-js', function () {
    return gulp.src('app/**/*.js',{base:'.'})
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('del-dir1', function () {
    return gulp.src(['app/dir1', 'app/dir1/**/*'], { read: false })
        .pipe(rm())
})

gulp.task('clean',function(){
    return gulp.src(['dist','dist/**/*','cache','cache/**/*'], { read: false })
        .pipe(rm()) 
})

