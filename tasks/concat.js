module.exports = {
    options: {
        separator: '\n'
    },
    dist: {
        src: ['js/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
    }
};
