module.exports = function(grunt){
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: ['Gruntfile.js', 'test/**/*.js'],
      tasks: ['jshint']
    },
    webdriver: {
      test: {
        configFile: './test/wdio.conf.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['jshint', 'webdriver']);

};
