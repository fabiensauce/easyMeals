'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-karma');

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: 'app'
    },

    watch: {
      styles: {
        files: ['<%= yeoman.app %>/css/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
		      '<%= yeoman.app %>/index.html',
          '<%= yeoman.app %>/partials/{,*//*}*.{html,jade}',
          '{.tmp,<%= yeoman.app %>}/css/{,*//*}*.css',
          '{.tmp,<%= yeoman.app %>}/js/{,*//*}*.js',
          '<%= yeoman.app %>/img/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',
        ],
      
        options: {
          livereload: true
        }
      },
      express: {
        files: [
          'server/server.js',
          'server/lib/**/*.{js,json}'
        ],
        tasks: ['newer:jshint:server', 'express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },

    express: {
      options: {
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: 'server/server.js',
          debug: true
        }
      }
    },

    karma: {
      unit: {
        configFile: 'tests/karma.conf.js',
        autoWatch: true
      }
    },

    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },


    // Empties folders to start fresh
    clean: {
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ]
    },


    // Copies remaining files to places other tasks can use
    copy: {
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/css',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    }


  });


// Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 500);
  });

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });

  grunt.registerTask('serve', function (target) {

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'express:dev',
      'open',
      'watch'
    ]);
  });
};
