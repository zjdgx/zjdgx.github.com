/**
 * Build Date: 16/1/7 9:08.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
	return Backbone.Collection.extend({
		content: [
			{
				title: '前端网站',
				content: [
					{
						title: '腾讯全端团队博客',
						url: 'http://www.alloyteam.com/'
					}
				]
			},
			{
				title: 'JavaScript库',
				content: [
					{
						title: 'Knockout',
						url: 'http://knockoutjs.com/',
						des: '简洁小巧的MVVM框架, 分离业务逻辑和视图数据绑定.'
					},
					{
						title: 'Dojo',
						url: 'http://dojotoolkit.org/',
						des: 'Dojo能够让你更容易使Web页面具有动态能力.'
					},
					{
						title: 'MooTools',
						url: 'http://mootools.net/',
						des: 'MooTools是一个简洁, 模块化, 面向对象的开源JS框架.'
					},
					{
						title: 'KISSY',
						url: 'http://docs.kissyui.com/',
						des: '淘宝开发的js库, 目前淘宝所有网站基于这个库.'
					},
					{
						title: 'NEJ',
						url: 'http://nej.netease.com/',
						des: '网易开发的一个JS库, 界面比较优雅.'
					}
				]
			},
			{
				title: '字体图标',
				content: [
					{
						title: 'Font-Awesome',
						url: 'http://fontawesome.io/',
						des: '目前最丰富最流行的免费字体图标库.'
					},
					{
						title: 'ionicons',
						url: 'http://ionicons.com/',
						des: '简洁大气的UI图标库.'
					},
					{
						title: 'iconfont',
						url: 'http://www.iconfont.cn/',
						des: '阿里巴巴UX部门推出的国内首家Webfont形式图标的平台.'
					}
				]
			},
			{
				title: '动画库',
				content: [
					{
						title: 'animate.css',
						url: 'http://daneden.github.io/animate.css/',
						des: '一个跨浏览器的动画库, 简单易用.'
					},
					{
						title: 'magic',
						url: 'http://minimamente.com/example/magic_animations/',
						des: 'CSS3动画特效库.'
					},
					{
						title: 'Effeckt.css',
						url: 'http://h5bp.github.io/Effeckt.css/',
						des: '一个高性能CSS3过渡和动画库.'
					},
					{
						title: 'bounce.js',
						url: 'http://bouncejs.com/',
						des: '基于此库构建不同的动画效果.'
					}
				]
			}
		]
	});
});