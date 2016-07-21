var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var del = require('del');
var jade = require('gulp-jade');
var tslint = require('gulp-tslint');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var util = require('gulp-util');


// ## THINGS TO RUN FOR ALL BUILDS ## //

gulp.task('ts-lint', function(){
    return gulp.src(["src/**/*.ts"])
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

gulp.task('build-js-src-dev', ['ts-lint'], function () {
    return gulp.src(["src/**/*.ts"])
        .pipe(typescript({
            target: 'ES5'
        }))
        .pipe(gulp.dest('dist/dev/verbose'))
        .pipe(concat('KSPMT.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/dev'));
});

gulp.task('build-js-scripts-dev', ['ts-lint'], function () {
    return gulp.src(["public/scripts/**/*.ts]", "!public/scripts/lib/**/*.d.ts"])
        .pipe(typescript({
            target: 'ES5'
        }))
        .pipe(gulp.dest('dist/dev/verbose/scripts'))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/dev'));
});

gulp.task('build-css-dev', function () {
   return gulp.src(['src/public/stylesheets/*.css'])
       .pipe(autoprefixer())
       .pipe(gulp.dest('dist/dev/verbose/content/styles'))
       .pipe(cleancss())
       .pipe(concat('site.css'))
       .pipe(gulp.dest('dist/dev'))
});

gulp.task('build-html-dev', function () {
    return gulp.src(['src/views/*.jade'])
        .pipe(jade())
        .pipe(gulp.dest('dist/dev/verbose/views'))
        .pipe(gulp.dest('dist/dev/views'))
});

gulp.task('build-all-dev', ['build-js-src-dev', 'build-js-scripts-dev', 'build-css-dev', 'build-html-dev'], function(){
    util.log(util.colors.green("Build successful! All tasks successfully completed."));
});

gulp.task('clean-and-build-dev', ['clean-dev'], function () {
   gulp.start('build-all-dev');
});


// ## THINGS TO RUN FOR PROD BUILDS ## //

gulp.task('clean-prod', function () {
    return del(['dist/prod']);
});

gulp.task('build-js-prod', ['ts-lint', 'clean-prod'], function () {
    return gulp.src(["src/**/*.ts", "public/scripts/**.ts]", "!public/scripts/lib/*.d.ts"])
        .pipe(typescript({
            removeComments: true,
            target: 'ES5'
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
