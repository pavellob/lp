'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'run-sequence']
});
var config = require('../gulp.json');
var argv = require('yargs').argv;

gulp.task('styles', function(){
    var isSourcemap = Boolean(argv.sourcemap || argv.s);
    var isNotify = Boolean(argv.notify || argv.n);
    return gulp.src([config.path.src+'styles/index.scss'])
        .pipe($.if(isSourcemap, $.sourcemaps.init()))
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.concat('styles.css'))
        .pipe($.if(isSourcemap, $.sourcemaps.write()))
        .pipe(gulp.dest(config.path.dist+'styles/'))
        .pipe($.if(isNotify, $.notify({
            message: 'Styles task complete'
        })));
});

gulp.task('styles:optimize', function(){
    return  gulp.src(config.path.dist+'styles/styles.css')
        .pipe($.groupCssMediaQueries())
        .pipe($.autoprefixer('last 3 version'))
        .pipe($.csso())
        .pipe(gulp.dest(config.path.dist+'styles/'));
});

gulp.task('styles:build', function(callback){
    $.runSequence(
        'styles',
        'styles:optimize',
        callback
    );
});
