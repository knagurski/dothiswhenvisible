var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('js', function(){
  return gulp.src('./src/jquery.dothiswhenvisible.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js']);
gulp.task('watch', ['default'], function(){
  return gulp.watch('./src/**/*', ['default']);
});
