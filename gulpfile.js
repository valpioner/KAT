'use strict';

var gulp            = require('gulp'),
    browserSync     = require('browser-sync').create('My server'), // auto browser sync
    reload          = browserSync.reload, 
    //concat          = require('gulp-concat'),
    plumber         = require('gulp-plumber'), // continue task run on pipe error
    uglify          = require('gulp-uglify'), // minifies
    rename          = require('gulp-rename'),
    autoprefixer    = require('gulp-autoprefixer'), // adds vendor prefixes 
    less            = require('gulp-less'),
    del             = require('del'), // delete files/folders using globs    
    ngAnnotate      = require('gulp-ng-annotate'),
    runSequence     = require('run-sequence');

    
gulp.task('default', ['serve-dev']); 

gulp.task('serve-dev', function (cb) {
    return runSequence('build', 'watch', 'startServer', cb);
});

gulp.task('startServer', function () {
    browserSync.init({
        server:{
            baseDir: 'dist'
        },
        port: 3002,
        ui:{
            port: 8082
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.html', ['html']); 
    gulp.watch('src/**/*.js', ['js']); 
    gulp.watch('src/assets/less/**/*.less', ['less']);
});

gulp.task('js', function () {
    return gulp.src(['src/app/**/*.js', '!src/app/**/*.min.js'])
    //.pipe(plumber()) // always first 
    .pipe(ngAnnotate({add: true, single_quotes: true}))
    //.pipe(rename(({suffix:'.min'})))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/app'))
    .pipe(reload({stream:true}));
});

gulp.task('html', function (){    
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream:true}));   // always last  
});

gulp.task('less', function(){
    gulp.src('src/assets/less/main.less')
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
    })) 
    .pipe(less())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.reload({stream: true}));
});

// build tasks

gulp.task('  build:cleanfolder', function () {
    return del('dist/**/*');
});

gulp.task('  build:copy', function () {    
    return gulp.src(['src/**/*', '!src/app/**/*.js'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('  build:copy_libs', function (){       
    return gulp.src([
        'src/assets/bower_components/angular/angular.js',
        'src/assets/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'src/assets/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
    ])
    .pipe(gulp.dest('dist/libs/'));
});

gulp.task('  build:remove', function(){
    return del([
        'dist/assets/less',
        'dist/assets/bower_components',
    ]);
});

gulp.task('build', function (cb) {
    return runSequence(
        '  build:cleanfolder', 
        '  build:copy', 
        '  build:copy_libs', 
        '  build:remove', 
        'js', 
        cb);
});

// end build tasks