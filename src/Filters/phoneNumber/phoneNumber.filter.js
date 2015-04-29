/**
 * Convert number to phone number format with hyphen
 * Created at 2015. 4. 29
 * Updated at 2015. 4. 29
 */

'use strict';

angular.module('chris.util')
    .filter('phoneNumber', function () {
      return function (input) {
        if (!input) {
          return;
        }

        if (typeof input !== 'string') {
          input = input.toString();
        }

        if (input.match(/-/)) {
          return input;
        }

        switch (input.length) {

          case 10:
            return input.substring(0, 3) + '-' +
                input.substring(3, 6) + '-' +
                input.substring(6, 10);

          case 11:
            return input.substring(0, 3) + '-' +
                input.substring(3, 7) + '-' +
                input.substring(7, 11);

          default:
            return input;
        }
      };
    });