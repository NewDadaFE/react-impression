const fs = require('fs')
const path = require('path')

const srcPath = path.resolve(__dirname, '../src')
const componentsPath = path.join(srcPath, 'components')

// console.log(srcPath)
// console.log(componentsPath);

const list = fs.readdirSync(componentsPath)
const content = list
  .map(name => `export ${name} from './components/${name}'`)
  .join('\n')

fs.writeFileSync(`${srcPath}/index.js`, content)
