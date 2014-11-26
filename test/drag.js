// JavaScript Document

function dragJavaScript( elementId ) {
	var doc = document, ele = doc.getElementById( elementId );
	ele.onMouseDown = function(){
		var t = this, className = t.className; 
		if ( className.indexOf("moving") == -1 ) {
			t.className = t.className + " moving";
		}
	};
	
};

function dragjQuery( ele ){
	var doc = document, eventLeft = 0, eventTop = 0;
	$(ele).bind("mousedown",function( e ){
		var t = $(this);
		if(!t.hasClass("moving")) {
			t.addClass("moving");
		}
		eventLeft = e.pageX - t.offset().left;
		eventTop = e.pageY - t.offset().top;
	}).bind("mousemove", function( e ){
		var t = $(this);
		if(t.hasClass("moving"))
			t.css("top", e.pageY - eventTop ).css("left",e.pageX - eventLeft);
	}).bind("mouseup mouseout", function(){
		$(this).removeClass("moving");
		eventLeft = 0;
		eventTop = 0;
	});
};

/**
 * 拖动功能
 * 2013-12-18
 * www.cnblogs.com/a546558309/p/3476726.html 
 */
function Drag(id) {
	var $ = function (flag) {
		return document.getElementById(flag);
	}
	$(id).onmousedown = function (e) {
		var d = document, dv = this;
		var page = {
			event: function (evt) {
				var ev = evt || window.event;
				return ev;
			},
			pageX: function (evt) {
				var e = this.event(evt);
				return e.pageX || (e.clientX + document.body.scrollLeft - document.body.clientLeft);
			},
			pageY: function (evt) {
				var e = this.event(evt);
				return e.pageY || (e.clientY + document.body.scrollTop - document.body.clientTop);

			},
			layerX: function (evt) {
				var e = this.event(evt);
				return e.layerX || e.offsetX;
			},
			layerY: function (evt) {
				var e = this.event(evt);
				return e.layerY || e.offsetY;
			}
		}             
		var x = page.layerX(e);
		var y = page.layerY(e);        
		if (dv.setCapture) {
			dv.setCapture();
		}
		else if (window.captureEvents) {
			window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
		}
		d.onmousemove = function (e) {                    
			var tx = page.pageX(e) - x;
			var ty = page.pageY(e) - y;
			dv.style.left = tx + "px";
			dv.style.top = ty + "px";
		}
		d.onmouseup = function () {
			if (dv.releaseCapture) {
				dv.releaseCapture();
			}
			else if (window.releaseEvents) {
				window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
			}
			d.onmousemove = null;
			d.onmouseup = null;
		}
	}
}