module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },
    watch: {
      files: ['Gruntfile.js'],
      tasks: ['jshint']
    },
    webdriver: {
      helloWorld: {
        tests: 'test/**/*'
      },
      options: {
        desiredCapabilities: {
          browserName: 'chrome'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['jshint', 'webdriver']);

};
