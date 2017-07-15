'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'run-sequence']
});
var config = require('../gulp.json');
var argv = require('yargs').argv;

// gulp.task('templates', function(){
//     var isNotify = Boolean(argv.notify || argv.n);

//     return gulp.src([config.path.src+'jade/pages/*.jade', '!'+config.path.src+'jade/pages/_*.jade'])
//         .pipe($.jade({
//             cache: true,
//             pretty: false,
//             doctype: 'html'
//         }))
//         .pipe(gulp.dest(config.path.dist))
//         .pipe($.if(isNotify, $.notify({
//             message: 'Templates task complete',
//             onLast: true
//         })));
// });

var jadeConfig = {
    cache: true,
    pretty: false,
    doctype: 'html'
}

gulp.task('templates:angular', function(){
    var isNotify = Boolean(argv.notify || argv.n);

    return gulp.src([config.path.src+'jade/angular/*.jade', config.path.src+'jade/angular/**/*.jade', '!'+config.path.src+'jade/angular/_*.jade', '!'+config.path.src+'jade/angular/**/_*.jade'])
        .pipe($.jade(jadeConfig))
        .pipe(gulp.dest(config.path.dist+'/templates'))
        .pipe($.if(isNotify, $.notify({
            message: 'Templates:angular task complete',
            onLast: true
        })));
});

gulp.task('templates:pages', function(){
    var isNotify = Boolean(argv.notify || argv.n);

    return gulp.src([config.path.src+'jade/pages/*.jade', '!'+config.path.src+'jade/pages/_*.jade'])
        .pipe($.jade({
            cache: true,
            pretty: false,
            doctype: 'html'
        }))
        .pipe(gulp.dest(config.path.dist))
        .pipe($.if(isNotify, $.notify({
            message: 'Templates:pages task complete',
            onLast: true
        })));
});

gulp.task('templates:build', function(callback){
    $.runSequence(
        'templates:angular',
        'templates:pages',
        callback
    );
});
