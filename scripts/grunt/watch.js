module.exports = {
  scripts: {
      files: ['<%= path.src %>js/*.js',
              '<%= path.src %>less/*.less',
              '<%= path.src %>img/*'],
      tasks: ['less', 'concat', 'imagemin', 'autoprefixer'],
      options: {
          nospawn: true,
          debounceDelay: 250,
      }
  }
};
