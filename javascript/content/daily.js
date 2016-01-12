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
				date: '2016-01-12',
				daily: {
					does: [
						'placeholder颜色'
					],
					todo: [
						'redux view'
					]
				}
			},
			{
				date: '2016-01-11',
				daily: {
					does: [
						'placeholder颜色成都'
					],
					todo: [
						'redux 的说法'
					]
				}
			}
		]
	});
});