module.exports = function (gulp, plugins, paths) {
    return function () {
        return gulp.src(`${paths.src}/app/**/*.html`)
                   .pipe(gulp.dest(paths.build + '/src/app'));
    };
};