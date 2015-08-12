var gulp = require('gulp');
var notify = require('gulp-notify');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var uncss = require('gulp-uncss');
// var csso = require('gulp-csso');
var htmlv = require('gulp-html-validator');
var htmlhint = require("gulp-htmlhint");

gulp.task('default', function() {
  return gulp.src('*.css')
    .pipe(uncss({
      html: ['index.html']
    }))
    // .pipe(csso())
    .pipe(gulp.dest('./'))
    .pipe(notify({
      title: 'default',
        message: 'uncss and minified success!',
    }));
});

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

gulp.task('valid', function () {
  gulp.src('index.html')
    .pipe(htmlv())
    .pipe(htmlv.reporter());
});

gulp.task('html', function () {
  gulp.src("index.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter());
});
