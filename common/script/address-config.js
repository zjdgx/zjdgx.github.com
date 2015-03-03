var Front = [
		{'name':'CSS字体栈', 'date': '2015-01-04', 'url':'http://cssfontstack.com/'},
		{'name':'配色器', 'date': '2015-01-04', 'url':'http://colorschemedesigner.com/'},
		{'name':'特殊符号', 'date': '2015-01-04', 'url':'http://cn.piliapp.com/symbol/'},
		{'name':'张鑫旭', 'date': '2015-01-04', 'url':'http://www.zhangxinxu.com/wordpress/'},
		{'name':'w3cplus(Css3)', 'date': '2015-01-04', 'url':'http://www.w3cplus.com/blog/tags/11.html'},
		{'name':'列表的两端对齐布局', 'date': '2015-01-04', 'url':'http://www.zhangxinxu.com/wordpress/2011/03/displayinline-blocktext-alignjustify%E4%B8%8B%E5%88%97%E8%A1%A8%E7%9A%84%E4%B8%A4%E7%AB%AF%E5%AF%B9%E9%BD%90%E5%B8%83%E5%B1%80/'},
		{'name':'canIuse', 'date': '2015-01-04', 'url':'http://caniuse.com'},
		{'name':'UI设计', 'date': '2015-01-04', 'url':'http://www.uifuns.com/'},
		{'name':'30个jQuery Lightbox插件', 'date': '2015-01-04', 'url':'http://www.cnblogs.com/lhb25/archive/2011/04/11/2005330.html'},
		{'name':'25 个超棒的 HTML5 & JavaScript 游戏引擎开发库', 'url':'http://www.oschina.net/translate/25-best-html5-javascript-game-engine-libraries-for-developers?from=20150301'},
		{'name':'自适应网页设计', 'date': '2015-01-04', 'url':'http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html'},
		{'name':'mobileTech', 'date': '2015-01-04', 'url':'https://github.com/jtyjty99999/mobileTech'},
		{'name':'屏幕大小', 'date': '2015-01-04', 'url':'http://screensiz.es/phone'},
		{'name':'HTML5多图片预览上传', 'date': '2015-01-04', 'url':'http://www.css119.com/archives/1481'},
		{'name':'免费学习', 'date': '2015-01-04', 'url':'http://www.jscode.cn/web/v76959'},
		{'name':'JS调优', 'date': '2015-01-04', 'url':'http://developer.51cto.com/art/200906/128404.htm'},
		{'name':'HTML5 Cavas画图', 'date': '2015-01-04', 'url':'http://www.cnblogs.com/tim-li/archive/2012/08/06/2580252.html#8'},
		{'name':'懒人之家', 'date': '2015-01-04', 'url':'http://www.lanrenzhijia.com/'},
		{'name':'JavaScript 键盘事件', 'date': '2015-01-04', 'url':'http://www.oschina.net/news/49432/20-javascript-libraries-to-handle?from=20140309'}
	],
	Java = [
		{'name':'Java基础博客', 'date': '2015-01-04', 'url':'http://blog.csdn.net/csh624366188'},
		{'name':'NetBeans文档', 'date': '2015-01-04', 'url':'https://netbeans.org/kb/docs/java/quickstart-gui_zh_CN.html'},
		{'name':'Spring MVC 教程', 'date': '2015-01-04', 'url':'http://elf8848.iteye.com/blog/875830/'},
		{'name':'SSH_DEMO', 'date': '2015-01-04', 'url':'http://yiyiboy2010.iteye.com/blog/1412327'}
	],
	Android = [
		{'name':'android论坛', 'date': '2015-01-04', 'url':'http://android.eoe.cn/'},
		{'name':'Android 1', 'date': '2015-01-04', 'url':'http://blog.csdn.net/android_tutor/article/details/4769550'},
		{'name':'Android 2', 'date': '2015-01-04', 'url':'http://www.cnblogs.com/jhtchina/category/262170.html'},
		{'name':'Android模拟器', 'date': '2015-01-04', 'url':'https://cloud.genymotion.com/page/customer/login/?next=/page/launchpad/download/'},
		{'name':'Android反编译', 'date': '2015-01-04', 'url':'http://www.cnblogs.com/yydcdut/p/3655562.html'},
		{'name':'CSDN免费资源', 'date': '2015-01-04', 'url':'http://bbs.csdn.net/topics/390948162'}
	],
	Tool = [
		{'name':'前端神器', 'date': '2015-01-04', 'url':'http://www.w3cfuns.com/tools.php'},
		{'name':'草料二维码', 'date': '2015-01-04', 'url':'http://cli.im/'},
		{'name':'长途汽车查询(IE)', 'date': '2015-01-04', 'url':'http://www.cdjt.gov.cn/bus.jsp'},
		{'name':'前端收藏夹', 'date': '2015-01-04', 'url':'http://www.w3cplus.com/front-end-bookmarks'},
		{'name':'sublime Emmet', 'date': '2015-01-04', 'url':'http://www.cnblogs.com/bjmumu/p/3356868.html'},
		{'name':'网站访问统计系统', 'date': '2015-01-04', 'url':'http://www.oschina.net/news/49411/piwik-2-1-0?from=20140309'}
	],
	Blog = [
		{'name':'博客园(javascript)', 'date': '2015-01-04', 'url':'http://www.cnblogs.com/cate/javascript/'},
		{'name':'聂微东博客', 'date': '2015-01-04', 'url':'http://www.cnblogs.com/Darren_code/'}
	];
	
function getMaxLength() {
	var frontLen = Front.length,
		javaLength = Java.length,
		androidLength = Android.length,
		toolLength = Tool.length,
		blogLength = Blog.length;

	return Math.max(frontLen, javaLength, androidLength, toolLength, blogLength);
}

function getItemValue(data) {
	if(data) {
		return '<td><a href="'+data.url+'" target="_blank" date="'+data.date+'">'+data.name+'</a></td>'
	} else {
		return '<td>&nbsp;</td>';
	}
}

function showAddressTable() {
	var len = address.length,
		maxLength = getMaxLength(),
		table = ['<table cellpadding="0" cellspacing="0" border="1" bordercolor="#CCCCCC"><thead><tr><th>Front</th><th>Java</th><th>Android</th><th>Tool</th><th>Blog</th></tr></thead><tbody>'];
	
	for(var j=0; j<maxLength; j++) {
		table.push('<tr>');
		table.push(getItemValue(Front[j]));
		table.push(getItemValue(Java[j]));
		table.push(getItemValue(Android[j]));
		table.push(getItemValue(Tool[j]));
		table.push(getItemValue(Blog[j]));
		table.push('</tr>')
	}
	
	table.push('</tbody></table>');
	
	$('.fixHeight .content').append(table.join(''));
}