module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	},
	minify: {
	    expand: true,
	    cwd: 'css/',
	    src: ['*.css', '!*.min.css'],
	    dest: 'dist/css/',
	    ext: '.min.css',
	    extDot: 'last'
	}
};
