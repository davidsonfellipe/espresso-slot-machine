module.exports = function(grunt) {

  var path = require('path');

  // load-grunt-config includes load-grunt-tasks
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'scripts/grunt'),
    data: {
      path: {
        src: 'app/src/',
        dest: 'app/build/'
      }
    }
  });
};
