/**
 * Spring Batch Dashboard
 * @module job.config
 */
angular.module('job.config', [
        'job',
        'ui.router'
    ])

    .constant('JOB_MODULES', [
        {title: 'Dashboard', state: 'jobs', sref: 'jobs', icon: ''}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/jobs');

        $stateProvider
            .state('jobs', {
                url: '/jobs',
                templateUrl: 'app/module/job/view/list.tpl.html',
                controller: 'JobCtrl'
            })
            .state('jobs-detail', {
                url: '/jobs/:jobId',
                templateUrl: 'app/module/job/view/detail.tpl.html',
                controller: 'JobDetailCtrl'
            });
    });
