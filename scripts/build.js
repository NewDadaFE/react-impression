/**
 * Build
 */
const { spawnSync } = require('child_process')
const build = package =>
  spawnSync('yarn', ['workspace', package, 'build'], { stdio: 'inherit' })

build('react-impression')
build('react-impression-website')
build('react-impression-examples')

/**
 * Copy
 */
const fs = require('fs-extra')

fs.emptyDirSync('dist')
fs.copySync('packages/react-impression-website/dist', 'dist')
fs.copySync('packages/react-impression-examples/build', 'dist/examples')
