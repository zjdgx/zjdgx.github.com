
function windowResize() {
	
	var bodyHeight = $(window).height();
    var midHeight = $(".otherbox").outerHeight();
    var copyHeight = $(".copyright").outerHeight();
	var footHeight = $(".menwrap").outerHeight();
	
	$(".yijiantop").outerHeight((bodyHeight - midHeight - copyHeight-footHeight)/2 );
	$(".yijianbot").outerHeight((bodyHeight - midHeight - copyHeight-footHeight)/2 + 40);
    
	
}

windowResize();
$(window).resize(function () {
    windowResize();
});