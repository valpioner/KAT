var gulp            = require('gulp'),
    browserSync     = require('browser-sync'), // auto browser sync
    reload          = browserSync.reload; 
    //concat = require('gulp-concat'),
    plumber         = require('gulp-plumber'), // continue task run on pipe error
    uglify          = require('gulp-uglify'), // minifies
    rename          = require('gulp-rename'),
    autoprefixer    = require('gulp-autoprefixer'), // adds vendor prefixes 
    less            = require('gulp-less'),
    del             = require('del'); // delete files/folders using globs

    

gulp.task('scripts', function (){
    // return gulp.src([
    //     'app/libs/jquery/dist/jquery.min.js',
    //     //'app/libs/xz.../xz.min.js'
    // ])
    // .pipe(concat('libs.min.js'))
    // .pipe(uglify())
    // .pipe(gulp.dest('app/js'));

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
    .pipe(autoprefixer('last 2 versions')) 
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}));
});
















// gulp.task('sass', function (){
//     return gulp.src('app/sass/**/*.sass')
//     .pipe(sass())
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.reload({stream: true}));
// });

gulp.task('browser-sync', function (){
    browserSync({
        server:{
            baseDir: './src/'
        },
        notify: false
    });
});

gulp.task('build:serve', function (){
    browserSync({
        server:{
            baseDir: './build/'
        },
        notify: false
    });
});

// gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function (){
//     gulp.watch('app/sass/**/*.sass', ['sass']);
//     gulp.watch('app/*.html', browserSync.reload);    
//     gulp.watch('app/js/**/*.js', browserSync.reload);    
// });

// gulp.task('build', function(){
//     var buildCss = gulp.src([
//         'app/css/main.css',
//         'app/css/libs.min.css',
//     ])
//     .pipe(gulp.dest('dist/css'));

//     var buildFonts = gulp.src('app/fonts/**/*')
//     .pipe(gulp.dest('dist/fonts'));

//     var buildJs = gulp.src('app/js/**/*')
//     .pipe(gulp.dest('dist/js'));

    
//     var buildJs = gulp.src('app/*.html')
//     .pipe(gulp.dest('dist'));
// });

gulp.task('default', ['scripts', 'html', 'less', 'browser-sync', 'watch']); //runs all async in same time


// gulp.task('mytask', function() {
//     return gulp.src('source-files')
//     .pipe(plugin())
//     .pipe(gulp.dest('folder'))
// });












gulp.task('build:cleanfolder', function (cb){
    del([
        'build/**'
    ], cb)
});

gulp.task('build:copy', ['build:cleanfolder'], function (){
    return gulp.src('src/**/*/')
    .pipe(gulp.dest('build/'));
});

gulp.task('build:remove', ['build:copy'], function(cb){
    del([
        'build/scss/',
        'build/js/!(*.min.js)'
    ], cb)
});

gulp.task('build', ['build:copy', 'build:remove']);