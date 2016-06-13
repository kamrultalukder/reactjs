var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));

    /*
    //multiple files
     gulp.task('default', function() {
     // we define our input files, which we want to have
     // bundled:
     var files = [
     './app/main-a.js',
     './app/main-b.js'
     ];
     // map them to our stream function
     var tasks = files.map(function(entry) {
     return browserify({ entries: [entry] })
     .bundle()
     .pipe(source(entry))
     // rename them to have "bundle as postfix"
     .pipe(rename({
     extname: '.bundle.js'
     }))
     .pipe(gulp.dest('./dist'));
     });
     // create a merged stream
     return es.merge.apply(null, tasks);
     });
     */
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);


