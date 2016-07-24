//https://www.npmjs.com/package/gulp-clean
module.exports = function (gulp, plugins, paths) {
    return function () {
        return gulp.src(paths.build, {read: false})
                        .pipe(plugins.clean());
    };
};