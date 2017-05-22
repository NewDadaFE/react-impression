/* eslint-disable import/no-extraneous-dependencies, no-console */
const qiniu = require('qiniu');
const path = require('path');
const dir = require('node-dir');

const { npm_package_name: NAME, npm_package_version: VERSION } = process.env;

const BASE = path.resolve(__dirname, 'dist');
const BUCKET = 'dada-fe';

qiniu.conf.ACCESS_KEY = '';
qiniu.conf.SECRET_KEY = '';

dir.files(BASE, (err, files) => {
  if (err) return console.error(err);

  return files.forEach(file => {
    const KEY = file.replace(BASE, `${NAME}/${VERSION}`);
    const TOKEN = new qiniu.rs.PutPolicy(`${BUCKET}:${KEY}`).token();
    const EXTRA = new qiniu.io.PutExtra();

    qiniu.io.putFile(TOKEN, KEY, file, EXTRA, (err, res) => {
      if (err) return console.error(err);

      return console.log(res.hash, res.key);
    });
  });
});
