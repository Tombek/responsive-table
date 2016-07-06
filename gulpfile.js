// Loading project info
var p                   = require('./package.json');

console.log("########################################");
console.log("## " + p.name + " - " + p.version);
console.log("## " + p.description);
console.log("########################################");
console.log("");

console.time("Loading core plugins in"); //start measuring
/**
 * Require
 */

var gulp                = require('gulp');
var rename              = require('gulp-rename');

console.timeEnd("Loading core plugins in"); //end measuring
console.log("");

/**
 * Config
 */

var path = {
  src:  'src/',
  dist: 'lib/'
};

/**
 * SCSS/CSS
 */

gulp.task('css', function() {
  console.time("Loading css plugins in");

  var autoprefixer        = require('gulp-autoprefixer');
  var cssnano             = require('gulp-cssnano');

  console.log("");
  console.timeEnd("Loading css plugins in");
  console.log("");

  gulp.src(path.src + '*.css')
    // Autoprefix css file
    .pipe(autoprefixer('last 2 versions', '> 1%', 'Firefox ESR', 'Opera 12.1', 'ie 8'))
    // Add min suffix if in dist mode
    .pipe(rename({ suffix: '.min' }))
    // Minify all the things
    .pipe(cssnano())
    // Output it in dist folder
    .pipe(gulp.dest(path.dist));
});

gulp.task('js', function () {
  console.time("Loading js plugins in");

  var uglify = require('gulp-uglify');

  console.log("");
  console.timeEnd("Loading js plugins in");
  console.log("");

  return gulp.src([path.src + '*.js'])
    // Uglify if in dist mode
    .pipe(uglify())
    // Add min suffix if in dist mode
    .pipe(rename({ suffix: '.min' }))
    // Output it in dist folder
    .pipe(gulp.dest(path.dist));
});

/**
 * Global tasks
 */
gulp.task('default', ['css', 'js']);

gulp.task('clean', function(cb){
  var del = require('del');
  del([ path.dist + '**/*', ], cb);
});
