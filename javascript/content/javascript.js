/**
 * Build Date: 16/1/5 15:32.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
	return Backbone.Collection.extend({
		content: [
			{
				title: 'ES2015',
				date: '2016-01-05',
				url: 'notes/javascript/es2015.html',
				des: 'ES2015'
			},
			{
				title: '用JavaScript将数字转换为大写金额',
				date: '2016-01-19',
				url: 'notes/javascript/number2moneyUppercase.html',
				des: '用JavaScript将数字转换为大写金额'
			},
			{
				title: '删除数组重复元素',
				date: '2014-07-02',
				url: 'notes/javascript/deleteRepeatArr.html',
				des: '删除数组中包含指定值的元素'
			},
			{
				title: 'JavaScript十进制转十六进制',
				date: '2014-03-27',
				url: 'notes/javascript/tenToHex.html',
				des: 'JavaScript十进制转十六进制'
			},
			{
				title: 'JavaScript拖拽',
				date: '2013-12-18',
				url: 'notes/javascript/drag_drop.html',
				des: 'javascript拖拽功能'
			},
			{
				title: 'AJAX JSONP',
				date: '2013-12-02',
				url: 'notes/javascript/ajax_jsonp.html',
				des: 'ajax jsonp跨域请求'
			},
			{
				title: '通用事件绑定',
				date: '2013-09-22',
				url: 'notes/javascript/events-binding.html',
				des: '通用事件绑定'
			},
			{
				title: '数组方法',
				date: '2013-09-22',
				url: 'notes/javascript/array-functions.html',
				des: '数组方法'
			}
		]
	});
});