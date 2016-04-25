module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/'
        }
      }
    },
    
    assemble: {
      options: {
        layout: 'page.hbs',
        layoutdir: './src/build/layouts/',
        partials: './src/build/partials/**/*.hbs'
      },
      posts: {
        files: [{
          cwd: './src/content/',
          dest: './dist/',
          expand: true,
          src: ['**/*.hbs', '!_pages/**/*.hbs']
        }, {
          cwd: './src/content/_pages/',
          dest: './dist/',
          expand: true,
          src: '**/*.hbs'
        }]
      }
    }
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-assemble');

  /* grunt tasks */
  grunt.registerTask('default', ['assemble','connect']);

};

