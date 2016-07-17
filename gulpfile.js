var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var del = require('del');
var tslint = require('gulp-tslint');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var util = require('gulp-util');


// ## THINGS TO RUN FOR ALL BUILDS ## //

gulp.task('ts-lint', function(){
    return gulp.src(["src/**/*.ts", "public/scripts/*.ts"])
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report({
            emitError: false,
            summarizeFailureOutput: true
        }))
});


// ## THINGS TO RUN FOR DEV BUILDS ## //

gulp.task('clean-dev', function () {
    return del(['dist/dev']);
});

gulp.task('build-js-dev', ['ts-lint', 'clean-dev'], function () {
    return gulp.src(["src/**/*.ts", "public/scripts/**.ts]", "!public/scripts/lib/*.d.ts"])
        .pipe(typescript())
        .pipe(gulp.dest('dist/dev/verbose'))
        .pipe(concat('KSPMT.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/dev'));
});

gulp.task('build-all-dev', ['ts-lint'], function(){
    util.log(util.colors.green("All build tasks finished. Build successful!"));
});


// ## THINGS TO RUN FOR PROD BUILDS ## //

gulp.task('clean-prod', function () {
    return del(['dist/prod']);
});

gulp.task('build-js-prod', ['ts-lint', 'clean-prod'], function () {
    return gulp.src(["src/**/*.ts", "public/scripts/**.ts]", "!public/scripts/lib/*.d.ts"])
        .pipe(typescript({
            removeComments: true
        }))
        .pipe(concat('KSPMT.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/prod'));
});

gulp.task('build-all-prod', ['ts-lint'], function(){
    util.log(util.colors.green("All build tasks finished. Build successful!"));
});


// TODO: Probably going to point to dev build...
// gulp.task('default', ['build-all'], function(){
//
// });
