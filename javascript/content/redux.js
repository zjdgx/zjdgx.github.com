/**
 * Build Date: 16/1/13 17:16.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
	return Backbone.Collection.extend({
		content: [
			{
				title: 'redux开发笔记',
				date: '2016-01-13',
				url: 'notes/redux/redux-notes.html',
				des: 'redux开发笔记'
			},
			{
				title: 'redux router',
				date: '2016-01-13',
				url: 'notes/redux/redux-router.html',
				des: 'redux-router'
			}
		]
	});
});