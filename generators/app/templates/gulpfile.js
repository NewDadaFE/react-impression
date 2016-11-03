var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-minify-css'),
    sequence = require('gulp-run-sequence'),
    autoprefixer = require('gulp-autoprefixer');


// 清空build
gulp.task('clean:build', function(){
    return gulp.src('build',  {read: false})
    .pipe(clean({force: true}));
});

// 复制图片
gulp.task('copy:image', function(){
    return gulp.src('src/images/*.*')
    .pipe(gulp.dest('build/images'));
});

// 复制HTML
gulp.task('copy:html', function(){
    return gulp.src('index.html')
    .pipe(gulp.dest('build'));
});

// 编译impress
gulp.task('sass', function(){
    return gulp.src('src/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 90 version', '> 90%']}))
    .pipe(gulp.dest('build/styles'));
});

// 压缩图片
gulp.task('min:image', function(){
    return gulp.src('build/images/*.png|*.jpg|*.gif')
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('build/images'));
});

// 压缩CSS
gulp.task('min:css', function(){
    return gulp.src('build/styles/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('build/styles'));
});

// 监听
gulp.task('watch', function(){
    gulp.watch('src/styles/**/*.scss', ['sass']);
});

// 清空
gulp.task('clean', ['clean:build']);
// 复制
gulp.task('copy', ['copy:html', 'copy:image']);
// 压缩
gulp.task('min', ['min:image', 'min:css']);

// 测试环境
gulp.task('default', function(cb) {
    sequence('clean', 'copy', 'sass', cb);
});

// 正式环境
gulp.task('prod', function(cb) {
    sequence('clean', 'copy', 'min', 'sass', cb);
});
