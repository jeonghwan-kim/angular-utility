/**
 * Logging exception to server-side using stacktrace.js
 * Created at 2015. 5. 5
 * Updated at 2015. 5. 5
 */

'use strict';

angular.module('chris.util')
    .factory('ExceptionLogToServer', function ($log, $window) {
      var tag = 'ExceptionLog.service';

      function error(exception, cause) {
        $log.error.apply($log, arguments);

        try {
          $.ajax({
            type: 'POST',
            url: '/api/logs', // Backend api has payload key "log"
            data: {
              log: angular.toJson({
                url: $window.location.href,
                message: exception.toString,
                type: 'EXCEPTION',
                stackTrace: printStackTrace({ // You should import stacttrace.js library
                  e: exception
                }),
                cause: cause || ''
              })
            }
          });
          return $log.info(tag, 'Logged exception to server-side');
        } catch (_error) {
          $log.warn(tag, 'Error server-side logging failed');
          return $log.warn(tag, _error);
        }
      }

      return error;
    });


/**
 * Override Angular's built in exception handler and tell it to use our new exceptionLog which is defined below
 */
angular.module('chris.util')
    .provider("$exceptionHandler", {
      $get: function (ExceptionLogToServer) { // Angular provider should define it's $get key
        return ExceptionLogToServer;
      }
    });