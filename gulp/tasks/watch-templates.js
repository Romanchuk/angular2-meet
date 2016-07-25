//https://github.com/floatdrop/gulp-watch/blob/master/docs/readme.md
module.exports = function (gulp, plugins, paths) {
    return function () {
        plugins.watch(`${paths.src}/**/*.html`, plugins.batch(function (events, done) {
            gulp.start('build-templates', done);
        }));
    };
};