// JavaScript Document


/**
 * 搜狐javascript面试题
 * 实现一个叫Man的类，包含attr, words, say三个方法。
 * date: 2013-12-02
 * author: zjdgx
 */
function Man(){};

Man.prototype = {
	attr: function(attrs){
		console.log(attrs);
	},
	words: function(word){
		console.log(word);
	},
	say: function(says){
		console.log(says);
	}
}

/**
 * 搜狐javascript面试题
 * 实现一个URI解析方法，把url里#之后的参数解析成指定的数据结构。
 * date: 2013-12-02
 * author: zjdgx
 */
function parameterAnalyze( url ) {
	var data = {}, param = url.substring(url.indexOf("?")+1).split("&");
	for(var i=0, len=param.length; i<len; i++) {
		data[param[i].split("=")[0]] = param[i].split("=")[1];
	}
	console.log(data);
}