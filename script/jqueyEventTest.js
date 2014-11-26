// JavaScript Document
//Code highlighting produced by Actipro CodeHighlighter (freeware)http://www.CodeHighlighter.com/-->//事件执行监测
/**
 * 2013-12-02
 * jquery事件执行检测
 */
function eventsMonitor(op){
    var defaultSetting = {
        eventsStr: "click focus blur",
        splitStr: " ",
        css:{
            "border":"1px red solid",
            "z-index":9000000,
            "background":"white",
            "position":"absolute",
            width:400,
            height:200,
            "overflow-x":"hidden",
            "overflow-y":"auto"
        }
    };
    var ops = $.extend(true,defaultSetting,op); 
    $('<div id="DivForLogEvents"><div></div><div>').appendTo("body").css(ops.css);
    var $infolog = $("#DivForLogEvents div:eq(0)");
    $.each(ops.eventsStr.split(ops.splitStr),function(i,v){
        if(v != 'resize')
            $("*:not('#DivForLogEvents')").bind(v, function(e){                
                if(!$(e.target).is("#DivForLogEvents") && !$(e.target).is($infolog)){
                    $infolog.append((e.target.nodeName||" ") + "->" + (e.target.id||e.target.Name||" ") + " "+v+" event!<br>");
                    $("#DivForLogEvents:not(:animated)").animate({scrollTop:$infolog.height()},300);
                }
            });
        else
            $(window).bind('resize', function(e){                
                if(!$(e.target).is("#DivForLogEvents") && !$(e.target).is($infolog)){
                    $infolog.append((e.target.nodeName||" ") + "->" + (e.target.id||e.target.Name||" ") + " "+v+" event!<br>");
                    $("#DivForLogEvents:not(:animated)").animate({scrollTop:$infolog.height()},300);
                }
            });
    });
}