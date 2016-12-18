var gulp          = require('gulp');

var sass          = require('gulp-sass');

var browserSync   = require('browser-sync').create();


gulp.task('sass', function () {
  return gulp.src('assets/sass/*.sass') // Get source files with gulp.src
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('assets/css')) // Outputs the file in the destination folder
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', ['browserSync', 'sass'],  function(){
  gulp.watch('assets/sass/*.sass', ['sass']);
  // Other watchers
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
