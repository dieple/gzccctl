'use strict';

angular.module('devopsApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('devopsApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });