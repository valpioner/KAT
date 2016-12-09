var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

gulp.task('scripts', function (){
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        //'app/libs/xz.../xz.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
})

gulp.task('sass', function (){
    return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function (){
    browserSync({
        server:{
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function (){
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);    
    gulp.watch('app/js/**/*.js', browserSync.reload);    
});

gulp.task('build', function(){
    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css',
    ])
    .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

    
    var buildJs = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
})

gulp.task('default', ['scripts', 'watch']) //runs all async in same time


// gulp.task('mytask', function() {
//     return gulp.src('source-files')
//     .pipe(plugin())
//     .pipe(gulp.dest('folder'))
// });