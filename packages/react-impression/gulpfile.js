const minimist = require('minimist')
const del = require('del')
const gulp = require('gulp')
const plugin = require('gulp-load-plugins')()
const pkg = require('./package.json')

const options = minimist(process.argv.slice(2))
process.env.NODE_ENV = options.env || 'production'

const clean = () => del(['dist'])

const style = () => {
  return gulp
    .src('src/styles/index.scss')
    .pipe(plugin.sass().on('error', plugin.sass.logError))
    .pipe(plugin.rename({ dirname: '', basename: 'react-impression' }))
    .pipe(gulp.dest('dist'))
}

const script = () => {
  return gulp
    .src('src/**/*.js')
    .pipe(plugin.babel())
    .pipe(gulp.dest('dist'))
}

const build = gulp.series(clean, gulp.parallel(script))

module.exports = { build }
