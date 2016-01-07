/**
 * Build Date: 16/1/6 17:01.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
	return Backbone.Collection.extend({
		content: [
			{
				title: '使用tomcat和bat文件启动静态项目',
				date: '2015-08-21',
				url: 'notes/notes/start-static-web-project-with-tomcat.html',
				des: '使用tomcat和bat文件启动静态项目'
			},
			{
				title: '如何成为一名卓越的前端工程师',
				date: '2015-08-19',
				url: 'notes/notes/how-to-become-a-greate-front-end-engineer.html',
				des: '如何成为一名卓越的前端工程师'
			}
		]
	});
});