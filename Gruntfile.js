function config(name){
	return require('./tasks/' + name + '.js');
}

module.exports = function(grunt){
	//set up configs
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: config('concat'),
		emberTemplates: config('emberTemplates'),
		uglify: config('uglify'),
		cssmin: config('cssmin'),
		server: config('server'),
		copy: config('copy'),
		clean: config('clean'),
		watch: {
			files: ['templates/**/*.hbs', 'templates/**/**/*.hbs', 'js/**/*.js', 'css/**/*.css', 'tests/**/*.js', 'index.html'],
			tasks: ['emberTemplates', 'concat', 'cssmin', 'copy', 'changeIndexDev']
		}
	});

	//set up tasks.  These are special npm modules designed to work with grunt.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	//set up custom tasks.
	grunt.registerTask('changeIndexDev', 'my dev task', function(){
		var fs = require('fs');
		var path = require('path');

		var filePath = path.join(__dirname, '/dist/index.html');
		var fileContents = grunt.file.read(filePath);

		if(fileContents.indexOf('<!-- PRODUCTION -->') !== -1){
			grunt.log.error('Changing index.html over to dev resources');
			fileContents = fileContents.replace(/<!-- PRODUCTION -->/g, '<!-- PRODUCTION');
			fileContents = fileContents.replace(/<!-- \/PRODUCTION -->/g, '/PRODUCTION -->');
			fileContents = fileContents.replace(/<!-- DEV/g, '<!-- DEV -->');
			fileContents = fileContents.replace(/\/DEV -->/g, '<!-- /DEV -->');
			grunt.file.write(filePath, fileContents);
		}
	});
	grunt.registerTask('changeIndexProd', 'my prod task', function(){
		var fs = require('fs');
		var path = require('path');

		var filePath = path.join(__dirname, '/dist/index.html');
		var fileContents = grunt.file.read(filePath);

		if(fileContents.indexOf('<!-- PRODUCTION -->') === -1){
			grunt.log.error('Changing index.html over to prod resources');
			fileContents = fileContents.replace(/<!-- DEV -->/g, '<!-- DEV');
			fileContents = fileContents.replace(/<!-- \/DEV -->/g, '/DEV -->');
			fileContents = fileContents.replace(/<!-- PRODUCTION/g, '<!-- PRODUCTION -->');
			fileContents = fileContents.replace(/\/PRODUCTION -->/g, '<!-- /PRODUCTION -->');
			grunt.file.write(filePath, fileContents);
		}
	});

	//dont forget to change to min.js files in index.html with prod build
	//you can uncomment out the lib folder inside the uglify task if you need to build min and map files for lib folder
	grunt.registerTask('prod', ['emberTemplates', 'concat', 'uglify', 'cssmin', 'copy', 'changeIndexProd']);
	grunt.registerTask('dev', ['clean', 'emberTemplates', 'concat', 'cssmin', 'copy', 'changeIndexDev']);

	grunt.registerTask('default', ['watch']);
}