/**
 * Convert birth into age
 * Created at 2015. 4. 27
 * Updated at 2015. 4. 27
 */

'use strict';

angular.module('chris.util')
    .filter('birthToAge', function () {
      return function (birth) {

        var today,
            diff,
            age;

        // When input = "yyyyMMdd", convert into Date object
        if (/^\d{8}$/.test(birth)) {
          birth = new Date(
              parseInt(birth.slice(0, 4), 10),
              parseInt(birth.slice(4, 6), 10) - 1,
              parseInt(birth.slice(6, 8), 10));
        }

        if (!(birth instanceof Date)) {
          return -1;
        }

        today = new Date();
        if (birth >= today) {
          return -1;
        }

        diff = (today - birth) / (60 * 60 * 24 * 365 * 1000);
        return Math.floor(diff);
      };
    });