
var gulp = require('gulp'),
  browserSync = require('browser-sync'), 
  autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function() {
  return gulp.src('css/*.css')
  .pipe(autoprefixer(['last 15 versions'], {cascade: true}))
  .pipe(gulp.dest('css')) 
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'autoprefixer'], function() {
  gulp.watch('css/**/*.css', ['autoprefixer']); 
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['watch']);

