const fs = require('fs')
const path = require('path')

let folder = path.resolve(__dirname, '../src/components')

console.log(folder)

fs.readdirSync(folder).forEach(file => {
  // console.log(file);

  const fileName = path.basename(file, '.js')

  const dirPath = path.join(folder, fileName)

  // console.log(dirPath);

  // try {
  //   fs.mkdirSync(dirPath)
  // } catch (err) {
  //   if (err.code !== 'EEXIST') throw err
  // }

  const oldName = path.join(folder, file)
  const newName = path.join(dirPath, file)

  // console.log(newName);

  // fs.renameSync(oldName, newName)

  const indexPath = `${dirPath}/index.js`

  // console.log(indexPath);

  const content = `export default from './${fileName}'`

  // console.log(content);

  fs.writeFileSync(indexPath, content)
})
