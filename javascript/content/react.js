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
				title: 'react canvas avatar',
				date: '2016-05-21',
				url: 'notes/react/canvasUpload.html',
				des: 'react canvas头像上传'
			},
			{
				title: 'React开发笔记',
				date: '2016-04-14',
				url: 'notes/tools/react_notes.html',
				des: 'react开发笔记'
			}
		]
	});
});
