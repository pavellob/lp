'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'run-sequence']
});
var config = require('../gulp.json');
var argv = require('yargs').argv;

gulp.task('scripts:dev', function(){
    var isSourcemap = Boolean(argv.sourcemap || argv.s);
    var isNotify = Boolean(argv.notify || argv.n);

    return gulp.src([config.path.tmp+'scripts/bower.js', config.path.src+'scripts/**/*.js'])
        .pipe($.if(isSourcemap, $.sourcemaps.init()))
        .pipe($.concat('scripts.js'))
        .pipe($.if(isSourcemap, $.sourcemaps.write()))
        .pipe(gulp.dest(config.path.dist+'scripts/'))
        .pipe($.if(isNotify, $.notify({
            message: 'Scripts task complete'
        })));
});

gulp.task('scripts:bower', function(){
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.js', {restore: true}))
        .pipe($.concat('bower.js'))
        .pipe(gulp.dest(config.path.tmp+'scripts/'));
});

gulp.task('scripts:optimize', function(){
    return  gulp.src(config.path.dist+'scripts/scripts.js')
        .pipe($.uglify())
        .pipe(gulp.dest(config.path.dist+'scripts/'));
})

gulp.task('scripts', function(callback){
    $.runSequence(
        'scripts:bower',
        'scripts:dev',
        callback
    );
});

gulp.task('scripts:build', function(callback){
    $.runSequence(
        'scripts',
        'scripts:optimize',
        callback
    );
});
