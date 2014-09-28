module.exports = {
    main: {
    	files: [
    	{
    		src: 'images/*',
    		dest: 'dist/'
    	},
    	{
    		src: 'fonts/*',
    		dest: 'dist/'
    	},
        {
            src: 'tests/*',
            dest: 'dist/'
        },
        {
        	src: 'index.html',
        	dest: 'dist/index.html'
        },
        {
            src: 'libs/*',
            dest: 'dist/'
        }
    	]
    }
};
