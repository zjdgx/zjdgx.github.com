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
				title: '删除node_modules文件夹',
				date: '2016-03-30',
				url: '../static/notes/nodejs/deleteNodeModules.html',
				des: '删除node_modules文件夹'
			},
			{
				title: 'Node Express开发步骤',
				date: '2015-03-09',
				url: '../static/notes/nodejs/nodeExpressRequirements.html',
				des: 'Node Express开发步骤'
			},
			{
				title: 'Nodejs文件下载',
				date: '2015-03-23',
				url: '../static/notes/nodejs/nodeFileDownload.html',
				des: 'Nodejs文件下载'
			},
			{
				title: '使用Nodejs读写Redis数据',
				date: '2015-03-09',
				url: '../static/notes/nodejs/nodeRedis.html',
				des: '使用Nodejs读写Redis数据'
			},
			{
				title: '高性能Nodejs',
				date: '2015-03-04',
				url: '../static/notes/nodejs/highPerformanceNode.html',
				des: '高性能Nodejs'
			}
		]
	});
});