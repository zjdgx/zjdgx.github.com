/**
 * AvatarUI-弹出层
 * @version	v2.0.1
 * @author	Rocky(296456018@qq.com)
 * @date	2013-04-25
 */

;!function(win, $, undefined){
	$.Dialog = function(options){
		var defaults = {
			width: 500,             //Number		宽度
			height: '',             //Number       高度
			title: '',              //String       标题
			contentDom: '',			//String       jQuery的DOM元素, '#ID_Name' || '#Class_Name'
			content:{
						text: '',	//String       html内容, '<div class="abc"></div>'
						id: ''		//String       给这段html命名的id
					},
			offsetX: 0,				//Number		x轴偏移量
			offsetY: 0,				//Number		y轴偏移量
			left: '',				//Number		距离窗口原点左边距
			top: '',				//Number		距离窗口原点上边距

			mask: true,				//Boolean		是否显示遮罩 true || false
			follow: false,			//Boolean		是否跟随元素 true || false
			hideTitle: false,		//Boolean		是否隐藏标题 true || false
			resize: true,			//Boolean		是否能改变dialog大小 true || false

			position: false,		//String		左下角:'leftBottom', 右下角:'rightBottom'
			scroll: true,			//Boolean		是否跟随滚动条滚动

			max: false,				//Boolean		最大化
			min: false,				//Boolean		最小化
			fold: false,			//Boolean		折叠
			
			autoClose: false,						//Boolean || Number	是否自动关闭, false是不自动关闭, 2(Number)代表2秒后关闭
			initCallback: function(thisDialog){},	//Function				初始化后的回调函数
			closeCallback: function(thisDialog){},	//Function				关闭后的回调函数
			closeDialogAll: false
		};
		var opt = $.extend({},defaults, options);

		//判断IE6
		var isIE6 = $.browser.msie && ($.browser.version == '6.0');
		var Dialog = {
			/**
			 * 绑定事件
			 * @param {String}	被绑定的Dialog元素
			 * @param {Number}	Dialog的z-index
			 */
			thisDialogBind: function(thisDialog, index){
				//屏幕缩放重新定位位置
				$(win).bind('resize.' + index, function(){
					if(opt.position){
						Dialog.posBottom(thisDialog);
						return;
					}
					resizeTimer && clearTimeout(resizeTimer);
					resizeTimer = setTimeout(function(){
						if(maxActive == true || minActive == true){
							Dialog.posMax(thisDialog, true);
							if(opt.follow == false){
								var _ww = $(win).width(),
									_wh = $(win).height(),
									_left,
									_top;
								_left = _ww/2 - thisDialog.attr('w')/2 + opt.offsetX;
								_left = _left > 0 ? _left : 0;

								_top = _wh/2 - thisDialog.attr('h')/2 + opt.offsetY;
								_top = _top > 0 ? _top : 0;

								thisDialog.attr({'t': _top, 'l': _left});
							}
						}else{
							Dialog.pos(thisDialog);
						}
					}, 100);
				});
				
				//屏幕滚动
				$(win).bind('scroll.' + index, function(){
					if(opt.position){
						Dialog.posBottom(thisDialog);
					}
				});

				//ESC||X 关闭
				$(document).bind('keyup.'+index, function(e){
					var e = e || win.e;
					if(e.keyCode == 27){
						Dialog.closeDialog(thisDialog);
					}
				});

				//提供对外关闭Dialog的接口
				$('.closeDialog').bind('click.'+index, function(){
					Dialog.closeDialog(thisDialog);
				});

				//重新定位
				$('.rePos').bind('click.'+index, function(){
					Dialog.pos($(this).parents('.dialog'));
				});
				
				//自动关闭
				if(opt.autoClose && typeof opt.autoClose === 'number'){
					setTimeout(function(){
						Dialog.closeDialog(thisDialog)
					}, opt.autoClose*1000);
				}
			},

			/**
			 * 创建Dialog的DOM模型
			 * @param	{String}	Dialog的id
			 * @return	{String}	Dialog的DOM模型
			 */
			createDialog: function(id){
				var fold = opt.fold == true ? '<a href="javascript:;" class="dialogFold"></a>' : '';
				var min = opt.min == true ? '<a href="javascript:;" class="dialogMin"></a>' : '';
				var max = opt.max == true ? '<a href="javascript:;" class="dialogMax"></a>' : '';
				var dom = $('<div class="dialog" id="'+id+'">'
								+'<div class="dialogTitle"><div class="dialogTitleH1">'+opt.title+'</div><a href="javascript:;" class="dialogClose">X</a>'+max+min+fold+'</div>'
								+'<div class="dialogCon"></div>'
							+'</div>');
				return dom;
			},

			/**
			 * 创建最小化DOM
			 * @param	{jQuery}	Dialog的jQuery对象
			 */
			showMinBar: function(thisDialog){
				var thisTitle = thisDialog.find('.dialogTitleH1').html();
				var thisId = thisDialog.attr('id');
				thisId = thisId.substring(thisId.lastIndexOf('_'));

				if($('#DialogMinBar').length == 0){
					$(document.body).append('<div id="DialogMinBar" class="dialogMinBar"></div>');
					if(isIE6){
						$('#DialogMinBar').animate({'top': '-=25'}, 150);
					}else{
						$('#DialogMinBar').animate({'bottom': '+=25'}, 150);
					}
				}
				var thisMin = $('<div id="DialogMinBar'+thisId+'" class="active"><a href="javascript:;">'+thisTitle+'</a><a href="javascript:;" class="dialogMinBarClose">X</a></div>');
				thisMin.appendTo('#DialogMinBar');

				thisMin.click(function(){
					if(minActive == true){
						thisDialog.show().animate({'width': thisDialog.attr('w'), 'height': thisDialog.attr('h'), 'top': thisDialog.attr('t'), 'left': thisDialog.attr('l')}, 150);
						thisMin.addClass('active');
						minActive = false;
					}else{
						Dialog.posMin(thisDialog);
						minActive = true;
					}
				});

				thisMin.find('.dialogMinBarClose').click(function(e){
					e.stopPropagation();
					Dialog.closeDialog(thisDialog);
				});
			},

			/**
			 * Dialog的位置中心定位
			 * @param	{jQuery}	Dialog的jQuery对象
			 */
			pos: function(thisDialog){
				//定位位置
				if(opt.position){
					Dialog.posBottom(thisDialog);
					return;
				}

				var _wt = $(win).scrollTop(),
					_wl = $(win).scrollLeft(),
					_ww = $(win).width(),
					_wh = $(win).height(),
					_left,
					_top,
					_width,
					_height;

				thisDialog.css('z-index', parseInt(new Date().getTime() / 1000));
				if(thisDialog.attr('resize') == undefined){
					thisDialog.width(opt.width);
					_width = opt.width;
				}else{
					_width = thisDialog.width();
				}
				thisDialog.show();

				if(thisDialog.attr('resize') == undefined){
					if(opt.height != ''){
						_height = opt.height;
						thisDialog.find('.dialogCon').height(_height - thisDialog.find('.dialogTitle').outerHeight() - 22);
					}else{
						_height = thisDialog.find('.dialogCon').outerHeight() + thisDialog.find('.dialogTitle').outerHeight();
					}
				}else{
					_height = thisDialog.height();
				}

				thisDialog.css('height', _height);

				if(opt.follow != false){
					_left = $(opt.follow).offset().left + opt.offsetX;
					_top = $(opt.follow).offset().top + $(opt.follow).outerHeight() + opt.offsetY;
					thisDialog.css('position', 'absolute');
				}else{
					if(opt.left != ''){
						_left = opt.left;
					}else{
						_left = _ww/2 - _width/2 + opt.offsetX;
						_left = _left > 0 ? _left : 0;
					}

					if(opt.top != ''){
						_top = opt.top;
					}else{
						_top = _wh/2 - _height/2 + opt.offsetY;
						//黄金分割线位置
						//var _top = _wh*0.382 - _height/2 + opt.offsetY;
						_top = _top > 0 ? _top : 0;
					}

					if(isIE6 || opt.scroll == false){
						_left += _wl;
						_top += _wt;
						thisDialog.css('position', 'absolute');
					}
				}

				thisDialog.attr({'w': _width, 'h': _height, 't': _top, 'l': _left});
				
				if(maxActive == true){
					thisDialog.animate({'left': _left, 'top': _top}, 150);
				}else{
					thisDialog.css({'left': _left, 'top': _top});
				}
			},

			/**
			 * Dialog的位置中心定位
			 * @param	{jQuery}	Dialog的jQuery对象
			 */
			posBottom: function(thisDialog){
				var _wt = $(win).scrollTop(),
					_wl = $(win).scrollLeft(),
					_ww = $(win).width(),
					_wh = $(win).height(),
					_left,
					_top,
					_width,
					_height;

				thisDialog.css('z-index', parseInt(new Date().getTime() / 1000));
				thisDialog.width(opt.width);
				_width = opt.width;
				thisDialog.show();
				_height = opt.height ? opt.height : thisDialog.find('.dialogCon').outerHeight() + thisDialog.find('.dialogTitle').outerHeight();
				thisDialog.css('height', _height);

				if(opt.position == 'rightBottom'){
					_left = _ww - _width - 4 + opt.offsetX;
				}else if(opt.position == 'leftBottom'){
					_left = 0 + opt.offsetX;
				}
				_top = _wh - _height - 2 + opt.offsetY;

				if(isIE6){
					_left += _wl;
					_top += _wt;
					thisDialog.css('position', 'absolute');
				}

				thisDialog.css({'left': _left, 'top': _top});
			},

			/**
			 * 最大化
			 */
			posMax: function(thisDialog, noAnimate){
				var _wt = $(win).scrollTop(),
					_wl = $(win).scrollLeft(),
					_ww = $(win).width(),
					_wh = $(win).height(),
					_top = 0,
					_left = 0;
				
				if(isIE6 || opt.follow != false || opt.scroll == false){
					_top = _wt;
					_left = _wl;
				}

				if(noAnimate == true){
					thisDialog.css({'width': _ww - 2, 'height': _wh - 2, 'top': _top, 'left': _left});
				}else{
					thisDialog.animate({'width': _ww - 2, 'height': _wh - 2, 'top': _top, 'left': _left}, 150);
				}
			},

			/**
			 * 最小化
			 */
			posMin: function(thisDialog){
				var _wt = $(win).scrollTop(),
					_wl = $(win).scrollLeft(),
					barTop, barLeft, _top, _left,
					thisDialogId = thisDialog.attr('id');
					thisDialogId = thisDialogId.substring(thisDialogId.lastIndexOf('_'));

				$('#DialogMinBar').find('div').each(function(){
					var minBarId = $(this).attr('id');
					minBarId = minBarId.substring(minBarId.lastIndexOf('_'));

					if(minBarId == thisDialogId){
						barTop = $(this).offset().top;
						barLeft = $(this).offset().left;

						$(this).removeClass('active');
						return false;
					}
				});
				
				if(isIE6 || opt.follow != false || opt.scroll == false){
					_top = barTop;
					_left = barLeft;
				}else{
					_top = barTop - _wt;
					_left = barLeft - _wl;
				}
				thisDialog.animate({'width': 0, 'height': 0, 'left': _left, 'top': _top},300, function(){thisDialog.hide();});
			},

			/**
			 * 创建遮罩
			 */
			mask: function(){
				var _dh = $(document).height();
				$(document.body).append('<div class="dialogMask" id="DialogMask"></div>');
				$('#DialogMask').css({'position': 'absolute', 'height': _dh}).show();
				if(isIE6){
					$('#DialogMask').append('<iframe scrolling="no" frameborder="0" id="DialogIframe" style="width:100%; filter:alpha(opacity=20);"></iframe>');
					$('#DialogIframe').css({'height': _dh});
				};
			},

			/**
			 * 关闭Dialog
			 * @param	{jQuery}	Dialog的jQuery对象
			 */
			closeDialog: function(thisDialog){
				var thisId = thisDialog.attr('id');
				var thisIndex = thisId.substring(thisId.lastIndexOf('_')+1);
				$(win).unbind('.'+thisIndex);
				$(document).unbind('.'+thisIndex);
				$('.closeDialog').unbind('.'+thisIndex);
				$('.rePos').unbind('.'+thisIndex);

				$('#DialogMask').remove();
				
				
				if(opt.position){
					thisDialog.animate({'top': '+='+thisDialog.outerHeight()}, 150, function(){thisDialog.remove();});
				}else{
					thisDialog.hide();
				}
				
				opt.closeDialogAll && thisDialog.remove();
				
				opt.closeCallback(thisDialog);

				$('#DialogMinBar_'+thisIndex).remove();
				if($('#DialogMinBar').html() == ''){
					if(isIE6){
						$('#DialogMinBar').animate({'top': '+=25'}, 150, function(){$('#DialogMinBar').remove();});
					}else{
						$('#DialogMinBar').animate({'bottom': '-=25'}, 150, function(){$('#DialogMinBar').remove();});
					}
				}
			},

			maxBtn: function(thisDialog){
				thisDialog.find('.dialogMax').click(function(){
					if(maxActive == false){
						Dialog.posMax(thisDialog);
						$(this).addClass('dialogMaxActive');
						thisDialog.find('.dialogFold').removeClass('dialogFoldActive').addClass('dialogFoldDisable');
						thisDialog.find('.dialogCon').show();
						thisDialog.find('.dialogMin').addClass('dialogMinDisable');
						maxActive = true;
					}else{
						thisDialog.animate({'width': thisDialog.attr('w'), 'height': thisDialog.attr('h'), 'top': thisDialog.attr('t'), 'left': thisDialog.attr('l')}, 150);
						$(this).removeClass('dialogMaxActive');
						thisDialog.find('.dialogFold').removeClass('dialogFoldDisable');
						thisDialog.find('.dialogMin').removeClass('dialogMinDisable');
						foldActive = false;
						maxActive = false;
					}
				});
			},

			minBtn: function(thisDialog){
				Dialog.showMinBar(thisDialog);
				thisDialog.find('.dialogMin').click(function(){
					if(minActive == false){
						Dialog.posMin(thisDialog);
						minActive = true;
					}
				});
			},

			foldBtn: function(thisDialog){
				thisDialog.find('.dialogFold').click(function(){
					if($(this).hasClass('dialogFoldDisable')){
						return;
					}
					if(foldActive == false){
						thisDialog.animate({'height':thisDialog.find('.dialogTitle').outerHeight()}, 150, function(){thisDialog.find('.dialogCon').hide();});
						$(this).addClass('dialogFoldActive');
						foldActive = true;
					}else{
						thisDialog.animate({'height': thisDialog.find('.dialogCon').outerHeight() + thisDialog.find('.dialogTitle').outerHeight()}, 150, function(){thisDialog.find('.dialogCon').show();});
						$(this).removeClass('dialogFoldActive');
						foldActive = false;
					}
				});
			},

			resize: function(){
				thisDialog.append('<div class="dialogResize"></div>');
				var _drag = false, _x, _y, cw, ch, sw, sh;
				thisDialog.find('.dialogResize').mousedown(function(e){
					_drag = true;
					_x = e.pageX;
					_y = e.pageY;

					var thisDialogCon = thisDialog.find('.dialogCon');

					var dw = thisDialog.width(),
						dh = thisDialog.height(),
						dl = thisDialog.css('left'),
						dt = thisDialog.css('top');
					dl = dl.substring(0, dl.lastIndexOf('px'));
					dt = dt.substring(0, dt.lastIndexOf('px'));

					var cw = thisDialogCon.width();
					var ch = thisDialogCon.height();

					thisDialog.attr('resize', true);

					//IE下鼠标超出视口仍可被监听
					document.body.setCapture && thisDialog[0].setCapture(); 
					
					$(document).mousemove(function(e){
						//禁止拖放对象文本被选择的方法
						win.getSelection ? win.getSelection().removeAllRanges() : document.selection.empty(); 
						if (_drag) {
							var x = e.pageX - _x;
							var y = e.pageY - _y;
							
							thisDialog.css({
								height: dh + y,
								width: dw + x
							});
						}
					}).mouseup(function(){
						_drag = false;
						document.body.releaseCapture && thisDialog[0].releaseCapture();
					});
				});
			},

			/**
			 * Dialog拖动
			 * @param	{jQuery}	控制Dialog的拖动的jQuery对象
			 * @param	{jQuery}	Dialog的jQuery对象
			 * @param	{Boolean}	是否跟随元素显示
			 */
			drag: function(control, dom, follow){
				var _drag = false, _x, _y, cw, ch, sw, sh;
				control.css('cursor', 'move');
				control.mousedown(function(e){
					_drag = true;
					_x = e.pageX - parseInt(dom.css('left'));
					_y = e.pageY - parseInt(dom.css('top'));

					cw = $(win).width();
					ch = $(win).height();
					sw = parseInt(dom.outerWidth());
					sh = parseInt(dom.outerHeight());

					//IE下鼠标超出视口仍可被监听
					document.body.setCapture && dom[0].setCapture(); 
					
					$(document).mousemove(function(e){
						//禁止拖放对象文本被选择的方法
						//win.getSelection ? win.getSelection().removeAllRanges() : document.selection.empty();
						if(_drag){
							var x = e.pageX - _x,
								y = e.pageY - _y;
							x = x < 0 ? 0 : x < (cw-sw) ? x : (cw-sw);
							if(follow == false){
								if(!isIE6){
									y = y < 0 ? 0 : y < (ch-sh) ? y : (ch-sh);
								}
							}
							x = x < 0 ? 0 : x;
							y = y < 0 ? y = 0 : y;
							dom.css({
								top: y,
								left: x
							});
						}
					}).mouseup(function(){
						control.removeClass('dialogTitleDrag');
						_drag = false;
						document.body.releaseCapture && dom[0].releaseCapture();
					});
				});
			}
		};

		//屏幕缩放定时器
		var resizeTimer;
		
		//最大化最小化和折叠
		var maxActive = false,
			minActive = false,
			foldActive = false;
		
		//判断是content的内容是dom还是html
		var isDom = opt.contentDom != '';

		//获得dialog的jQuery元素和是否存在
		var thisDialog, thisFlag, dialogIndex;
		
		if(isDom){
			thisDialog = $(opt.contentDom);
			thisFlag = thisDialog.attr('dialog');
			if(thisFlag){
				thisFlag = true;
				dialogIndex = thisDialog.attr('dialog');
			}else{
				thisFlag = false;
			}
		}else{
			thisDialog = $('#Dialog_' + opt.content.id);
			dialogIndex = opt.content.id;
			if(thisDialog.length > 0){
				thisFlag = true;
			}else{
				thisFlag = false;
			}
		}
		
		//如果存在Dialog, 显示,添加遮罩,添加事件
		if(thisFlag){
			var _thisDialog = $('#Dialog_' + dialogIndex);
			Dialog.pos(_thisDialog);
			opt.min && Dialog.showMinBar(thisDialog);
			opt.mask && Dialog.mask();
			Dialog.thisDialogBind(_thisDialog, dialogIndex);
			opt.initCallback(_thisDialog);
			return;
		}
		
		/*------ 实现方法开始 ------*/
		//创建随机数
		var maxN = parseInt(new Date().getTime() / 1000);
		if(isDom){
			//创建DOM模型
			$(document.body).append(Dialog.createDialog('Dialog_'+maxN));
			thisDialog = $('#Dialog_'+maxN);

			//把内容植入弹出层中
			$(opt.contentDom).show().attr('dialog', maxN);
			$(opt.contentDom).appendTo(thisDialog.find('.dialogCon'));
		}else{
			//创建DOM模型
			$(document.body).append(Dialog.createDialog('Dialog_'+opt.content.id));
			thisDialog = $('#Dialog_'+opt.content.id);
			thisDialog.find('.dialogCon').html('<div>'+opt.content.text+'</div>');
		}
		
		//是否显示标题
		opt.hideTitle && thisDialog.find('.dialogTitle').remove();

		//确定显示位置
		Dialog.pos(thisDialog);

		//绑定事件
		isDom ? Dialog.thisDialogBind(thisDialog, maxN) : Dialog.thisDialogBind(thisDialog, opt.content.id);

		//关闭按钮事件
		thisDialog.find('.dialogClose').bind('click', function(){
			Dialog.closeDialog(thisDialog);
		});

		//Dialog按下的时候改变z轴大小
		thisDialog.bind('mousedown', function(){
			thisDialog.css('z-index', parseInt(new Date().getTime() / 1000));
		});
		
		//最大化按钮
		opt.max && Dialog.maxBtn(thisDialog);
		
		//最小化按钮
		opt.min && Dialog.minBtn(thisDialog);
		
		//折叠按钮
		opt.fold && Dialog.foldBtn(thisDialog);
		
		//拖放
		opt.resize && Dialog.resize(thisDialog);

		//添加遮罩
		opt.mask && Dialog.mask();
		
		//实现拖动
		!opt.position && Dialog.drag(thisDialog.find('.dialogTitle'), thisDialog, opt.follow);

		//初始化回调
		opt.initCallback(thisDialog);
		/*------------ 实现方法结束 ------------*/
	};
}(this, jQuery);