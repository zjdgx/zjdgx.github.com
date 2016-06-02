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
				title: 'CSS翻转动画',
				date: '2016-06-02',
				url: '../static/notes/css/animation-reverse.html',
				des: 'CSS翻转动画'
			},
			{
				title: '页面布局',
				date: '2016-01-19',
				url: '../static/notes/css/layout.html',
				des: '页面布局'
			},
			{
				title: 'placeholder颜色',
				date: '2016-01-12',
				url: '../static/notes/css/placeholder-color.html',
				des: 'placeholder颜色'
			},
			{
				title: '去掉链接虚线框',
				date: '2016-01-05',
				url: '../static/notes/css/clearDottedBox.html',
				des: '去掉链接虚线框'
			},
			{
				title: 'CSS基础',
				date: '2013-12-04',
				url: '../static/notes/css/cssBasicKnowledge.html',
				des: 'CSS基础知识'
			}
		]
	});
});
