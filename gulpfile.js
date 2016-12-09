'use strict';

var gulp            = require('gulp'),
    browserSync     = require('browser-sync'), // auto browser sync
    reload          = browserSync.reload, 
    //concat = require('gulp-concat'),
    plumber         = require('gulp-plumber'), // continue task run on pipe error
    uglify          = require('gulp-uglify'), // minifies
    rename          = require('gulp-rename'),
    autoprefixer    = require('gulp-autoprefixer'), // adds vendor prefixes 
    less            = require('gulp-less'),
    del             = require('del'); // delete files/folders using globs    

gulp.task('scripts', function (){
    gulp.src(['src/js/**/*.js', '!src/js/**/*.min.js'])
    .pipe(plumber()) // always first 
    .pipe(rename(({suffix:'.min'})))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
    .pipe(reload({stream:true}));
});

gulp.task('watch', function (){
    gulp.watch('src/css/less/**/*.less', ['less']);
    gulp.watch('src/**/*.html', ['html']/*browserSync.reload*/);    
    gulp.watch('src/js/**/*.js', ['scripts']);    
});

gulp.task('html', function (){    
    gulp.src('src/**/*.html')
    .pipe(reload({stream:true}));   // always last  
});

gulp.task('less', function(){
    gulp.src('src/css/less/main.less')
    .pipe(less())
    .pipe(autoprefixer('last 5 versions')) 
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function (){
    browserSync({
        server:{
            baseDir: './src/'
        },
        notify: false
    });
});

// gulp.task('build:serve', function (){
//     browserSync({
//         server:{
//             baseDir: './build/'
//         },
//         notify: false
//     });
// });

//runs all async in same time
gulp.task('default', ['scripts', 'html', 'less', 'browser-sync', 'watch']); 


// build tasks

gulp.task('build:cleanfolder', function (cb){
    del([
        'build/**'
    ], cb);
});

gulp.task('build:copy', ['build:cleanfolder'], function (){
    return gulp.src('src/**/*/')
    .pipe(gulp.dest('build/'));
});

gulp.task('build:remove', ['build:copy'], function(cb){
    del([
        'build/scss/',
        'build/js/!(*.min.js)'
    ], cb);
});

gulp.task('build', ['build:copy', 'build:remove']);

// end build tasks