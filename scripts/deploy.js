const { TRAVIS_PULL_REQUEST, GITHUB_TOKEN } = process.env

if (TRAVIS_PULL_REQUEST === 'false') return

const project = 'packages/react-impression-website/dist'
const domain = `https://react-impression-${TRAVIS_PULL_REQUEST}.surge.sh`

const { execSync } = require('child_process')

execSync(`surge --project ${project} --domain ${domain}`, { stdio: 'inherit' })
