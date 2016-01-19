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
				date: '2016-01-19',
				daily: {
					does: [
						'两列布局: 左边固定',
						'javascript: 数字转大写金额'
					],
					todo: [
						{
							content: 'grunt jade传参数',
							finished: false
						}
					]
				}
			},
			{
				date: '2016-01-18',
				daily: {
					does: [
						'react onclickoutside'
					],
					todo: [
						{
							content: 'Chrome最小像素',
							finished: false
						}
					]
				}
			},
			{
				date: '2016-01-15',
				daily: {
					does: [
					],
					todo: [
						{
							content: '页面布局',
							finished: false
						}
					]
				}
			},
			{
				date: '2016-01-14',
				daily: {
					does: [
						'redux component props action'
					],
					todo: [
						{
							content: 'Shapes of CSS',
							finished: false
						}
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
						{
							content: 'redux router',
							finished: false
						},
						{
							content: 'redux fetch: 通过bindActionCreators把Action绑定到component的props上',
							finished: true
						}
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
						{
							content: 'redux view',
							finished: false
						}
					]
				}
			}
		]
	});
});