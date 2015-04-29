/**
 * Decode bits
 * Created at 2015. 4. 29
 * Updated at 2015. 4. 29
 */

'use strict';

angular.module('chris.util')
    .filter('decodeBits', function () {
      return function (code, bitObjects, type) {
        if (!bitObjects || !code) {
          return;
        }

        switch (type) {

          case 'string':
            var names = [];
            bitObjects.forEach(function (val) {
              if (val.code & code) {
                names.push(val.name);
              }
            });
            return names.join(', ');

          case 'object':
          default:
            return bitObjects.forEach(function (item) {
              item.checked = (item.code & code) > 0 ? true : false;
            });
        }
      };

    });