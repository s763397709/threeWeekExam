var gulp = require('gulp');
var server = require('gulp-webserver')

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 9090,
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                next();
            }
        }))
})

gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss');
})

gulp.task('default', ['server', 'watch']);