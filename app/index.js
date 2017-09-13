const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')
const mkdirp = require('mkdirp')

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the neat ${chalk.red(
          'generator-react-impression',
        )} generator!`,
      ),
    )

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name:',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description:',
        default: this.appname,
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
          "I'll automatically create this folder.",
      )
      mkdirp(this.props.name)
      this.destinationRoot(this.destinationPath(this.props.name))
    }
  }

  writing() {
    const { name, description } = this.props

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { name, description },
    )

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { name, description },
    )

    this.fs.copy(
      this.templatePath('**/!(package.json|README.md)'),
      this.destinationRoot(),
      { globOptions: { dot: true } },
    )
  }

  install() {
    this.log(yosay(`WOW! I'm all ${chalk.red('done')}!`))

    if (this.props.install) {
      this.yarnInstall()
    }
  }
}
