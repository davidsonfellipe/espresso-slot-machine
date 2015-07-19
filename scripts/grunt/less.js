module.exports = {
  dist: {
    options: {
      compress: false
    },

    files: [{
      expand: true,
      cwd: '<%= path.src %>less',
      src: ['app.less'],
      dest: '<%= path.dest %>css',
      ext: '.css'
    }]
  }
};
