var gulp = require('gulp');
var notify = require('gulp-notify');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var htmlhint = require("gulp-htmlhint");

gulp.task('jscs', function() {
  gulp.src('script.js')
  .pipe(jscs())
  .pipe(notify({
    title: 'JSCS',
      message: 'JSCS Passed. Let it fly!'
  }));
});

gulp.task('lint', function() {
  gulp.src('*.js')
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'))
  .pipe(notify({
      title: 'JSHint',
      message: 'JSHint Passed. Let it fly!',
  }));
});

gulp.task('html', function () {
  gulp.src("index.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter());
});
