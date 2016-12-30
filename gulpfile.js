'use strict';

var gulp            = require('gulp'),
    browserSync     = require('browser-sync').create('My server'), // auto browser sync
    reload          = browserSync.reload, 
    //concat = require('gulp-concat'),
    plumber         = require('gulp-plumber'), // continue task run on pipe error
    uglify          = require('gulp-uglify'), // minifies
    rename          = require('gulp-rename'),
    autoprefixer    = require('gulp-autoprefixer'), // adds vendor prefixes 
    less            = require('gulp-less'),
    del             = require('del'); // delete files/folders using globs    

    
gulp.task('default', ['serve']); 

gulp.task('serve', function (){
    browserSync.init({
        server:{
            baseDir: './src/'
        },
        port: 3002,
        ui:{
            port: 8082
        }
    });

    browserSync.watch('src/**/*.html').on('change', reload);
    browserSync.watch('src/**/*.js').on('change', reload);

    gulp.watch('src/assets/less/**/*.less', ['less']);
    // gulp.watch('src/**/*.html', ['html'])/*.on('change', browserSync.reload)*/;    
    // gulp.watch('src/**/*.js', ['scripts']); 

});

// gulp.task('scripts', function (){
//     gulp.src(['src/app/**/*.js', '!src/app/**/*.min.js'])
//     //.pipe(plumber()) // always first 
//     //.pipe(rename(({suffix:'.min'})))
//     //.pipe(uglify())
//     //.pipe(gulp.dest('src/js'))
//     .pipe(reload({stream:true}));
// });

// gulp.task('html', function (){    
//     gulp.src('src/**/*.html')
//     .pipe(reload({stream:true}));   // always last  
// });

gulp.task('less', function(){
    gulp.src('src/assets/less/main.less')
    .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        })) 
    .pipe(less())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.reload({stream: true}));
});



// build tasks

gulp.task('build:cleanfolder', function (cb){
    del('dist/**/*');
    cb();
});

gulp.task('build:copy', ['build:cleanfolder'], function (){
    gulp.src('src/**/*')
    .pipe(gulp.dest('dist/'));

    gulp.src([
        'bower_components/angular/angular.min.js', 
        'bower_components/angular-ui-router/angular-ui-router.min.js'
    ])
    .pipe(gulp.dest('dist/libs/'));

    return;
});

gulp.task('build:remove', ['build:copy'], function(cb){
    del([
        'dist/css/less',
        'dist/app/!(*.min.js)'
    ]);
    cb();
});

gulp.task('build', ['build:copy', 'build:remove']);

// end build tasks