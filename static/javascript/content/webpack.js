/**
 * Build Date: 16/1/6 13:57.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
	return Backbone.Collection.extend({
		content: [
			{
				title: 'Webpack introduction',
				date: '2016-03-22',
				url: '../static/notes/tools/webpack-introduction.html',
				des: 'Webpack introduction'
			},
			{
				title: 'Webpack概述',
				date: '2016-02-26',
				url: '../static/notes/tools/webpack.html',
				des: 'Webpack概述'
			}
		]
	});
});
