/**
 * Spring Batch Dashboard
 * @module application.config
 */
angular.module('application.config', [
        'job',
        'directives',
        'ui.router',
        'ui.bootstrap',
        'template.app',
        'patternfly',
        'patternfly.charts',
        'ngResource'
    ])

    .constant('NAV_ITEMS', [
        {title: 'Dashboard', state: 'home', sref: 'home', icon: 'fa fa-dashboard'},
        {title: 'Jobs', state: 'jobs', sref: 'jobs', icon: 'fa fa-dashboard'}
    ])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/view/home.tpl.html',
                controller: 'HomeCtrl'
            });
    });
