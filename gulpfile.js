/**
 * Build Date: 16/2/3 13:59.
 * Copyright (c): NHN China Co.,LTD
 * Author: jianggang
 * Description:
 */

var gulp = require('gulp'),
	del = require('del'),
	wrap = require('gulp-wrap'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	declare = require('gulp-declare'),
	imagemin = require('gulp-imagemin'),
	sourcemap = require('gulp-sourcemaps'),
	handlebars = require('gulp-handlebars'),
	defineModule = require('gulp-define-module');

gulp.task('clean', function () {
	return del(['build']);
});

gulp.task('templates', function () {
	return gulp.src('./javascript/handlebar/*.hbs')
		.pipe(handlebars())
		.pipe(defineModule('amd', {
			context: {
				handlebars: 'Handlebars.template(<%= contents %>)'
			}
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./javascript/handlebar/'));
});



gulp.task('script', ['clean'], function () {
	return gulp.src('./javascript/**/*.js')
		.pipe(sourcemap.init())
		.pipe()
})
