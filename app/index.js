const R = require('ramda')
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')
const fs = require('fs-extra')
const semver = require('semver')

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
    if (!this.isUpgrade) {
      this.fs.copyTpl(
        this.templatePath('public/index.html'),
        this.destinationPath('public/index.html'),
        { name: this.props.name }
      )
      return
    }

    if (this.fs.exists(this.destinationPath('src/index.html'))) {
      this.fs.move('src/index.html', 'public/index.html')
      return
    }

    if (!this.fs.exists(this.destinationPath('public/index.html'))) {
      this.fs.copyTpl(
        this.templatePath('public/index.html'),
        this.destinationPath('public/index.html'),
        { name: this.props.name }
      )
    }
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
  _copyQshell() {
    if (!this.isUpgrade) {
      const config = this.fs.readJSON(this.templatePath('.qshell.json'))
      const custom = R.mergeRight(config, { key_prefix: `${this.props.name}/` })
      this.fs.writeJSON(this.destinationPath('.qshell.json'), custom)
      return
    }

    if (!this.fs.exists(this.destinationPath('.qshell.json'))) {
      const config = this.fs.readJSON(this.templatePath('.qshell.json'))
      const pkg = this.fs.readJSON(this.destinationPath('package.json'))
      const custom = R.mergeRight(config, {
        access_key: pkg.deploy.ACCESS_KEY,
        secret_key: pkg.deploy.SECRET_KEY,
        bucket: pkg.deploy.BUCKET || '',
        key_prefix: `${pkg.name}/`,
      })
      this.fs.writeJSON(this.destinationPath('.qshell.json'), custom)
    }
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

    const isVersionMatch = semver.satisfies(
      semver.valid(semver.coerce(pkg.dependencies['react-impression'])),
      '2.x'
    )

    if (isVersionMatch) {
      pkg.babel.plugins[1][1]['react-impression'] = {
        transform: 'react-impression/components/${member}',
        preventFullImport: true,
      }
    }

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
    this._copyQshell()
    this._copyPackage()
    this._copyReadme()
    this._copyWebpack()
  }

  install() {
    this.log(yosay(`WOW! I'm all ${chalk.red('done')}!`))
    this.yarnInstall()
  }
}
