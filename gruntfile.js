module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/gmaps.js', 'js/instafeed.min.js', 'js/responsive-nav.js', 'js/skrollr.min.js','js/skrollr.menu.min.js','js/custom.js'],
        dest: 'js/main.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default',['concat','uglify']);

};
