module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			js: {// concat下面必须加一层task, 否则任务不执行
				options: {
					separator: ';',
					process: {
						data: {
							baseUrl: './',
							requireJSVersion: +new Date
						}
					}
				},
				files: {
					'./static/javascript/lib/require.js': ['./static/javascript/lib/config.js', './bower_components/requirejs/require.js'],
					'./static/javascript/lib/backbone.js': ['./bower_components/backbone/backbone-min.js', './bower_components/backbone.modelBinder/Backbone.ModelBinder.min.js']
				}
			},
			css: {
				options: {
					seperator: ';'
				},
				files: {
					'./static/style/common/prettify.css': ['./bower_components/code-prettify/src/prettify.css', './bower_components/code-prettify/loader/skin/sunburst.css']
				}
			}
		},
		copy: {
			css: {
				files: {
					'./static/style/common/normalize.css': './bower_components/normalize-css/normalize.css',
					'./static/style/common/loader.css': './bower_components/loaders.css/loaders.min.css'
				}
			},
			js: {
				files: {
					'./static/javascript/lib/jquery.js': './bower_components/jquery/dist/jquery.min.js',
					'./static/javascript/lib/prettify.js': './bower_components/code-prettify/src/run_prettify.js',
					'./static/javascript/lib/underscore.js': './bower_components/underscore/underscore-min.js',
					'./static/javascript/lib/handlebars.runtime.js': './bower_components/handlebars/handlebars.runtime.min.js'
				}
			}
		},
		cssmin: {
			'./static/style/common/normalize.css': './static/style/common/normalize.css',
			'./static/style/common/prettify.css': './static/style/common/prettify.css',
			'./static/style/common/loader.css': './static/style/common/loader.css'
		},
        stylus: {
            options: {
				paths: ['./static/style/common'],//需要添加path, 否则会找不到需要import的文件
                'include css': true
            },
            compile: {
                files: {
					'./static/style/notes.css': './static/style/common/notes.styl',
					'./static/style/home.css': './static/style/pages/home.styl',
					'./static/style/pageView.css': './static/style/pages/pageView.styl',
					'./static/style/daily.css': './static/style/pages/daily.styl',
					'./static/style/source.css': './static/style/pages/source.styl'
                }
            }
        },
		handlebars: {
			compile: {
				options: {
					amd: true,
					namespace: 'template',
					processContent: function (content, filepath) {
						content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
						content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
						return content;
					},
					processName: function (filePath) {
						return filePath.replace(/(.+\/)*(.*)\.hbs?/, '$2');
					}
				},
				files: {
					'./static/javascript/handlebar/home.js': './static/javascript/handlebar/home.hbs',
					'./static/javascript/handlebar/PageView.js': './static/javascript/handlebar/PageView.hbs',
					'./static/javascript/handlebar/SourceView.js': './static/javascript/handlebar/SourceView.hbs',
					'./static/javascript/handlebar/header.js': './static/javascript/handlebar/HeaderViewTemplate.hbs',
					'./static/javascript/handlebar/DailyView.js': './static/javascript/handlebar/DailyViewTemplate.hbs',
					'./static/javascript/handlebar/recommendArticle.js': './static/javascript/handlebar/recommendArticle.hbs',
					'./static/javascript/handlebar/contentListItemView.js': './static/javascript/handlebar/contentListItemViewTemplate.hbs'
				}
			}
		},
		uglify: {
			js: {
				files: {
					'./static/javascript/lib/require.js': './static/javascript/lib/require.js',
					'./static/javascript/lib/backbone.js': './static/javascript/lib/backbone.js'
				}
			},
			module: {
				files: [{
					expand: true,
					src: ['./static/javascript/handlebar/*.js'],
					dest: './'
				}]
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.registerTask('js', ['concat', 'copy:js', 'handlebars', 'uglify']);
    grunt.registerTask('css', ['copy:css', 'cssmin', 'stylus']);
	grunt.registerTask('default', ['js', 'css']);
};
