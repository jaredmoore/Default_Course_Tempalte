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

### Configuring the Website:

Configuration for the website is accomplished by customizing the information in `src/data`.  

`data.yml`: Contains the bulk of information to customize about the website.  Each parameter is mapped into the appropriate pages using the double handlebar templating syntax {{}}.  

###### Announcements:

Announcements are handled by adding an item to the `announcement:` parameter in the `data.yml` file.  

###### Assignments:

Assignments require a bit of additional work beyond that of announcements.  The file `src/data/assignments.json` define the basic information for each assignment.  Adding a new item to the json file will create a new assignment page and an entry under the Assignments div in the main page.  

Long form descriptions for assignments are added by creating a new markdown file in `src/data/assignments_md/`.  The `markdown-path` metadata tag needs to be updated with the appropriate filename in `src/data/assignments.json`.  If configured correctly, the Grunt build process will go through each assignment specified by the json file and build both an HTML page and insert a link automatically on the main page.

### Lectures:

Currently a planned expansion.  Functionality likely similar to assignments in terms of adding to the menu bar, but likely a simpler setup as individual pages may/may not need as much detail.

### Building the Site:

Building the static pages is accomplished by calling:

```grunt default```

Adding the `-verbose` tag will provide more insight about the build process and allow for troubleshooting any issues.

```grunt default --verbose```

Created files will be placed in the `dist` directory, including copies of the static css files.  

*Note: For now, favicon.ico needs to be moved to the root directory manually in order to work properly on a website.*

