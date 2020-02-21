const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style(){
  //1. where is the scss file
  return gulp.src('./scss/**/*.scss')
  //2. pass through sass compiler
  .pipe(sass())
  //3. where do I save the compiled css
  .pipe(gulp.dest('./css'))
  //stream changes to all browsers
  .pipe(browserSync.stream());
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', {ignoreInitial: false}, style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
