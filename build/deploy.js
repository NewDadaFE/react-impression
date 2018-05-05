const path = require('path')
const fs = require('fs')
const qn = require('qn')
const dir = require('node-dir')
const utils = require('./utils')
const { QINIU } = require('./config')
const pkg = require('../package.json')

const BASE = utils.resolve('dist')

if (!fs.existsSync(BASE)) {
  console.log('please confirm you build project. no such directory -> ', BASE)

  return
}

if (!QINIU.ACCESS_KEY || !QINIU.SECRET_KEY) {
  console.log('please set qiniu key in build/config.js.')

  return
}

const client = qn.create({
  accessKey: QINIU.ACCESS_KEY,
  secretKey: QINIU.SECRET_KEY,
  bucket: QINIU.BUCKET
})

dir.files(BASE, (err, files) => {
  if (err) return console.error(err)

  return files.forEach(file => {
    const KEY = file.replace(BASE, `${pkg.name}`)

    client.uploadFile(file, { key: KEY }, (err, res) => {
      if (err) return console.error(err)

      return console.info(res)
    })
  })
})
