/**
 * Build Date: 16/1/12 21:11.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
	return Backbone.Collection.extend({
		content: [
			{
				date: '2016-01-14',
				daily: {
					does: [
						'redux component props action'
					],
					todo: [
						'redux router',
						'Shapes of CSS'
					]
				}
			},
			{
				date: '2016-01-13',
				daily: {
					does: [
						'redux router',
						'redux开发笔记',
						'immutable sortBy'
					],
					todo: [
						'redux router',
						'redux fetch: 通过bindActionCreators把Action绑定到component的props上'
					]
				}
			},
			{
				date: '2016-01-12',
				daily: {
					does: [
						'placeholder颜色'
					],
					todo: [
						'redux view'
					]
				}
			}
		]
	});
});