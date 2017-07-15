'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'http-proxy-middleware']
});
var config = require('../gulp.json');

// gulp.task('server:json', function() {
//     $.jsonSrv.start({
//         data: './db.json',
//         baseUrl: '/api',
//         port: config.jsonPort
//     });
// });

// gulp.task('server:http', ['server:json'], function() {

// json-server --watch db.json --port 7001
gulp.task('server:http', function() {
    $.connect.server({
        port: config.port,
        root: config.path.dist,
        middleware: function(connect, opt) {
            return [
                $.httpProxyMiddleware('/api', {
                    target: 'http://0.0.0.0:'+config.jsonPort+'/api',
                    changeOrigin: true,
                    proxyTable: {
                        '/mail_messages': 'http://0.0.0.0:'+config.jsonPort+'/mail_messages'
                    }
                })
            ];
        }
    });
});


// 'use strict';
// var gulp = require('gulp');
// var paths = gulp.paths;
// var $ = require('gulp-load-plugins')({
//     pattern: ['gulp-*', 'http-proxy-middleware']
// });
// gulp.task('server:json', function() {
//     $.jsonSrv.start({
//         baseUrl: '/api',
//         port: 3001
//     });
// });
// gulp.task('server:http', ['server:json'], function() {
//     $.connect.server({
//         port: 3002,
//         root: paths.dist,
//         middleware: function(connect, opt) {
//             return [
//                 $.httpProxyMiddleware('/api', {
//                     target: 'http://172.16.2.245:3000',
//                     changeOrigin: true,
//                     proxyTable: {
//                         '/bills': 'http://0.0.0.0:3001/api/bills'
//                     }
//                 })
//             ];
//         }
//     });
// });