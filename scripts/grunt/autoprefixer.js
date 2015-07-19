module.exports = {
    // prefix the specified file
    single_file: {
      options: {
        // Target-specific options go here.
      },
      src: '<%= path.dest %>css/app.css',
      dest: '<%= path.dest %>css/app.css'
    }
};
