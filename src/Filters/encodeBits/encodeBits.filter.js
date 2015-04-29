/**
 * Encode bits of Object consist of bit code and checked flag
 * Created at 2015. 4. 29
 * Updated at 2015. 4. 29
 */

'use strict';

angular.module('chris.util')
    .filter('encodeBits', function () {
      return function (bitObjects) {
        if (!bitObjects) {
          return null;
        }

        // Check array
        if (!bitObjects.hasOwnProperty('length')) {
          return null;
        }

        return bitObjects.reduce(function (prevVal, val) {
          return prevVal | (val.checked ? val.code : 0);
        }, 0);
      };
    });