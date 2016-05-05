module.exports = function(grunt) {
    'use strict';
    var path, webpack;
    require('load-grunt-tasks')(grunt);
    path = require('path');
    webpack = require('webpack');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        execute: {
            target: {
                src: ['server.js']
            }
        },
        clean: {
            all: {
                src: ["build/**/*"]
            }
        },
        copy: {
            prod: {
                files: [{
                    expand: true,
                    src: 'config.prod.js',
                    dest: 'src/scripts/constants/',
                    ext: '.js'
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    src: 'config.dev.js',
                    dest: 'src/scripts/constants/',
                    ext: '.js'
                }]
            },
            local: {
                files: [{
                    expand: true,
                    src: 'config.local.js',
                    dest: 'src/scripts/constants/',
                    ext: '.js'
                }]
            },
            font: {
                files: [{
                    expand: true,
                    cwd: 'src/styles/font-awesome',
                    src: ['fonts/*'],
                    dest: 'build/styles/'
                }]
            },
            animate: {
                files: [{
                    expand: true,
                    cwd: 'src/styles/animate',
                    src: ['*.css'],
                    dest: 'build/styles/animate'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'auto',
                    trace: false,
                    quiet: false,
                    debugInfo: false,
                    lineNumbers: false,
                    update: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/styles/',
                    src: 'index.scss',
                    dest: 'build/styles/',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/styles',
                    src: 'font-awesome/index.scss',
                    dest: 'build/styles/',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 100 version', '> 99%']
            },
            auto: {
                expand: true,
                flatten: true,
                src: 'build/styles/*.css',
                dest: 'build/styles/'
            }
        },
        cssmin: {
            core: {
                options: {
                    keepSpecialComments: 0,
                    report: "gzip"
                },
                files: {
                  'build/styles/index.css': 'build/styles/index.css'
                }
            }
        },
        watch: {
            less: {
                files: 'src/styles/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['$super', '$', 'exports', 'require', 'module']
                },
                report: 'gzip',
                preserveComments: false
            },
            js: {
                files: [{
                    expand: true,
                    cwd: "build/",
                    src: ["scripts/*.js"],
                    dest: "build/"
                }]
            }
        },
        eslint: {
            target: ['src/scripts/**/*.js']
        }
    });

    grunt.registerTask('default', ['eslint', 'clean', 'copy:local', 'sass', 'copy:font', 'autoprefixer','execute']);
};
