var gulp = require("gulp");
var amdOptimize = require("amd-optimize");  // requrie优化
var concat = require('gulp-concat');
var runSequence = require('run-sequence'); //顺序执行
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');

gulp.task("js", function () {
    return gulp.src("**/*.js")
        .pipe(amdOptimize("main", {
            baseUrl: './module',
            configFile: './module/main.js',
            findNestedDependencies: true,
            include: false
        }))
        .pipe(concat("index.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("lib", function () {
    return gulp.src("lib/require.js")
        .pipe(gulp.dest("dist/lib"));
});

gulp.task("html", function () {
    // gulp-html-replace 插件使用方式详述：https://blog.csdn.net/WU5229485/article/details/90716372
    // 说明：构建的名字需要在html中定义  如：<!-- build:js --> <!-- endbuild -->
    return gulp.src("index.html")
        .pipe(htmlreplace({
            js: {
                src: [['index.js', './lib/require.js']],
                tpl: '<script data-main="%s" src="%s"></script>'
            }
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('clean', function () {
    return gulp.src([
        'dist',
    ], { read: false })
        .pipe(clean());
});

gulp.task('build', [], function (cb) {
    runSequence('clean', 'js', 'lib', 'html', cb);
});