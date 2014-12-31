var address = {
		CSS: CSS,
		JavaScript: JavaScript,
		Java: Java,
		Mobile: Mobile,
		Android: Android,
		Tool: Tool,
		Blog: Blog
	},
	CSS = [
		{'name':'text', 'date': '2014-12-31', 'url':'zzz'}
	],
	JavaScript = [
		{'name':'text', 'date': '2014-12-31', 'url':'zzz'}
	],
	Java = [
		{'name':'text', 'date': '2014-12-31', 'url':'zzz'}
	],
	Mobile = [
		{'name':'text', 'date': '2014-12-31', 'url':'zzz'}
	],
	Android = [
		{'name':'text', 'date': '2014-12-31', 'url':'zzz'}
	],
	Tool = [
		{'name':'text', 'date': '2014-12-31', 'url':'zzz'}
	],
	Blog = [
		{'name':'text', 'date': '2014-12-31', 'url':'zzz'}
	];
	
function getMaxLength() {
	var cssLen = CSS.length,
		jsLen = JavaScript.length,
		javaLength = Java.length,
		mobileLength = Mobile.length,
		androidLength = Android.length,
		toolLength = Tool.length,
		blogLength = Blog.length;

	return Math.max(cssLen, jsLen, javaLength, mobileLength, androidLength, toolLength, blogLength);
}

function showAddressTable() {
	var len = address.length,
		maxLength = getMaxLength();
	
	for (var i=0; i<len; i++) {
		
	}
}