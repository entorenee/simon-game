var gulp = require('gulp');
var projectFolder = '../../../portfolio_site/projects/simon-game';

gulp.task('copy', function() {
  return gulp.src('./build/**/*')
             .pipe(gulp.dest(projectFolder))
});
