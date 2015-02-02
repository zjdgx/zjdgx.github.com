// JavaScript Document

/*$(".item:not(.none)").hover(function(){
	var t = this;
	$(t).removeClass("clicked").css("background-color","#fff").find("h1").hide().next().show().css("display","block");
	return false;
},function(){
	var t = this;
	$(t).css("background-color","#cdcfd1").find("h1").show().next().hide();
	return false;
}).click(function(){
	var t = this;
	$(t).addClass("clicked").css("background-color","#fff").find("h1").hide().next().show().css("display","block");
	return false;
});
*/
function colorChange(){}
colorChange.hex = "0123456789ABCDEF";

$("#colorChange input[type=button]").click(function(){
	var val = $("#colorChange input.color").val().toUpperCase(), str = "";
	if(val.indexOf("#") == 0){//十六进制
		if(colorChange.checkHexFormat(val)){
			str = val.substring(1);
			if(str.length == 3){
				$("#colorChange input:eq(1)").val(colorChange.getColorChangeResult(str, true, true));
			} else if(str.length == 6){
				$("#colorChange input:eq(1)").val(colorChange.getColorChangeResult(str, true, false));
			} else {
				alert("格式错误!");
			}
		}
	} else {//RGB
		$("#colorChange input:eq(1)").val(colorChange.getColorChangeResult(val, false, false));
	}
});

colorChange.getColorChangeResult = function(str, isHex, isShort){
	var result = "", tmp;
	if(isHex){
		if(isShort){
			result += (colorChange.changeHexToInt(str[0])*16
					+colorChange.changeHexToInt(str[0]))+","
					+(colorChange.changeHexToInt(str[1])*16
					+colorChange.changeHexToInt(str[1]))+","
					+(colorChange.changeHexToInt(str[2])*16
					+colorChange.changeHexToInt(str[2]));
		} else {
			result += (colorChange.changeHexToInt(str[0])*16
					+colorChange.changeHexToInt(str[1]))+","
					+(colorChange.changeHexToInt(str[2])*16
					+colorChange.changeHexToInt(str[3]))+","
					+(colorChange.changeHexToInt(str[4])*16
					+colorChange.changeHexToInt(str[5]));
		}
	} else {
		if(colorChange.checkRGBformat(str)){
			tmp = str.split(",");
			result = "#"+tmp[0].toHexString()
					+ tmp[1].toHexString()
					+ tmp[2].toHexString();
		} else {
			alert("请检查输入数据是否正确");
		}
	}
	return result;
}

String.prototype.toHexString = function(){
	var value = parseInt(this), result = "", left = 0;
	while(value > 15){
		left = value % 16;
		result = colorChange.changIntToHex(left)+result;
		value = Math.floor(value / 16);
	}
	if (value < 15) {
		return "0" + colorChange.changIntToHex(value);
	} else {
		return colorChange.changIntToHex(value)+result;
	}
}

colorChange.changIntToHex = function(value){
	switch(value){
		case 10: return "A";
		case 11: return "B";
		case 12: return "C";
		case 13: return "D";
		case 14: return "E";
		case 15: return "F";
		default: return value+"";
	}
}

colorChange.changeHexToInt = function(value){
	if(colorChange.hex.indexOf(value) == -1){
		return -1;
	}
	switch(value){
		case "A": return 10;
		case "B": return 11;
		case "C": return 12;
		case "D": return 13;
		case "E": return 14;
		case "F": return 15;
		default: return parseInt(value);
	}
}

String.prototype.toIntegerString = function(){
	
}

colorChange.checkRGBformat = function(str){
	if(str.length > 11){//格式错误
		return false;
	} else if(str.length < 5){
		return false;
	} else if(/\D/.test(str.replace(/\,/g,""))){
		return false;
	} else if(!/\D/.test(str.replace(/\,/g,""))
		&& str.length - str.replace(/\,/g,"").length > 2){
		return false;
	} else {
		return true;
	}
}

colorChange.checkHexFormat = function(str){
	if(str[0] == "#"){
		for(var i=1,len=str.length; i<len; i++){
			if(colorChange.hex.indexOf(str[i]) == -1){
				return false;
			}
		}
		return true;
	}
	return false;
}