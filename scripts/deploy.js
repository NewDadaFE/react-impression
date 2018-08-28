const { TRAVIS_PULL_REQUEST, TRAVIS_REPO_SLUG, GITHUB_TOKEN } = process.env

if (TRAVIS_PULL_REQUEST === 'false') return

const { execSync } = require('child_process')
const project = 'packages/react-impression-website/dist'
const domain = `https://react-impression-${TRAVIS_PULL_REQUEST}.surge.sh`
execSync(`surge --project ${project} --domain ${domain}`, { stdio: 'inherit' })

const fetch = require('node-fetch')
;(async () => {
  const url = `https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments`
  const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json; charset=utf-8',
  }
  const parseBody = response => response.json()
  const comments = await fetch(url, { method: 'GET', headers }).then(parseBody)
  const hasLink = x => x.some(y => y.body.indexOf('surge.sh') > -1)

  if (hasLink(comments)) return

  const body = `https://react-impression-${TRAVIS_PULL_REQUEST}.surge.sh`
  await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ body }),
  })
})()
