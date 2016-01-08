'use strict';

angular.module('devopsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


