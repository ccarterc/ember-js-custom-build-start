module.exports = {
    compile: {
        options: {
            templateName: function(sourceFile) {
                return sourceFile.replace(/templates\//, '');
            }
        },
        files: {
            "dist/js/templates.js": "templates/**/*.hbs"
        }
    }
};
