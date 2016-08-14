/**
 * springbatch-dashboard
 * Grunt task runner configuration.
 */
module.exports = function (grunt) {
    'use strict';

    // load all required Grunt plugins listed in package.json
    require('load-grunt-tasks')(grunt);

    // display the elapsed execution time of all tasks
    require('time-grunt')(grunt);

    // use serve-static
    var serveStatic = require('serve-static');
    var modRewrite = require('connect-modrewrite');
    var path = require('path');

    // Task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Project paths
        scaffold: {
            sourceDir: 'src/main/javascript/',
            testDir: 'src/test/javascript/',
            bowerDir: 'src/main/javascript/bower_components/',
            buildRoot: 'build/javascript',
            tmpDir: 'build/javascript/.tmp/',
            assetDir: 'build/javascript/.tmp/asset/',
            concatDir: 'build/javascript/.tmp/concat/',
            htmlDir: 'build/javascript/.tmp/html/',
            distDir: 'build/javascript/dist/'
        },

        clean: {
            tmp: ['<%= scaffold.tmpDir %>'],
            fonts: ['<%= scaffold.sourceDir %>asset/fonts/']
        },

        useminPrepare: {
            html: '<%= scaffold.sourceDir %>index.html',
            options: {
                staging: '<%= scaffold.tmpDir %>',
                dest: '<%= scaffold.distDir %>'
            }
        },

        usemin: {
            html: '<%= scaffold.htmlDir %>index.html'
        },

        ngmin: {
            app: {
                src: ['<%= scaffold.concatDir %>js/app.js'],
                dest: '<%= scaffold.concatDir %>js/app.js'
            }
        },

        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: true,
                sourceMapIncludeSources: true
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            }
        },

        html2js: {
            app: {
                options: {
                    base: 'src/main/javascript',
                    module: 'template.app',
                    useStrict: true,
                    quoteChar: '\'',
                    indentString: '    ',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                },
                src: ['<%= scaffold.sourceDir %>app/**/*.tpl.html'],
                dest: '<%= scaffold.sourceDir %>app/module/template/template.js'
            }
        },

        copy: {
            fonts: {
                // Bower fonts
                cwd: '<%= scaffold.bowerDir %>patternfly/dist/',
                src : ['fonts/*.*'],
                dest: '<%= scaffold.sourceDir %>asset/',
                expand: true
            },
            tmp: {
                files: [{
                    // HTML index
                    cwd: '<%= scaffold.sourceDir %>',
                    src: ['index.html'],
                    dest: '<%= scaffold.htmlDir %>',
                    expand: true
                }, {
                    // Assets (fonts, img, ico)
                    cwd: '<%= scaffold.sourceDir %>',
                    src : ['asset/**/*.*'],
                    dest: '<%= scaffold.tmpDir %>',
                    expand: true
                }]
            },

            dist: {
                files: [{
                    // HTML index
                    cwd: '<%= scaffold.htmlDir %>',
                    src : ['index.html'],
                    dest: '<%= scaffold.distDir %>',
                    expand: true
                }, {
                    // Fonts and images
                    cwd: '<%= scaffold.assetDir %>',
                    src : ['**'],
                    dest: '<%= scaffold.distDir %>',
                    expand: true
                }]
            },

            unmin: {
                files: [{
                    cwd: '<%= scaffold.concatDir %>',
                    src : ['**'],
                    dest: '<%= scaffold.distDir %>',
                    expand: true
                }]
            },

            resources: {
                files: [{
                    cwd: '<%= scaffold.distDir %>',
                    src : ['**'],
                    dest: 'build/resources/main/static/',
                    expand: true
                }]
            }
        },

        jshint: {
            options: {
                force: true,
                jshintrc: '.jshintrc',
                ignores: [
                    '<%= scaffold.concatDir %>**/vendor.js',
                    '<%= scaffold.sourceDir %>/bower_components/**/*.js'
                ]
            },
            standard: [
                '<%= scaffold.sourceDir %>**/*.js',
                '<%= scaffold.testDir %>**/*.spec.js',
                '<%= scaffold.testDir %>**/*.scenario.js',
                '<%= scaffold.testDir %>**/*.conf.js',
                'Gruntfile.js'
            ]
        },

        karma: {
            standard: {
                configFile: 'src/test/javascript/config/karma.unit.conf.js',
                browsers: ['PhantomJS']
            },
            allBrowsers: {
                configFile: 'src/test/javascript/config/karma.unit.conf.js'
            },
            coverage: {
                configFile: 'src/test/javascript/config/karma.unit.conf.js',
                reporters: [
                    'coverage'
                ],
                preprocessors: {
                    'src/**/*.js': ['coverage']
                },
                coverageReporter: {
                    type : 'html',
                    dir : 'test/coverage/'
                }
            }
        },

        plato: {
            dev: {
                options: {
                    jshint: grunt.file.readJSON('.jshintrc')
                },
                files: {
                    'reports': [
                        'src/**/*.js',
                        'test/unit/**/*.js',
                        'test/e2e/**/*.js'
                    ]
                }
            }
        },

        apimocker: {
            options: {
                wait: false,
                configFile: 'apimocker.config.json'
            }
        },

        connect: {
            options: {
                hostname: 'localhost',
                port: 9001
            },
            standard: {
                options: {
                    base: '<%= scaffold.sourceDir %>',
                    open: true,
                    middleware: function (connect, options) {
                        return [
                            require('connect-livereload')(),

                            modRewrite (['^/api http://localhost:7879/api [P L]']),
                            modRewrite (['!\\.html|\\.map|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif|\\.ico|\\.woff2|\\.woff|\\.ttf$ /index.html']),

                            serveStatic(path.resolve(options.base[0]))
                        ];
                    }
                }
            }
        },

        watch: {
            standard: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= scaffold.sourceDir %>index.html',
                    '<%= scaffold.sourceDir %>app/**/*.tpl.html',
                    '<%= scaffold.sourceDir %>app/**/*.js',
                    '<%= scaffold.sourceDir %>css/*.css',
                    '<%= scaffold.testDir %>**/*.spec.js',
                    'Gruntfile.js'
                ],
                tasks: [
                    'build',
                    'jshint',
                    'karma:standard'
                ]
            },
            dev: {
                files: [
                    '<%= scaffold.sourceDir %>index.html',
                    '<%= scaffold.sourceDir %>app/**/*.tpl.html',
                    '<%= scaffold.sourceDir %>app/**/*.js',
                    '<%= scaffold.sourceDir %>css/*.css',
                    '<%= scaffold.testDir %>**/*.spec.js',
                    'Gruntfile.js'
                ],
                tasks: [
                    'build',
                    'karma:allBrowsers'
                ]
            }
        }
    });

    // Task registration
    grunt.registerTask('default', ['server']);

    grunt.registerTask('prepare', [
        'clean',
        'copy:fonts',
        'html2js',
        'useminPrepare',
        'copy:tmp',
        'concat'
    ]);

    grunt.registerTask('build', [
        'prepare',
        'usemin',
        'copy:dist',
        'copy:unmin',
        'copy:resources',
        'clean:fonts'
    ]);

    grunt.registerTask('test', [
        'build',
        'karma:allBrowsers',
        'watch:dev'
    ]);

    grunt.registerTask('coverage', [
        'build',
        'karma:coverage'
    ]);

    grunt.registerTask('report', [
        'plato'
    ]);

    grunt.registerTask('server', [
        'build',
        'jshint',
        'karma:standard',
        'connect',
        'apimocker',
        'watch:standard'
    ]);

    grunt.registerTask('release', [
        'prepare',
        'ngmin',
        'uglify',
        'cssmin',
        'usemin',
        'copy:dist',
        'clean:fonts',
        'jshint',
        'karma:allBrowsers',
        'clean:tmp'
    ]);
};
