'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['run-sequence']
});
var config = require('../gulp.json');

gulp.task('assets', function(){
    return gulp.src(config.path.assets+'**/*.*')
        .pipe(gulp.dest(config.path.dist));
});

gulp.task('assets:build', function(callback){
    $.runSequence(
        'assets',
        callback
    );
});
