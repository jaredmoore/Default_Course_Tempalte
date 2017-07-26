module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    assignments: grunt.file.readJSON('src/data/assignments.json'),
    projects: grunt.file.readJSON('src/data/projects.json'),
    
    cfg: {
      base_web_addr: 'http://www.cis.gvsu.edu/~moorejar',
      dest: '/Users/moorejar/Dropbox/Faculty_Position/Course_Materials/Course_Websites/',
      dist: '/Default_Template/'
    },

    assemble: {
      options: {
        assets: '.<%= cfg.dist %>static',
        assets_dir: 'static',
        course_link: '<%= cfg.base_web_addr %><%= cfg.dist %>',
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
          'dist<%= cfg.dist %>': ['!*']
        }
      },
      assigned_project: {
        options: {
          layout: "project.hbs",
          pages: '<%= projects.project %>'
        },
        files: {
          'dist<%= cfg.dist %>': ['!*']
        }
      },
      pages: {
        files: [{
          cwd: './src/content/',
          dest: './dist<%= cfg.dist %>',
          expand: true,
          src: ['**/*.hbs', '!_pages/**/*.hbs']
        }, {
          cwd: './src/content/_pages/',
          dest: './dist<%= cfg.dist %>',
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
          dest: './dist<%= cfg.dist %>static/',
          /*filter: 'isFile',*/
          cwd: './src/static/'
        }]
      },
      'migration': {
        files: [{
          cwd: './dist',  // set working folder / root to copy
          src: ['**/*'],           // copy all files and subfolders
          dest: '<%= cfg.dest %>',    // destination folder
          expand: true           // required when using cwd
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

