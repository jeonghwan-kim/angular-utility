/**
 * 1 -> 001 or 0001 or 00...01
 * Created at 2015. 5. 4
 * Updated at 2015. 5. 4
 */

'use strict';

angular.module('chris.util')
    .filter('padding', function () {
      return function (number, length, paddingChar) {
        var str = number.toString(),
            paddingChar = paddingChar | '0';

        while (str.length < length) {
          str = paddingChar + str;
        }

        return str;
      };
    });