const R = require('ramda')
const fs = require('fs')
const fetch = require('node-fetch')
const ownPackage = require('./package.json')

const version = {
  'eslint-config-standard': '11.0.0',
  'eslint-config-standard-react': '6.0.0',
}

const generateURL = packageName =>
  `https://unpkg.com/${packageName}@${version[packageName]}/package.json`

const parseBody = response => response.json()

const getPeerDependencies = R.prop('peerDependencies')

const getPackage = packageName =>
  fetch(generateURL(packageName))
    .then(parseBody)
    .then(getPeerDependencies)

async function upgrade() {
  const standardPackage = await getPackage('eslint-config-standard')
  const standardReactPackge = await getPackage('eslint-config-standard-react')

  const peerDependencies = [
    getPeerDependencies(ownPackage),
    version,
    standardPackage,
    standardReactPackge,
  ]

  const evolve = R.pipe(
    R.mergeAll,
    R.map(
      R.pipe(
        R.replace(/\^/g, ''),
        R.replace(/~/g, ''),
        R.replace(/>=/g, ''),
        x => `^${x}`
      )
    )
  )

  const output = R.pipe(
    evolve,
    R.toPairs,
    R.map(R.join('@')),
    R.join(' ')
  )

  console.log(output(peerDependencies))

  const write = data =>
    fs.writeFileSync('package.json', JSON.stringify(data, null, 2))

  const workflow = R.pipe(
    evolve,
    R.assoc('peerDependencies', R.__, ownPackage),
    write
  )

  workflow(peerDependencies)
}

upgrade()
