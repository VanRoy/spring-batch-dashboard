/**
 * Spring Batch Dashboard
 * @module job
 */
angular.module('job', [
        'job.config'
    ])

    .controller('JobCtrl', function ($scope, $state, JobRestService) {
        'use strict';


        $scope.items = JobRestService.query();

        $scope.$watch('items.length', function(length){
            $scope.toolbarConfig.filterConfig.resultsCount =  length;
        });

        $scope.toolbarConfig = {
            viewsConfig: {
            },
            filterConfig: {
                fields: [
                    {
                        id: 'name',
                        title:  'Name',
                        placeholder: 'Filter by Name...',
                        filterType: 'text'
                    }
                ],
                resultsCount: $scope.items.length,
                appliedFilters: []
//                onFilterChange: filterChange
            },
            sortConfig: {
                fields: [{
                    id: 'name',
                    title:  'Name',
                    sortType: 'alpha'
                }]
            },
            actionsConfig: {}
        };

        $scope.viewConfig = {
            showSelectBox: false
        };

        $scope.actionButtons = [{
            name: 'Detail',
            title: 'Show job detail',
            actionFn: function(button, reference) {
                $state.go('jobs-detail', {jobId: reference.jobExecution.id});
            }
        }];
    })


    .controller('JobDetailCtrl', function ($scope, $stateParams, JobRestService) {
        'use strict';

        $scope.job = JobRestService.get({jobId: $stateParams.jobId});
    });
