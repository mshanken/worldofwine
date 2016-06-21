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

    concat: {
      options: {
         separator: ';'
      },
      dist: {
          src: [
              'js/jquery-2.1.0.min.js',
              'js/bootstrap.min.js',
              'js/scrollIt.min.js',
              'js/app.js'
          ],
          dest: 'js/wow-scripts.js'
        }
    },

    uglify: {
        options: {
          mangle: false,
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        js: {
            src:['js/wow-scripts.js'],
            dest: 'js/wow-scripts.min.js'
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
        },

        js: {
            files: 'js/app.js',
            tasks: ['concat', 'uglify']
        }
    }

  });


  // load
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register
  grunt.registerTask('default', ['watch']);

};