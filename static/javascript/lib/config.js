var require = {
	baseUrl: '<%= baseUrl %>',
	urlArgs: 'bust=<%= requireJSVersion %>',
	paths: {
		'Backbone'				:  '../static/javascript/lib/backbone',
		'handlebars'			:  '../static/javascript/lib/handlebars',
		'handlebars.runtime'	:  '../static/javascript/lib/handlebars.runtime',
		'jquery'				:  '../static/javascript/lib/jquery',
		'header'				:  '../static/javascript/component/header',
		'templates'				:  '../static/javascript/handlebar/templates',
		'underscore'			:  '../static/javascript/lib/underscore'
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
