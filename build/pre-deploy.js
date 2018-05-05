const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const clean = require('gulp-clean')
const sequence = require('gulp-run-sequence')
const utils = require('./utils')

// Clean
const cleanDirs = ['es', 'lib', 'site', 'dist']
const cleans = []
cleanDirs.forEach(dir => {
  gulp.task(`clean:${dir}`, () => {
    return gulp.src(utils.resolve(dir))
      .pipe(clean({force: true}))
  })
  cleans.push(`clean:${dir}`)
})
gulp.task('clean', cleans)

// 编译esModules版本
gulp.task('build:es', () => {
  return gulp.src(utils.resolve('src/lib/**/*.js'))
    .pipe(babel({
      babelrc: false,
      presets: [['env', { modules: false }], 'react'],
      plugins: [
        'syntax-object-rest-spread',
        'transform-export-extensions',
        'transform-class-properties'
      ]
    }))
    .pipe(gulp.dest(utils.resolve('es')))
})

// 分开编译JS，方便单个引入
gulp.task('build:lib', () => {
  return gulp.src(utils.resolve('src/lib/**/*.js'))
    .pipe(babel())
    .pipe(gulp.dest(utils.resolve('lib')))
})

// cp scss
gulp.task('cp:scss', function () {
  return gulp.src(utils.resolve('src/lib/**/*.scss'))
    .pipe(gulp.dest(utils.resolve('lib')))
    .pipe(gulp.dest(utils.resolve('es')))
})

// 编译scss
gulp.task('build:scss', function () {
  // complie
  return gulp.src(utils.resolve('src/lib/**/index.scss'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(utils.resolve('lib')))
    .pipe(gulp.dest(utils.resolve('es')))
})

gulp.task('default', function (cb) {
  sequence(['clean'], ['build:lib', 'build:es'], ['cp:scss', 'build:scss'], cb)
})
