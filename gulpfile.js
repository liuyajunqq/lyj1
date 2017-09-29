var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var notify = require('gulp-notify');
// 检测文件实时刷新
gulp.task('webserver', function(){
    gulp.src('./')
        .pipe(webserver({
            port: 9090,
            lost: 'localhost',
            livereload: true,
            directoryListing: {
                path: './',
                enable: true
            },
            open: true,
            fallback: 'index.html'
        }));
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
    gulp.src('./css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./file/'));
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./file/'));
    gulp.src('./*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./file/'))
});
// sass
//gulp.task('sass', function(){
//    return gulp.src('./css/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('./css'));
//});
// 压缩css代码
//gulp.task('mini-css', function(){
//    gulp.src('./css/*.css')
//        .pipe(minifyCss())
//        .pipe(gulp.dest('./file/'))
//});
// 压缩js代码
//gulp.task('minijs', function(){
//    gulp.src('./js/*.js')
//        .pipe(uglify())
//        .pipe(gulp.dest('./file/'))
//});
// 压缩html代码
//gulp.task('minifyHtml', function(){
//    gulp.src('./*.html')
//        .pipe(minifyHtml())
//        .pipe(gulp.dest('./file/'))
//})
