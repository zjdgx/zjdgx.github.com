/**
 * AvatarUI-tipbox
 * @version v2.0.1
 * @author  Rocky(296456018@qq.com)
 * @date    2013-04-25
 */

;!function(win, $, undefined){
	$.fn.TipBox = function(options) {
		var defaults = {
			location: "Top",  //显示位置
			width: 200,       //宽度
		    textBoxCon: "",   //内容
		    theme:"",         //主题
		    effect:""         //显示效果
		};
		var opts = $.extend({},defaults, options);
		
		$(this).hover(function(){
		    //autoTip的层级升高
		    $(this).css("z-index",parseInt(new Date().getTime() / 1000));
		    
		    //添加提示框
			var tipBox = "<span class=\"tipBox\" id=\"TipBox\"><span id=\"TipBoxCon\"></span><span class=\"tipBoxArrow1\"></span><span class=\"tipBoxArrow\"></span></span>";
			$(this).append(tipBox);
			
			//判断主题是否自定义
			$("#TipBox").addClass(opts.theme);
			
			//提示提示框的样式
			$("#TipBox").css("width",opts.width);
			$(".tipBoxArrow").addClass("tipBoxArrow"+opts.location);
            $(".tipBoxArrow1").addClass("tipBoxArrow1"+opts.location);
			
			//判断内容是否自定义
            $("#TipBoxCon").html(opts.textBoxCon == "" ? $(this).attr("tipBoxText") : $(opts.textBoxCon).html());

            //获取提示框的宽度和高度
			var tipHeight = $("#TipBox").outerHeight();
			var tipWidth = $("#TipBox").outerWidth();
			
			//判断显示位置
            switch(opts.location){
                case "Top":
                    $("#TipBox").css({"top" : -tipHeight - 8, "left" : -(tipWidth - $(this).outerWidth())/2});
                    break;
                case "Right":
                    $("#TipBox").css({"top" : -(tipHeight - $(this).outerHeight())/2, "left" : $(this).outerWidth() + 8});
                    break;
                case "Bottom":
                    $("#TipBox").css({"top" : $(this).outerHeight() + 8, "left" : -(tipWidth - $(this).outerWidth())/2});
                    break;
                case "Left":
                    $("#TipBox").css({"top" : -(tipHeight - $(this).outerHeight())/2, "left" : -tipWidth - 8});
                    break;
                default:
                    break;
            }

            //显示效果
            if(opts.effect != ""){
                $("#TipBox").css({"top" : parseInt($("#TipBox").css("top"))-10}).show().animate({top:"+=10"},300);
            }else{
				$("#TipBox").fadeIn("fast");
			}

		},function(){
		    $(this).css("z-index",1);
			$("#TipBox").remove();
		});
	};
}(this, jQuery);