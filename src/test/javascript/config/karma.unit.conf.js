// Karma configuration: Unit Tests
// Generated on Mon Aug 19 2013 10:31:57 GMT+0200 (CEST)

module.exports = function (config) {
    'use strict';

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../../../',

        // frameworks to use
        frameworks: [
            'jasmine'
        ],

        // list of files / patterns to load in the browser
        files: [
            'src/main/javascript/bower_components/jquery/dist/jquery.min.js',
            'src/main/javascript/bower_components/matchHeight/dist/jquery.matchHeight-min.js',

            'src/main/javascript/bower_components/c3/c3.min.js',
            'src/main/javascript/bower_components/d3/d3.min.js',

            'src/main/javascript/bower_components/moment/min/moment.min.js',
            'src/main/javascript/bower_components/bootstrap/dist/js/bootstrap.min.js',
            'src/main/javascript/bower_components/patternfly/dist/js/patternfly.min.js',

            'src/main/javascript/bower_components/angular/angular.js',
            'src/main/javascript/bower_components/angular-resource/angular-resource.js',
            'src/main/javascript/bower_components/angular-sanitize/angular-sanitize.js',
            'src/main/javascript/bower_components/angular-ui-router/release/angular-ui-router.js',
            'src/main/javascript/bower_components/angular-bootstrap/ui-bootstrap.js',
            'src/main/javascript/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'src/main/javascript/bower_components/angular-patternfly/dist/angular-patternfly.min.js',
            'src/main/javascript/bower_components/angular-mocks/angular-mocks.js',
            
            'src/main/javascript/app/**/*.js',
            'src/test/javascript/unit/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: [
            'progress'
        ],

        // web server port
        port: 6789,

        // hostname to be used when capturing browsers
        // default: 'localhost'
        hostname: 'localhost',

        // base url, where Karma runs.
        urlRoot: '/_unit-tests_/',

        // map of path-proxy pairs
        proxies: {
            '/': 'http://localhost:8080/'
        },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // list of log appenders to be used
        loggers: [
            {type: 'console'}
        ],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS',
            'Chrome',
            'Firefox'
        ],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
