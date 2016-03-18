/**
 * Build Date: 16/1/20 9:38.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
	return Backbone.Collection.extend({
		content: [
			{
				name: 'Promise',
				date: '2016/03/04',
				url: 'https://github.com/liubin/promises-book/',
				des: 'promise迷你电子书'
			},
			{
				name: 'AntDesign',
				date: '2016/03/04',
				url: 'https://github.com/ant-design/ant-design',
				des: 'react ant design组件'
			},
			{
				name: 'Slick',
				date: '2016/03/03',
				url: 'https://github.com/akiran/react-slick',
				des: 'react轮播插件'
			},
			{
				name: 'React Webpack',
				date: '2016/02/23',
				url: 'https://fakefish.github.io/react-webpack-cookbook/index.html',
				des: 'React + Webpack小书'
			},
			{
				name: '简历模板',
				date: '2016/01/29',
				url: 'https://github.com/geekcompany/ResumeSample',
				des: '包括PHP程序员简历模板、iOS程序员简历模板、Android程序员简历模板、Web前端程序员简历模板、Java程序员简历模板、C/C++程序员简历模板、NodeJS程序员简历模板、架构师简历模板以及通用程序员简历模板'
			}
		]
	});
});
