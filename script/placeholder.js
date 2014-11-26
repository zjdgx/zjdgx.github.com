/*
 * Author: liuqi
 * Modified: ZJDGX
 * Date: 2014-01-24
 * placeholder插件 v0.2
 * 让低端浏览器支持HTML5的placeholder属性，修复高版本IE下placeholder与其他浏览器的差异
 * 顺便支持了autofocus
 * <input type="text" placeholder="DEMO" autofocus>
 * 注意：高版本IE 10+的placeholder与其他浏览器表现有差异，所以隐藏并重新实现了一次，目前只测试到IE11，未来IE12出现，且表现与其他浏览器一致，应修改此插件
 */
"use strict";
(function(win, undefined){
	var doc = document,
		strPlaceholder = "placeholder",
		cssDefault = "text-overflow:ellipsis;overflow:hidden;cursor:text;color:gray;opacity:1;padding:0;border:0;",
		events = "change keypress keyup keydown input blur DOMAttrModified".split(/\s/),
		notSupport = createElement("input")[strPlaceholder] === undefined,
		head = doc.documentElement.firstChild,
		styleNode = createElement("style"),
		documentMode = doc.documentMode,
		parseInt = win.parseInt,
		strNormal = "normal",
		strStatic = "static",
		strPx = "px",
		getComputedStyle = win.getComputedStyle ? function(node){
			return win.getComputedStyle(node, null);
		} : 0;

	//document.createElement缩写
	function createElement(tag){
		return doc.createElement(tag);
	}

	//获取node的style对象，优先使用runtimeStyle
	function runtimeStyle(node){
		return node.runtimeStyle || node.style;
	}

	//获取node的计算样式，兼容IE，非IE
	function currentStyle(node){
		return node.currentStyle || getComputedStyle(node);
	}

	//为this简历模拟的placeholder
	function createHolder(){
		var input = this;
		//判断是否文本框
		if(/^text|textarea|password|email|month|search|tel|url$/i.test(input.type)){
			var	holder,
				timer,
				on,
				//更新placeholder文本
				setText = function (){
					//读取placeholder
					var text = strPlaceholder in input ? input[strPlaceholder] : input.getAttribute(strPlaceholder);
					//如果placeholder属性不为空而node还没有建立
					if(!holder && text) {
						//建立一个node
						holder = createElement(strPlaceholder);
						holder.onmousedown = function(){
							//鼠标点holder使文本框获得焦点
							setTimeout(function(){
								input.focus();
							}, 1);
							return false;
						};
					}
					//如果有node，更新其内容为placeholder属性值
					if(holder){
						holder.innerHTML = text || "";
					}
				},
				//控制node的样式
				setDisplay = function (){
					clearTimeout(timer);
					if(holder){
						var show = holder.innerHTML && !input.value,
							currStyle = currentStyle(input),
							style = runtimeStyle(holder),
							parent = input.parentNode,
							disp = parent && (input.offsetHeight || input.offsetWidth);
						style.display = show && disp ? "block" : "none";
						//如果文本框可见时
						if(!disp){
							//文本框不可见时延迟运行setDisplay
							timer = setTimeout(setDisplay, 50);
						} else if(show) {
							if(/^textarea$/i.test(input.tagName)){
								style.whiteSpace = strNormal;
								style.wordBreak = "break-all";
							} else {
								style.whiteSpace = "nowrap";
								style.wordBreak = strNormal;
							}
							//如果文本框或其父元素定位不为static，则自动计算placeholder的位置
							if(currStyle.position !== strStatic || currentStyle(input.parentNode).position !== strStatic){
								style.width = currStyle.textAlign === "left" ? "auto" : getComputedStyle ? getComputedStyle(input).width : (input.clientWidth - parseInt(currStyle.paddingLeft) - parseInt(currStyle.paddingRight)) + strPx;
								style.left = (input.offsetLeft + input.clientLeft) + strPx;
								style.top = (input.offsetTop + input.clientTop) + strPx;
								style.position = "absolute";
								currCss("marginLeft", "paddingLeft");
								currCss("marginTop", "paddingTop");
							}
							//设置继承样式
							if(getComputedStyle && currStyle.lineHeight === strNormal){
								style.lineHeight = getComputedStyle(input).height;
							} else {
								currCss("lineHeight");
							}
							currCss("textAlign");
							currCss("fontFamily");
							currCss("fontWidth");
							currCss("fontSize");

							//将node插入文本框之后
							if(input.nextSibling){
								parent.insertBefore(holder, input.nextSibling);
							} else {
								parent.appendChild(holder);
							}
						}
					}
				},
				//样式继承，取文本框的样式赋值给placeholder
				currCss = function(name,attr){
					try{
						runtimeStyle(holder)[name] = currentStyle(input)[attr || name];
					}catch(e){}
				};

			if(events.forEach) {
			//高级浏览器下事件注册
				on = function(eType, fn, node){
					(node || input).addEventListener(eType, fn, true);
					if(!node){
						doc.addEventListener(eType, function(e){
							if(e.target === input){
								fn();
							}
						}, false);
					}
				};
				events.forEach(function(eType){
					on(eType, function(e){
						setText();
						setDisplay();
					});
				});
			} else if(input.attachEvent) {
			//旧版IE下事件注册
				on = function(eType, fn, node){
					(node || input).attachEvent("on" + eType, fn);
				};
				//value和placeholder属性变化时触发
				on("propertychange", function(){
					switch(event.propertyName){
						//如placeholder属性发生改变，重置文案和样式
						case strPlaceholder :
							setText();
						//如value属性发生改变，重置重置样式
						default :
							setDisplay();
					}
				});
				on("keypress", setDisplay);
			}
			//初始化placeholder及其样式
			setText();
			setDisplay();
			if(on) {
				on("resize", setDisplay, win);
			}
		}
	}

	function init($){
		var inputs = $("input,textarea").each(createHolder);
		if(notSupport){
			//autofocus属性的兼容实现
			(function(){
				if(doc.readyState === "complete"){
					inputs.each(function() {
						var input = this;
						if( input.getAttribute("autofocus") !== null ){
							try {
								input.focus();
								return false;
							} catch(ex) {}
						}
					});
				} else {
					setTimeout(arguments.callee, 200);
				}
			})();
		}
	}

	//添加css规则
	function addRule(sStyle, sSelector){
		sSelector = (sSelector || "") + strPlaceholder;
		if(styleNode.styleSheet){
			styleNode.styleSheet.addRule(sSelector, sStyle);
		} else {
			styleNode.appendChild(doc.createTextNode(sSelector + "{" + sStyle + "}"));
		}
	}

	head.insertBefore(styleNode, head.firstChild);

	if(notSupport || documentMode){
		addRule(cssDefault);
		if(win.LQ){
			init(LQ);
		} else if(win.jQuery){
			jQuery(init);
		}
	}

	if(notSupport){
		//IE8及以上统一node.placeholder和node.getAttribute("placeholder")
		var hook = {
				set: function (x) {
					this.setAttribute(strPlaceholder, x);
				},
				get: function () {
					return this.getAttribute(strPlaceholder) || "";
				}
			},
			defineProperty = Object.defineProperty,
			prototype = "prototype";

		//HTMLTextAreaElement和HTMLInputElement的原型上加入placeholder的get、set方法
		if(defineProperty){
			defineProperty(HTMLTextAreaElement[prototype], strPlaceholder, hook);
			defineProperty(HTMLInputElement[prototype], strPlaceholder, hook);
		}
	} else {
		if(documentMode > 9) {
			//IE 10+中placeholder在文本框focus时则消失，这与其他浏览器有差异，用css干掉其原生的placeholder功能
			addRule("color:transparent !important;", ":-ms-input-");
		} else {
			//高端浏览器下写入css rest
			addRule(cssDefault, "netscape" in win ? "::-moz-": "::-webkit-input-");
		}
		//未来浏览器厂商推出无前缀的placeholder选择器后，在此行添加css rest
	}

})(this);
