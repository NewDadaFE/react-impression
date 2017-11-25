const path = require('path')
const exec = require('child_process').execSync
const dir = require('node-dir')
const qiniu = require('qiniu')

let {
  npm_package_name: NAME,
  npm_package_version: VERSION,
  npm_package_deploy_ACCESS_KEY: ACCESS_KEY,
  npm_package_deploy_SECRET_KEY: SECRET_KEY,
} = process.env

const isDebug = process.argv.indexOf('--debug') > -1

const isClean = () => {
  const command = 'git status --porcelain'
  const lines = exec(command)
    .toString()
    .trim()
    .split('\n')
    .filter(line => line.length)

  return lines.length === 0
}

const getRevision = () => {
  const command = 'git rev-parse --short HEAD'

  return exec(command)
    .toString()
    .trim()
}

if (isDebug) {
  if (isClean()) {
    VERSION = getRevision()
  } else {
    console.log('请提交代码后再发测试版本！')
    return
  }
}

const BASE = path.resolve(__dirname, 'dist')
const BUCKET = 'dada-fe'

qiniu.conf.ACCESS_KEY = ACCESS_KEY
qiniu.conf.SECRET_KEY = SECRET_KEY

dir.files(BASE, (err, files) => {
  if (err) return console.error(err)

  return files.forEach(file => {
    const KEY = file.replace(BASE, `${NAME}/${VERSION}`)
    const TOKEN = new qiniu.rs.PutPolicy(`${BUCKET}:${KEY}`).token()
    const EXTRA = new qiniu.io.PutExtra()

    qiniu.io.putFile(TOKEN, KEY, file, EXTRA, (err, res) => {
      if (err) return console.error(err)

      return console.log(res.hash, res.key)
    })
  })
})
