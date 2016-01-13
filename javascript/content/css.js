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
				title: 'placeholder颜色',
				date: '2016-01-12',
				url: 'notes/css/placeholder-color.html',
				des: 'placeholder颜色'
			},
			{
				title: '去掉链接虚线框',
				date: '2016-01-05',
				url: 'notes/css/clearDottedBox.html',
				des: '去掉链接虚线框'
			},
			{
				title: 'CSS基础',
				date: '2013-12-04',
				url: 'notes/css/cssBasicKnowledge.html',
				des: 'CSS基础知识'
			}
		]
	});
});