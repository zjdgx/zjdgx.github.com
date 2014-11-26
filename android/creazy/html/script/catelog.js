/**
 * android疯狂讲义 目录
 * @author: zjdgx
 */
 
function creazyAndroidCatelog(){};
 
creazyAndroidCatelog.catelog = [
	{"name":"第2章 Android应用的界面编程","url":"chap2"},
	{"name":"第3章 事件处理","url":"chap3"}
];

creazyAndroidCatelog.chap2 = [
	{"name":"2.4 高级界面组件","url":"section2_4"},
	{"name":"2.5 对话框","url":"section2_5"},
	{"name":"2.6 消息提示","url":"section2_6"},
	{"name":"2.7 菜单","url":"section2_7"}
];
creazyAndroidCatelog.chap3 = [
	{"name":"3.1 android事件处理","url":"section3_1"},
	{"name":"3.2 基于监听的事件处理","url":"section3_2"},
	{"name":"3.3 基于回调的事件处理","url":"section3_3"},
	{"name":"3.4 响应系统设置的事件","url":"section3_4"}
];

/** chapter 2 started
--------------------------------------------------------------*/
creazyAndroidCatelog.section2_4=[
	{"name":"2.4.11 网格视图(GridView)和图像切换器(ImageSwitcher)的功能和用法(P118)","url":"../html/chap2/chap2_2.4.11_p118_gridView_imageSwitcher.html"},
	{"name":"2.4.12 画廊视图(Gallery)的功能和用法(P121)","url":"../html/chap2/chap2_2.4.12_p121_gallery.html"}
];

creazyAndroidCatelog.section2_5=[
	{"name":"2.5.1 使用AlertDialog创建简单对话框(P124)","url":"../html/chap2/chap2_2.5.1_p124_alertDialog.html"},
	{"name":"2.5.2 使用AlertDialog创建列表对话框(P126)","url":"../html/chap2/chap2_2.5.2_p126_alertDialog.html"},
	{"name":"2.5.3 使用AlertDialog创建自定义对话框(P131)","url":"../html/chap2/chap2_2.5.3_p131_alertDialog.html"},
	{"name":"2.5.4 使用PopupWindow(P136)","url":"../html/chap2/chap2_2.5.4_p136_PopupWindow.html"},
	{"name":"2.5.5 使用DatePickerDialog、TimePickerDialog(P137)","url":"../html/chap2/chap2_2.5.5_p137_Date_TimePickerDialog.html"},
	{"name":"2.5.6 使用ProgressDialog创建进度对话框(P139)","url":"../html/chap2/chap2_2.5.6_p139_ProgressDialog.html"}
	
];

creazyAndroidCatelog.section2_6=[
	{"name":"2.6.1 使用Toast显示提示信息框(P142)","url":"../html/chap2/chap2_2.6.1_p142_ToastDialog.html"},
	{"name":"2.6.2 Notification的功能与用法(P143)","url":"../html/chap2/chap2_2.6.2_p143_Notification.html"}
];

creazyAndroidCatelog.section2_7=[
	{"name":"2.7.1 选项菜单和子菜单(SubMenu)(P146)","url":"../html/chap2/chap2_2.7.1_p146_menu.html"},
	{"name":"2.7.2 使用监听器来监听菜单事件(P150)","url":"../html/chap2/chap2_2.7.2_p150_menuListener.html"},
	{"name":"2.7.3 创建复选菜单项和单选菜单项(P152)","url":"../html/chap2/chap2_2.7.3_p152_CheckableMenu.html"},
	{"name":"2.7.4 设置与菜单项关联的Activity(P154)","url":"../html/chap2/chap2_2.7.4_p154_ActivityMenu.html"},
	{"name":"2.7.5 上下文菜单(P155)","url":"../html/chap2/chap2_2.7.5_p155_ContextMenu.html"}	
];
/*--chapter 2 end----------------------------------------------*/

/** chapter 3 started
--------------------------------------------------------------*/
creazyAndroidCatelog.section3_1=[
	{"name":"3.1 android事件处理(P159)","url":"../html/chap3/chap3_1_p159_event.html"}
];
creazyAndroidCatelog.section3_2=[
	{"name":"3.2.1 事件监听的处理模型(P159)","url":"../html/chap3/chap3_3.2.1_p159_EventListener.html"},
	{"name":"3.2.2 事件和事件监听器(P162)","url":"../html/chap3/chap3_3.2.2_p162_EventAndEventListener.html"},
	{"name":"3.2.3 内部类作为事件监听器(P165)","url":"../html/chap3/chap3_3.2.2_p162_EventAndEventListener.html"},
	{"name":"3.2.4 外部类作为事件监听器(P166)","url":"../html/chap3/chap3_3.2.2_p162_EventAndEventListener.html"},
	{"name":"3.2.5 Activity本身作为事件监听器(P168)","url":"../html/chap3/chap3_3.2.2_p162_EventAndEventListener.html"},
	{"name":"3.2.6 匿名内部类作为事件监听器类(P168)","url":"../html/chap3/chap3_3.2.2_p162_EventAndEventListener.html"},
	{"name":"3.2.7 直接绑定到标签(P169)","url":"../html/chap3/chap3_3.2.2_p162_EventAndEventListener.html"}
];
creazyAndroidCatelog.section3_3=[
	{"name":"3.3.1 回调机制与监听机制(P170)","url":"../html/chap3/chap3_3.3.1_p170_EventCallback.html"},
	{"name":"3.3.2 基于回调的事件传播(P172)","url":"../html/chap3/chap3_3.3.1_p170_EventCallback.html"},
	{"name":"3.3.3 重写onTouchEvent方法响应触摸屏事件","url":"../html/chap3/chap3_3.3.1_p170_EventCallback.html"}];
	
creazyAndroidCatelog.section3_4=[
	{"name":"3.3.1 回调机制与监听机制(P170)","url":"../html/chap3/chap3_3.4.1_p176_Configuration.html"}
];
/*--chapter 3 end----------------------------------------------*/
creazyAndroidCatelog.setCatelog = function( element, name ) {
	if( creazyAndroidCatelog[name] != undefined ) {
		var data = creazyAndroidCatelog[name], doc = document;
		for(var i=0; i<data.length; i++) {
			var option = doc.createElement("option");
			option.setAttribute("value",data[i].url);
			option.innerHTML = data[i].name;
			try {
				element.add(option, null);
			} catch(ex) {// for IE
				element.add(option);
			}
		}
	}
}