const gulp = require('gulp');
const gulp_sass = require('gulp-sass');
const gulp_useref = require('gulp-useref');
const gulp_uglify = require('gulp-uglify');
const gulp_if = require('gulp-if');
const gulp_cssnano = require('gulp-cssnano');
const gulp_imagemin = require('gulp-imagemin');
const gulp_cache = require('gulp-cache');
const browserSync = require('browser-sync').create();
const del = require('del');

function clean() {
  return del('dist');
}

function clean_cache(cb) {
  return gulp_cache.clearAll(cb);
}

function compile_styles() {
  return gulp.src('app/scss/**/*.+(scss|sass)')
    .pipe(gulp_sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

function optimize_code() {
  return gulp.src('app/*.html')
    .pipe(gulp_useref())
    .pipe(gulp_if('*.js', gulp_uglify()))
    .pipe(gulp_if('*.css', gulp_cssnano()))
    .pipe(gulp.dest('dist'));
}

function optimize_assets() {
  return gulp.src('app/assets/images/**/*.+(jpg|png|gif|svg|bmp)')
    .pipe(gulp_cache(gulp_imagemin()))
    .pipe(gulp.dest('dist/assets/images'));
}

function copy_assets() {
  return gulp.src('app/assets/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  }, compileStyles);

  gulp.watch('app/scss/**/*.+(scss|sass)', compile_styles);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
}

exports.watch = watch;
exports.build = gulp.series(
  clean,
  gulp.parallel(optimize_code, optimize_assets, copy_assets)
);
