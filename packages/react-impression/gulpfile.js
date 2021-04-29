const fs = require('fs-extra')
const minimist = require('minimist')
const gulp = require('gulp')
const plugin = require('gulp-load-plugins')()

const options = minimist(process.argv.slice(2))
process.env.NODE_ENV = options.env || 'production'

const clean = () => fs.emptyDir('dist')

const style = () => gulp.src('src/**/*.scss').pipe(gulp.dest('dist'))

const script = () => {
  return gulp
    .src('src/**/*.js')
    .pipe(plugin.babel({ configFile: '../../babel.config.js' }))
    .pipe(gulp.dest('dist'))
}

const config = async () => {
  const transform = x =>
    Object.keys(x)
      .filter(y => y !== 'scripts' && y !== 'devDependencies')
      .reduce((acc, z) => {
        if (z === 'module' || z === 'sass') {
          acc[z] = x[z].replace('dist/', '')
        } else {
          acc[z] = x[z]
        }
        return acc
      }, {})

  try {
    const pkg = await fs.readJson('./package.json')
    await fs.outputJson('dist/package.json', transform(pkg), { spaces: 2 })
    await fs.copy('../../README.md', 'dist/README.md')
    await fs.copy('../../LICENSE', 'dist/LICENSE')
  } catch (err) {
    console.error(err)
  }
}

const build = gulp.series(clean, gulp.parallel(style, script, config))

module.exports = { build }
