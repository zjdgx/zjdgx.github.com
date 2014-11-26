// JavaScript Document
(function(win, doc, $){
	function css(element, css){
		for(var i in css){
			element.style[i] = css[i];
		}
		return element;
	}

	function create(tag, cssobj) {
		return css(doc.createElement(tag), cssobj);
	}
	
	$.fn.extend({
		dialog: function(){
			console.log(123);
	
		}
	});	
})(this, this.document, this.jQuery);
