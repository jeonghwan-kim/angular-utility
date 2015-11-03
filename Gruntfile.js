'use strict';


module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        singleRun: true,
      },
      continuous: {
        background: true,
        singleRun: false
      }
    },

    watch: {
      karma: {
        files: ['src/**/*.js'],
        tasks: ['karma:continuous:run']
      }
    }

  });

  grunt.registerTask('unit-test', [
    'karma:continuous:start',
    'watch:karma'
  ]);

  grunt.registerTask('default', [
    'karma:unit'
  ]);

};