const minimist = require('minimist')
const del = require('del')
const gulp = require('gulp')
const plugin = require('gulp-load-plugins')()
const pkg = require('./package.json')

const options = minimist(process.argv.slice(2))
process.env.NODE_ENV = options.env || 'production'

const clean = () => del(['dist'])

const style = () => gulp.src('src/**/*.scss').pipe(gulp.dest('dist'))

const script = () => {
  return gulp
    .src('src/**/*.js')
    .pipe(plugin.babel({ configFile: '../../babel.config.js' }))
    .pipe(gulp.dest('dist'))
}

const build = gulp.series(clean, gulp.parallel(style, script))

module.exports = { build }
