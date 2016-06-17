module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/<%= pkg.name %>.min.css': 'css/app.scss'
        }
      }
    },

    autoprefixer:{
      dist:{
        options: {
          map: true
        },
        files:{
          'css/<%= pkg.name %>.min.css':'css/<%= pkg.name %>.min.css'
        }
      }
    },

    watch: {
        grunt: { files: ['Gruntfile.js'] },

        sass: {
            files: 'css/**/*.scss',
            tasks: ['sass', 'autoprefixer']
        }
    }

  });


  // load
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register
  grunt.registerTask('default', ['watch']);

};