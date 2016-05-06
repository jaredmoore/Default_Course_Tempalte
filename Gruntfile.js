module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    assignments: grunt.file.readJSON('src/data/assignments.json'),

    assemble: {
      options: {
        assets: './static',
        data: './src/data/*.yml',
        layout: 'page.hbs',
        layoutdir: './src/build/layouts/',
        partials: './src/build/partials/**/*.hbs'
      },
      assigned_work: {
        options: {
          layout: "assignment.hbs",
          pages: '<%= assignments.assigns %>'
        },
        files: {
          'dist/': ['!*']
        }
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
    },

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/'
        }
      }
    },

    copy: {
      'static-assets': {
        files: [{
          expand: true,
          src: [
            '**/*'
          ],
          dest: './dist/static/',
          /*filter: 'isFile',*/
          cwd: 'src/static/'
        }]
      }
    }
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-assemble');

  /* grunt tasks */
  grunt.registerTask('default', ['assemble','copy','connect']);
};

