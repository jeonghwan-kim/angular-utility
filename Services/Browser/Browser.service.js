/**
 * Browser.service.js v.0.1.0
 *
 * Get web browser name and details
 *
 */

'use strict';

angular.module('jhUtil')
    .service('Browser', function ($window) {

      /**
       * Get browser name
       */
      function name() {
        var userAgent = $window.navigator.userAgent;

        var browsers = {
          chrome: /chrome/i,
          safari: /safari/i,
          firefox: /firefox/i,
          ie: /internet explorer/i
        };

        for(var key in browsers) {
          if (browsers[key].test(userAgent)) {
            return key;
          }
        }

        return 'unknown';
      }

      /**
       * Get browser details
       */
      function detail() {
        return $window.navigator.userAgent;
      }

      this.name = name;
      this.detail= detail;

    });
