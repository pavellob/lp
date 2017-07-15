'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../gulp.json');

gulp.task('watch', function() {
    // Assets
    gulp.watch(config.path.assets+'**/*.*', ['assets']);

    // Styles
    gulp.watch(config.path.src+'styles/**/*.scss', ['styles']);

    // Scripts
    gulp.watch(config.path.bower+'**/*.js', ['scripts:bower']);
    gulp.watch([config.path.src+'scripts/**/*.js', config.path.tmp+'scripts/*.js'], ['scripts:dev']);

    // Templates
    gulp.watch([config.path.src+'jade/**/*.jade', '!'+config.path.src+'jade/pages/**/*.jade'], ['templates:angular']);
    gulp.watch([config.path.src+'jade/**/*.jade', '!'+config.path.src+'jade/angular/**/*.jade'], ['templates:pages']);
});
