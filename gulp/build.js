'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['run-sequence']
});

gulp.task('build', function(callback){
    $.runSequence(
        'clean',
        'templates:build',
        'scripts:build',
        'styles:build',
        'assets:build',
        callback
    );
});
