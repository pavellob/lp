'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['del']
});
var config = require('../gulp.json');

gulp.task('clean', function() {
    return $.del([config.path.tmp, config.path.dist]);
});
