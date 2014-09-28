module.exports = {
    options: {
	    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
	    sourceMap: true,
	    /*sourceMapName: 'dist/js/sourcemap.map'*/
	    sourceMapName: function(path){
	    	return path.replace(".min.js", ".map");
	    }
	},
	dist: {
	    files: [{
	        'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
	    },
	    {
	    	'dist/js/templates.min.js': ['dist/js/templates.js']
	    },
	    {
	    	expand: true,
		    cwd: 'libs/',
		    src: ['*.js', '!*.min.js'],
		    dest: 'libs/',
		    ext: '.min.js',
		    extDot: 'last'
	    }]
	}
};
