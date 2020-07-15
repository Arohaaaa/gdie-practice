const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
  gulp.src('./css/*.css')
    .pipe(autoprefixer({
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'], // 重要配置 详见下面
      cascade: false //  是否美化属性值
    }))
    .pipe(gulp.dest('dist'))
);
