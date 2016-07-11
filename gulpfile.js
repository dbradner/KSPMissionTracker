var gulp = require('gulp');
// var gulpLoadPlugins = require('gulp-load-plugins');
// var plugins = gulpLoadPlugins();
var tslint = require('gulp-tslint');
var util = require('gulp-util');

gulp.task('ts-lint', function(){
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report({
            emitError: false
        }))
});

gulp.task('build', ['ts-lint'], function(){
    util.log(util.colors.green("All build tasks finished. Build successful!"));
});
