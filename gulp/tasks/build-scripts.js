//https://www.npmjs.com/package/gulp-typescript
module.exports = function (gulp, plugins, paths) {
    var tsProject = plugins.typescript.createProject('tsconfig.json');

    return function () {
       var tsResult = tsProject.src()
                      .pipe(plugins.typescript(tsProject));
 
        return tsResult.js.pipe(gulp.dest(paths.build));
    };
};