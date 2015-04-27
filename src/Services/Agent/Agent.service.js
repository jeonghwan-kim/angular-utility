/**
 * Get agent(web browser) name and details
 * Updated at 2015. 4. 27
 */

'use strict';
angular.module('chris.util', []);

angular.module('chris.util')
    .service('Agent', function ($window) {

      /**
       * Get agent name
       */
      this.getName = function () {
        var agent = $window.navigator.userAgent;

        var agents = {
          chrome: /chrome/i,
          safari: /safari/i,
          firefox: /firefox/i,
          ie: /internet explorer/i
        };

        for(var key in agents) {
          if (agents.hasOwnProperty(key) && agents[key].test(agent)) {
            return key;
          }
        }

        return 'unknown';
      };

      /**
       * Get agent details
       */
      this.getDetails = function () {
        return $window.navigator.userAgent;
      };

    });
