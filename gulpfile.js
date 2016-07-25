'use strict';

var gulp     = require('gulp'),
    plugins  = require('gulp-load-plugins')(),
    seq = require('run-sequence'),
    paths    = require('./gulp/paths'),
    taskPath = './gulp/tasks/',
    // async readdir does not identify task names
    taskList = require('fs').readdirSync(taskPath),
    clrExt = function(name){ return name.slice(0,-3)};

taskList.forEach(function (taskFile) {
    gulp.task(clrExt(taskFile), require(taskPath + taskFile)(gulp, plugins, paths));
});

gulp.task('build', function(c){
    seq('clean', ['build-scripts', 'build-templates'], c);
});

gulp.task('watch', ['watch-templates', 'watch-scripts']);