const R = require('ramda')
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')
const mkdirp = require('mkdirp')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    this.option('upgrade')

    this.isUpgrade = Boolean(this.options.upgrade)
  }

  prompting() {
    this.log(
      yosay(
        `Welcome to the neat ${chalk.red(
          'generator-react-impression'
        )} generator!`
      )
    )

    const appPackage = this.fs.readJSON(this.destinationPath('package.json'))
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name:',
        default: this.isUpgrade ? appPackage.name : this.appname,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description:',
        default: this.isUpgrade ? appPackage.description : this.appname,
      },
      {
        type: 'confirm',
        name: 'install',
        message: 'Would you like to install dependencies?',
      },
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  defaults() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        'Your generator must be inside a folder named ' +
          this.props.name +
          '\n' +
          "I'll automatically create this folder."
      )
      mkdirp(this.props.name)
      this.destinationRoot(this.destinationPath(this.props.name))
    }
  }

  writing() {
    const { name, description } = this.props

    // Copy config files
    this.fs.copy(this.templatePath('config/**'), this.destinationPath('config'))

    // Copy example code
    if (!this.isUpgrade) {
      this.fs.copy(this.templatePath('src/**'), this.destinationPath('src'))
    }

    // Copy dot files
    this.fs.copy(this.templatePath('.*'), this.destinationRoot())

    // Copy package.json
    let templatePackage = R.merge(
      this.fs.readJSON(this.templatePath('package.json')),
      { name, description }
    )
    if (this.isUpgrade) {
      templatePackage = R.mergeDeepRight(
        this.fs.readJSON(this.destinationPath('package.json')),
        templatePackage
      )
    }
    this.fs.writeJSON(this.destinationPath('package.json'), templatePackage)

    // Copy README
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { name, description }
    )
  }

  install() {
    this.log(yosay(`WOW! I'm all ${chalk.red('done')}!`))

    if (this.props.install) {
      this.yarnInstall()
    }
  }
}
