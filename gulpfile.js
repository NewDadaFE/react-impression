const del = require('del')
const gulp = require('gulp')
const plugin = require('gulp-load-plugins')()
const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const pkg = require('./package.json')

const clean = () => del(['dist'])

const style = () => {
  return gulp
    .src('src/styles/index.scss')
    .pipe(plugin.sass().on('error', plugin.sass.logError))
    .pipe(plugin.rename({ dirname: '', basename: 'react-impression' }))
    .pipe(gulp.dest('dist'))
}

const script = async () => {
  const inputOptions = {
    input: 'src/index.js',
    external: [
      'react',
      'react-dom',
      'react-addons-css-transition-group',
      'prop-types',
      'moment',
      'highlight.js',
    ],
    plugins: [
      resolve(),
      commonjs({ include: /node_modules/ }),
      babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
    ],
  }
  const outputOptions = {
    commonjs: {
      format: 'cjs',
      file: pkg.main,
    },
    esm: {
      format: 'es',
      file: pkg.module,
    },
  }

  const bundle = await rollup.rollup(inputOptions)

  await Promise.all([
    bundle.write(outputOptions.commonjs),
    bundle.write(outputOptions.esm),
  ])
}

const start = () => {
  gulp.watch('src/**/*.scss', style)
  gulp.watch('src/**/*.js', script)
}

const build = gulp.series(clean, gulp.parallel(style, script))

module.exports = { start, build }
