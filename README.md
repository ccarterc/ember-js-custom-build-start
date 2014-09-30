ember js starter package with custom Grunt build
===========

Everything past this section is the boilerplate starter kid verbiage.  Here is the meat and potatoes of the custom build set up.

1.  In order to be able to build the application you need to have node.js, npm, and grunt-cli installed:
  a. sudo apt-get install node
  b. sudo ln -s `which nodejs` /usr/local/bin/node (if node -v does not work)
  c. sudo apt-get install npm
  d. sudo npm install -g grunt-cli (this installs all the packages listed in package.json)
  e. npm install (at project root - if node_modules folder is there, then delete it before running)
2.  You should have grunt installed now.  So type: "grunt watch" in order to have the dev build occur on every file change.
    Type "grunt dev" to do a dev build, and "grunt prod" for a production build.
3.  You can see what each build process entails by checking out Gruntfile.js
4.  Templates folder is where the handlebards templates go.  The build process will compile them and convert them into js.

All builds should put build results in the "dist" folder.  The dist folder can then be moved into any other location as needed.

You can customize the specific tasks by going into the task folder.  Each task module has its own specific documentation.  These are listed in the package.json.

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



