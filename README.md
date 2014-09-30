ember js starter package with custom Grunt build overview
===========

Here is the meat and potatoes of the custom build set up.

1.  In order to be able to build the application you need to have node.js, npm, and grunt-cli installed:
  1. ````sudo apt-get install node````
  2. ````sudo ln -s `which nodejs` /usr/local/bin/node```` (if ````node -v```` does not work)
  3. ````sudo apt-get install npm````
  4. ````sudo npm install -g grunt-cli```` (this installs all the packages listed in package.json)
  5. ````npm install```` (at project root - if node_modules folder is there, then delete it before running)
2.  You should have grunt installed now.  So type: ````grunt watch```` in order to have the dev build occur on every .js and .css file change.  You can customize the trigger in the Gruntfile.js or "tasks" folder.
Type: ````grunt dev```` to do a dev build, and ````grunt prod```` for a production build.
3.  You can see what each build process entails by checking out Gruntfile.js
4.  Templates folder is where the handlebards templates go.  The build process will compile them and convert them into js.

All builds should put build results in the "dist" folder.  The dist folder can then be moved into any other location as needed.

You can customize the specific tasks by going into the task folder.  Each task module has its own specific documentation.  These are listed in the package.json.

features
==========

*  All resources get defined in the index.html.  There are comments for production and dev resources.  The idea is that during dev build you might want prettified .js, but during prod you might want minified files.
*  Basic dev build consists of these tasks: 'clean', 'emberTemplates', 'concat', 'cssmin', 'copy', 'changeIndexDev'
  *  remove files from dist directory
  *  compile the handlebars templates into .js
  *  concatenate all the files in the js folder
  *  minify css and generate source maps
  *  copy files from the "libs" and such folder into the dist folder
  *  changes the comments so that you can see both dev and prod resources in the .html
*  Basic prod build consists of these tasks: 'emberTemplates', 'concat', 'uglify', 'cssmin', 'copy', 'changeIndexProd'
  *  uglify minifies the .js files and generates source maps
*  All tasks are in the "tasks" folder and can be easily modified.


starter-kit
===========

A starter kit for Ember

Your Ember.js project is almost ready! Here's how to get started:

- Start writing your app in `js/app.js`.

- Describe your application HTML in `index.html`.

- During development, you can link to `js/libs/ember-*.js` to get the
  unminified version of Ember.js.

- Add CSS to `css/style.css`.

- Open `index.html` in your browser.

Tests
=====

This starter kit comes with an integration test sample, written for QUnit runner.

You can run the tests by opening the `index.html?test` page in your browser.

The test is located in the `tests/tests.js` file. You can see how such an
integration test should be written, using QUnit assertions and ember-testing helpers.

For more information about ember-testing package see [ember-testing](http://emberjs.com/guides/testing/integration/).

For more information about the QUnit testing framework, see [QUnit](http://qunitjs.com/).

Contact
====

[www.emberjs.com](http://www.emberjs.com)



