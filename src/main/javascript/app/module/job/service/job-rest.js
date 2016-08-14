/**
 * Spring Batch Dashboard
 * @module job.config
 */
function appendTransform(defaults, transform) {

    // We can't guarantee that the default transformation is an array
    defaults = angular.isArray(defaults) ? defaults : [defaults];

    // Append the new transformation to the defaults
    return defaults.concat(transform);
}

angular.module('job')

    .factory('JobRestService', ['$resource', '$http', function($resource, $http) {
        return $resource('api/jobs/:jobId', {}, {
            query: {
                method: 'GET',
                params: {jobId: '@id'},
                isArray: true,
                transformResponse: appendTransform($http.defaults.transformResponse, function(response) {
                    return response.hasOwnProperty('_embedded') ? response._embedded.jobs : response;
                })
            }
        });
    }
]);