var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-minify-css'),
    sequence = require('gulp-run-sequence'),
    autoprefixer = require('gulp-autoprefixer'),
    editor = require('gulp-json-editor'),
    shell = require('gulp-shell');


// 清空
gulp.task('clean:build', function() {
    return gulp.src('build', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('clean:package', function() {
    return gulp.src('package.json_', { read: false })
    .pipe(clean({ force: true }));
});

// 复制图片
gulp.task('copy:image', function() {
    return gulp.src('src/images/*.*')
    // .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest('build/images'));
});

// 复制字体
gulp.task('copy:font', function() {
    return gulp.src('src/styles/impression/font-awesome/fonts/**')
    .pipe(gulp.dest('build/styles/fonts'));
});

// 复制HTML
gulp.task('copy:html', function() {
    return gulp.src('index.html')
    .pipe(gulp.dest('build'));
});

// 编译sass
gulp.task('sass:index', function() {
    return gulp.src('src/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 30 version', '> 90%'] }))
    .pipe(cssmin())
    .pipe(gulp.dest('build/styles'));
});

// 编译impression
gulp.task('sass:project', function() {
    return gulp.src('src/styles/project/index.scss')
    .pipe(rename('project.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 30 version', '> 90%'] }))
    .pipe(cssmin())
    .pipe(gulp.dest('build/styles'));
});

// 编译font-awesome
gulp.task('sass:fontawesome', function() {
    return gulp.src('src/styles/impression/font-awesome/index.scss')
    .pipe(rename('font-awesome.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 100 version', '> 99%'] }))
    .pipe(cssmin())
    .pipe(gulp.dest('build/styles'));
});

// 重命名package.json
gulp.task('rename:package.json', function() {
    return gulp.src('package.json')
    .pipe(rename('package.json_'))
    .pipe(gulp.dest('.'));
});

// 重命名package.json_
gulp.task('rename:package.json_', function() {
    return gulp.src('package.json_')
    .pipe(rename('package.json'))
    .pipe(gulp.dest('.'));
});

// 创建npm可用的package.json
gulp.task('edit:package.json', function() {
    return gulp.src('package.json')
    .pipe(editor(function(json) {
        json.scripts = {
            postpublish: "gulp recovery && npm config set registry https://registry.npm.taobao.org/"
        };

        delete json.peerDependencies;
        delete json.devDependencies;

        delete json.dependencies['highlight.js'];
        delete json.dependencies['react-router'];

        return json;
    }))
    .pipe(gulp.dest("."));
});


// 监听
gulp.task('watch', function() {
    gulp.watch('src/styles/**/*.scss', ['sass:index', 'sass:project']);
});

// 监听: 重新link
gulp.task('watch:link', function() {
    return watch('src/**/*.*').pipe(shell(['npm run compile:js', 'npm run copy']));
});


// 本地启动
gulp.task('build', function(cb) {
    sequence('clean:build', ['copy:html', 'copy:image'], ['sass:index', 'sass:project'], cb);
});

// 备份
gulp.task('backup', function(cb) {
    sequence('rename:package.json', 'edit:package.json', cb);
});

// 恢复
gulp.task('recovery', function(cb) {
    sequence('rename:package.json_', 'clean:package', cb);
});
