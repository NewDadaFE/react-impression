'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');
var extend = require('deep-extend');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
    initializing: function () {
        this.props = {};
    },
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the lovely ' + chalk.red('generator-react-impression') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'projectName',
            message: 'Please input project name:',
        }, {
            type: 'input',
            name: 'projectDesc',
            message: 'Please input project description:'
        },  {
            type: 'input',
            name: 'projectAuthor',
            message: 'Author (NewDadaFE):',
            default: 'NewDadaFE'
        }, {
            type: 'list',
            name: 'projectLicense',
            message: 'Please choose license:',
            choices: ['MIT', 'ISC'],
        }];

        return this.prompt(prompts).then(function (props) {
            this.props = props;
            done();
        }.bind(this));
    },
    defaults: function () {
        if (path.basename(this.destinationPath()) !== this.props.projectName) {
          this.log(
            'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
            'I\'ll automatically create this folder.'
          );
          mkdirp(this.props.projectName);
          this.destinationRoot(this.destinationPath(this.props.projectName));
        }
    },
    writing: function () {
        // == Copy config
        this.fs.copy(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copy(
            this.templatePath('editorconfig'),
            this.destinationPath('.editorconfig')
        );

        this.fs.copy(
            this.templatePath('babelrc'),
            this.destinationPath('.babelrc')
        );

        this.fs.copy(
            this.templatePath('eslintrc.js'),
            this.destinationPath('.eslintrc.js')
        );

        this.fs.copy(
            this.templatePath('webpack.dev.config.js'),
            this.destinationPath('webpack.dev.config.js')
        );

        this.fs.copy(
            this.templatePath('webpack.prod.config.js'),
            this.destinationPath('webpack.prod.config.js')
        );

        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );

        this.fs.copy(
            this.templatePath('index.html'),
            this.destinationPath('index.html')
        );

        // == README
        var readmeTmpl = _.template(this.fs.read(this.templatePath('README.md')));
        this.fs.write(this.destinationPath('README.md'), readmeTmpl({
            name: this.props.projectName,
            description: this.props.projectDesc,
            license: this.props.projectLicense,
            author: this.props.projectAuthor
        }));

        // == package.json
        var pkg = this.fs.readJSON(this.templatePath('package.json'), {});
        extend(pkg, {
            name: this.props.projectName,
            author: this.props.projectAuthor,
            description: this.props.projectDesc,
            license: this.props.projectLicense,
            keywords: [this.props.projectName, 'React'],
        });
        this.fs.writeJSON(this.destinationPath('package.json'), pkg);

        // == mkdirp
        mkdirp('src/images');
        mkdirp('src/styles');
        mkdirp('src/scripts/actions');
        mkdirp('src/scripts/components');
        mkdirp('src/scripts/constants');
        mkdirp('src/scripts/layout');
        mkdirp('src/scripts/reducers');
        mkdirp('src/scripts/utils');
        mkdirp('src/scripts/views');

        // == copy styles
        this.fs.copy(
            this.templatePath('src/styles/index.scss'),
            this.destinationPath('src/styles/index.scss')
        );

        this.fs.copy(
            this.templatePath('src/styles/project.scss'),
            this.destinationPath('src/styles/project.scss')
        );

        // copy images
        this.fs.copy(
            this.templatePath('src/images/logo.png'),
            this.destinationPath('src/images/logo.png')
        );

        this.fs.copy(
            this.templatePath('src/images/favicon.ico'),
            this.destinationPath('src/images/favicon.ico')
        );

        this.fs.copy(
            this.templatePath('src/images/user.jpg'),
            this.destinationPath('src/images/user.jpg')
        );

        // == copy scripts
        this.fs.copy(
            this.templatePath('src/scripts/index.js'),
            this.destinationPath('src/scripts/index.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/store.js'),
            this.destinationPath('src/scripts/store.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/routes.js'),
            this.destinationPath('src/scripts/routes.js')
        );

        // copy containers
        this.fs.copy(
            this.templatePath('src/scripts/layout/App.js'),
            this.destinationPath('src/scripts/layout/App.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/layout/DevTools.js'),
            this.destinationPath('src/scripts/layout/DevTools.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/layout/index.js'),
            this.destinationPath('src/scripts/layout/index.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/layout/Header.js'),
            this.destinationPath('src/scripts/layout/Header.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/layout/Sidebar.js'),
            this.destinationPath('src/scripts/layout/Sidebar.js')
        );

        // copy constants
        this.fs.copy(
            this.templatePath('src/scripts/constants/Urls.js'),
            this.destinationPath('src/scripts/constants/Urls.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/constants/ActionTypes.js'),
            this.destinationPath('src/scripts/constants/ActionTypes.js')
        );

        // copy components
        this.fs.copy(
            this.templatePath('src/scripts/components/Counter.js'),
            this.destinationPath('src/scripts/components/Counter.js')
        );

        // copy views
        this.fs.copy(
            this.templatePath('src/scripts/views/CounterView.js'),
            this.destinationPath('src/scripts/views/CounterView.js')
        );

        // copy actions
        this.fs.copy(
            this.templatePath('src/scripts/actions/counter.js'),
            this.destinationPath('src/scripts/actions/counter.js')
        );

        // copy reducers
        this.fs.copy(
            this.templatePath('src/scripts/reducers/index.js'),
            this.destinationPath('src/scripts/reducers/index.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/reducers/counter.js'),
            this.destinationPath('src/scripts/reducers/counter.js')
        );
    },

    install: function () {
        this.installDependencies({
            bower: false,
        });
    }
});
