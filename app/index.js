const R = require('ramda')
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')
const fs = require('fs-extra')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }

  initializing() {
    this.isUpgrade = this.fs.exists(this.destinationPath('package.json'))
  }

  prompting() {
    this.log(
      yosay(`Welcome to the neat ${chalk.red('react-impression')} generator!`)
    )

    if (this.isUpgrade) {
      const pkg = this.fs.readJSON(this.destinationPath('package.json'))
      this.props = R.pick(['name', 'description'], pkg)
      return
    }

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description:',
      },
    ]

    return this.prompt(prompts).then(props => (this.props = props))
  }

  configuring() {
    if (this.isUpgrade) return

    if (path.basename(this.destinationPath()) === this.props.name) return

    fs.ensureDirSync(this.props.name)
    this.destinationRoot(this.destinationPath(this.props.name))
  }

  _copyHTML() {
    const hasHTML = this.fs.exists(this.destinationPath('src/index.html'))

    if (this.isUpgrade && hasHTML) {
      this.fs.move('src/index.html', 'public/index.html')
      return
    }

    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'),
      { name: this.props.name }
    )
  }

  _copyExample() {
    if (!this.isUpgrade) {
      this.fs.copy(this.templatePath('src/**'), this.destinationPath('src'))
      return
    }

    if (this.fs.exists(this.destinationPath('src/main.js'))) {
      this.fs.move(
        this.destinationPath('src/main.js'),
        this.destinationPath('src/index.js')
      )
    }
  }

  _copyConfig() {
    this.fs.copy(this.templatePath('.*'), this.destinationRoot())
  }

  _copyPackage() {
    let pkg = this.fs.readJSON(this.templatePath('package.json'))

    if (!this.isUpgrade) {
      pkg = R.merge(pkg, this.props)
      pkg.babel.plugins[1][1]['react-impression'] = {
        transform: 'react-impression/components/${member}',
        preventFullImport: true,
      }
      this.fs.writeJSON(this.destinationPath('package.json'), pkg)
      return
    }

    const config = R.pick(
      ['name', 'version', 'description', 'dependencies', 'proxy', 'deploy'],
      this.fs.readJSON(this.destinationPath('package.json'))
    )

    const required = {
      dependencies: R.pick(
        [
          'babel-plugin-react-css-modules',
          'babel-runtime',
          'moment',
          'react',
          'react-dom',
        ],
        pkg.dependencies
      ),
    }

    const custom = R.mergeDeepRight(config, required)

    pkg = R.mergeRight(pkg, custom)

    this.fs.writeJSON(this.destinationPath('package.json'), pkg)
  }

  _copyReadme() {
    if (this.isUpgrade) return

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    )
  }

  _copyWebpack() {
    this.fs.copy(this.templatePath('*.js'), this.destinationRoot())
  }

  writing() {
    this._copyHTML()
    this._copyExample()
    this._copyConfig()
    this._copyPackage()
    this._copyReadme()
    this._copyWebpack()
  }

  install() {
    this.log(yosay(`WOW! I'm all ${chalk.red('done')}!`))
    this.yarnInstall()
  }
}
