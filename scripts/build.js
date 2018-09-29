/**
 * Build
 */
const { execSync } = require('child_process')
const shell = command => execSync(command, { stdio: 'inherit' })

shell('yarn workspace react-impression release')
shell('yarn workspace react-impression-website build')
shell('yarn workspace react-impression-examples build')

/**
 * Copy
 */
const fs = require('fs-extra')

fs.emptyDirSync('dist')
fs.copySync('packages/react-impression-website/dist', 'dist')
fs.copySync('packages/react-impression-examples/dist', 'dist/examples')
