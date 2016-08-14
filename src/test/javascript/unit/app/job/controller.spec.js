/**
 * Unit Testing: User/Controller
 */

describe('Unit Testing: Job/Controller', function () {
    'use strict';

    var $scope, $controller;

    beforeEach(module('job'));

    beforeEach(inject(function ($injector) {
        $scope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
    }));

    describe('JobCtrl', function () {
        it('', function () {
            /*
            var expected = {
                heading: 'My account!'
            };

            var params = {
                $scope: $scope
            };

            $controller('UserCtrl', params);

            expect($scope.mainHeading).toBe(expected.mainHeading);
            */
        });
    });
});
