var require = {
	baseUrl: '<%= baseUrl %>',
	urlArgs: 'bust=<%= requireJSVersion %>',
	paths: {
		'Backbone'				:  'javascript/lib/backbone',
		'handlebars'			:  'javascript/lib/handlebars',
		'handlebars.runtime'	:  'javascript/lib/handlebars.runtime',
		'jquery'				:  'javascript/lib/jquery',
		'header'				:  'javascript/component/header',
		'templates'				:  'javascript/handlebar/templates',
		'underscore'			:  'javascript/lib/underscore'
	},
	map: {
		'*': {
			'backbone': 'Backbone'
		}
	},
	shim: {
		Backbone: {
			deps: ['underscore']
		},
		handlebars: {
			exports: 'handlebars'
		},
		header: {
			deps: ['templates']
		},
		templates: {
			deps: ['handlebars.runtime']
		}
	},
	packages: []
};
