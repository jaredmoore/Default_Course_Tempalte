Default Course Website
======================

This is a project for a basic course website meant to be customized as needed through a parameter file and with any necessary content in the future.

### Initial Configuration Steps:
1. npm init
2. npm install grunt --save-dev
3. npm install grunt-contrib-connect --save-dev
4. vi Gruntfile.js (configure as needed.)
5. npm install grunt-assemble --save-dev
6. Configure directory structure
7. Configure Gruntfile.js for assemble

*Note: Source for Gruntfile.js and guide at: http://www.andismith.com/blog/2014/02/getting-started-with-assemble/*  
*Note: Use grunt-assemble and modify in Gruntfile.js accordingly.*  

### Building the Site:

Building the static pages is accomplished by calling:

```grunt default```

Adding the `-verbose` tag will provide more insight about the build process and allow for troubleshooting any issues.

```grunt default --verbose```

Created files will be placed in the `dist` directory, including copies of the static css files.  

*Note: For now, favicon.ico needs to be moved to the root directory manually in order to work properly on a website.*
