/* jshint varstmt: false, esnext: false */
var gulp = require('gulp');
var cache = require('gulp-cached');

var targets = [
  //{ description: 'FONTS', src: './fonts/*', dest: './dist/fonts' },
  { description: 'INDEX', src: './src/demo/index.html', dest: './dist' }
];

function copy(options) {
  function run(target) {
    gulp.src(target.src)
      .pipe(cache(target.description))
      .pipe(gulp.dest(target.dest));
  }

  function watch(target) {
    gulp.watch(target.src, function() { run(target); });
  }

  targets.forEach(run);

  if (options.shouldWatch) {
    targets.forEach(watch);
  }
}

module.exports = {
  build: function() { return copy({ shouldWatch: false }); },
  watch: function() { return copy({ shouldWatch: true }); }
};
