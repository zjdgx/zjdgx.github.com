// JavaScript Document
$(function(){
	$(".backTop").click(function(){
		$(window).scrollTop(0);
	});
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if(top > 0){
			$(".backTop").fadeIn(100);
		} else {
			$(".backTop").fadeOut(100);
		}
	});
	
	/** 显示时钟
	-----------------------------*/
	setDateDisplay(new Date());
	setInterval(function(){
		setDateDisplay(new Date());
	},1000);
	$('div.section h1').click(function(){
		$(this).parent().toggleClass('open').siblings().removeClass('open');
	});
	$('.mobile-note i.back').click(function() {
		location.href = '../../index.html';
		return false;
	});
});

/**
 * @author: zjdgx
 * [setDateDisplay 设置显示时间]
 * @param {[Date]} date [传入日期]
 * @date 2014-02-11
 */
function setDateDisplay( date ) {
	var m = date.getMonth() + 1,
		d = date.getDate(),
		h = date.getHours(),
		mi = date.getMinutes(),
		s = date.getSeconds();
	$(".year span").html(date.getFullYear());
	$(".month span").html(m < 10 ? "0"+m : m);
	$(".day span").html(d < 10 ? "0"+d : d);
	$(".hour span").html(h < 10 ? "0"+h : h);
	$(".minute span").html(mi < 10 ? "0"+mi : mi);
	$(".second span").html(s < 10 ? "0"+s : s);
}