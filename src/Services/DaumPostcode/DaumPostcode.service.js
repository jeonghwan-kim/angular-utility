/**
 * Daum location service
 * http://postcode.map.daum.net/guide
 * Created at 2015. 5. 20
 * Updated at 2015. 5. 20
 */

'use strict';

angular.module('chris.util')
    .service('DaumPostcode', function ($q) {
      return function () {
        var deferred = $q.defer();

        try {
          new daum.Postcode({
            oncomplete: function (data) {
              deferred.resolve(data);
            }
          }).open();
        } catch (e) {
          deferred.reject(e);
        }

        return deferred.promise;
      };
    });
