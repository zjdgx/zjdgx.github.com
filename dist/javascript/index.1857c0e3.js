webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _app = __webpack_require__(158);

	var _app2 = _interopRequireDefault(_app);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//require('./style/home.styl');

	_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.querySelector('div.wrapper')); /**
	                                                                                                                       * Author: ZJDGX
	                                                                                                                       * Date: 2016/04/01
	                                                                                                                       * Description: react webpack home page
	                                                                                                                       */

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _navContent = __webpack_require__(160);

	var _navContent2 = _interopRequireDefault(_navContent);

	var _OneNoteNav = __webpack_require__(177);

	var _OneNoteNav2 = _interopRequireDefault(_OneNoteNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: ZJDGX
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2016/04/01
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Description: react webpack home page
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var APPView = function (_React$Component) {
	   _inherits(APPView, _React$Component);

	   function APPView() {
	      _classCallCheck(this, APPView);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(APPView).call(this));

	      _this.state = {
	         contentUrl: _navContent2.default[0].contents[0].url
	      };
	      return _this;
	   }

	   _createClass(APPView, [{
	      key: 'setContentUrl',
	      value: function setContentUrl(url) {
	         this.setState({ contentUrl: url });
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         return _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(_OneNoteNav2.default, { setContentUrl: this.setContentUrl.bind(this), NavList: _navContent2.default }),
	            _react2.default.createElement('iframe', { src: this.state.contentUrl, frameBorder: '0', scrolling: '0', marginHeight: '0', marginWidth: '0' })
	         );
	      }
	   }]);

	   return APPView;
	}(_react2.default.Component);

	exports.default = APPView;

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _css = __webpack_require__(161);

	var _css2 = _interopRequireDefault(_css);

	var _html = __webpack_require__(162);

	var _html2 = _interopRequireDefault(_html);

	var _mobile = __webpack_require__(163);

	var _mobile2 = _interopRequireDefault(_mobile);

	var _javascript = __webpack_require__(164);

	var _javascript2 = _interopRequireDefault(_javascript);

	var _java = __webpack_require__(165);

	var _java2 = _interopRequireDefault(_java);

	var _nodejs = __webpack_require__(166);

	var _nodejs2 = _interopRequireDefault(_nodejs);

	var _android = __webpack_require__(167);

	var _android2 = _interopRequireDefault(_android);

	var _mysql = __webpack_require__(168);

	var _mysql2 = _interopRequireDefault(_mysql);

	var _mongodb = __webpack_require__(169);

	var _mongodb2 = _interopRequireDefault(_mongodb);

	var _react = __webpack_require__(170);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(171);

	var _redux2 = _interopRequireDefault(_redux);

	var _backbone = __webpack_require__(172);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _gulp = __webpack_require__(173);

	var _gulp2 = _interopRequireDefault(_gulp);

	var _grunt = __webpack_require__(174);

	var _grunt2 = _interopRequireDefault(_grunt);

	var _webpack = __webpack_require__(175);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _tools = __webpack_require__(176);

	var _tools2 = _interopRequireDefault(_tools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// tools


	// backend
	/**
	 * Author: ZJDGX
	 * Date: 2016/04/07 14:52
	 * Description: react webpack home page
	 */

	// frontend


	var database = [].concat(_mysql2.default, _mongodb2.default);

	// framework


	// database

	var tools = [].concat(_tools2.default, _gulp2.default, _grunt2.default, _webpack2.default);
	var backend = [].concat(_java2.default, _android2.default, _nodejs2.default);
	var frontend = [].concat(_css2.default, _html2.default, _mobile2.default, _javascript2.default);
	var framework = [].concat(_backbone2.default, _react2.default, _redux2.default);

	var navContent = [].concat(frontend, tools, framework, backend, database);

	for (var i = 0, len = navContent.length; i < len; i++) {
	   if (navContent[i].contents.length == 0) {
	      navContent.splice(i, 1);
	      len -= 1;
	      i -= 1;
	   }
	}

	exports.default = navContent;

/***/ },

/***/ 161:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var css = {
		title: 'CSS',
		contents: [{
			title: '页面布局',
			date: '2016-01-19',
			url: 'static/notes/css/layout.html'
		}, {
			title: 'placeholder颜色',
			date: '2016-01-12',
			url: 'static/notes/css/placeholder-color.html'
		}, {
			title: '去掉链接虚线框',
			date: '2016-01-05',
			url: 'static/notes/css/clearDottedBox.html'
		}, {
			title: 'CSS基础',
			date: '2013-12-04',
			url: 'static/notes/css/cssBasicKnowledge.html'
		}]
	};

	exports.default = css;

/***/ },

/***/ 162:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var html = {
		title: 'HTML',
		contents: [{
			title: 'Canvas抽奖游戏',
			date: '2016-03-21',
			url: 'static/notes/html/lottery.html'
		}]
	};

	exports.default = html;

/***/ },

/***/ 163:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var mobile = {
		title: 'Mobile',
		contents: [{
			title: '移动开发中事件触发顺序',
			date: '2015-08-25',
			url: 'static/notes/mobile/event-trigger-sequence-in-mobile.html'
		}]
	};

	exports.default = mobile;

/***/ },

/***/ 164:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var javascript = {
		title: 'Javascript',
		contents: [{
			title: 'LocalStorage, SessionStorage',
			date: '2016-05-08',
			url: 'static/notes/javascript/storage.html'
		}, {
			title: 'Nodejs WebSocket',
			date: '2016-03-24',
			url: 'static/notes/javascript/websocket_node.html'
		}, {
			title: 'JavaScript 开发者年度调查报告',
			date: '2016-02-18',
			url: 'static/notes/javascript/javascript年度调查报告(2015).html'
		}, {
			title: 'Promise基础',
			date: '2016-02-18',
			url: 'static/notes/javascript/promise.html'
		}, {
			title: 'Cross Domain',
			date: '2016-02-02',
			url: 'static/notes/javascript/cross-domain.html'
		}, {
			title: 'ES2015',
			date: '2016-01-05',
			url: 'static/notes/javascript/es2015.html'
		}, {
			title: '用JavaScript将数字转换为大写金额',
			date: '2016-01-19',
			url: 'static/notes/javascript/number2moneyUppercase.html'
		}, {
			title: '删除数组重复元素',
			date: '2014-07-02',
			url: 'static/notes/javascript/deleteRepeatArr.html'
		}, {
			title: 'JavaScript十进制转十六进制',
			date: '2014-03-27',
			url: 'static/notes/javascript/tenToHex.html'
		}, {
			title: 'JavaScript拖拽',
			date: '2013-12-18',
			url: 'static/notes/javascript/drag_drop.html'
		}, {
			title: 'AJAX JSONP',
			date: '2013-12-02',
			url: 'static/notes/javascript/ajax_jsonp.html'
		}, {
			title: '通用事件绑定',
			date: '2013-09-22',
			url: 'static/notes/javascript/events-binding.html'
		}, {
			title: '数组方法',
			date: '2013-09-22',
			url: 'static/notes/javascript/array-functions.html'
		}]
	};

	exports.default = javascript;

/***/ },

/***/ 165:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var java = {
		title: 'java',
		contents: []
	};

	exports.default = java;

/***/ },

/***/ 166:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var nodejs = {
		title: 'Nodejs',
		contents: [{
			title: '删除node_modules文件夹',
			date: '2016-03-30',
			url: 'static/notes/nodejs/deleteNodeModules.html',
			des: '删除node_modules文件夹'
		}, {
			title: 'Node Express开发步骤',
			date: '2015-03-09',
			url: 'static/notes/nodejs/nodeExpressRequirements.html',
			des: 'Node Express开发步骤'
		}, {
			title: 'Nodejs文件下载',
			date: '2015-03-23',
			url: 'static/notes/nodejs/nodeFileDownload.html',
			des: 'Nodejs文件下载'
		}, {
			title: '使用Nodejs读写Redis数据',
			date: '2015-03-09',
			url: 'static/notes/nodejs/nodeRedis.html',
			des: '使用Nodejs读写Redis数据'
		}, {
			title: '高性能Nodejs',
			date: '2015-03-04',
			url: 'static/notes/nodejs/highPerformanceNode.html',
			des: '高性能Nodejs'
		}]
	};

	exports.default = nodejs;

/***/ },

/***/ 167:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var android = {
		title: 'android',
		contents: []
	};

	exports.default = android;

/***/ },

/***/ 168:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var mysql = {
		title: 'MySQL',
		contents: [{
			title: 'MySQL开发Note',
			date: '2013-09-22',
			url: 'static/notes/mysql/notes.html',
			des: 'MySQL开发Note'
		}]
	};

	exports.default = mysql;

/***/ },

/***/ 169:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var mongodb = {
		title: 'MongoDB',
		contents: [{
			title: 'MongoDB开发Note',
			date: '2013-09-22',
			url: 'static/notes/mongodb/notes.html',
			des: 'MongoDB开发Note'
		}]
	};

	exports.default = mongodb;

/***/ },

/***/ 170:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var react = {
		title: 'React',
		contents: [{
			title: 'react canvas avatar',
			date: '2016-05-21',
			url: 'static/notes/react/canvasUpload.html',
			des: 'react canvas头像上传'
		}, {
			title: 'React开发笔记',
			date: '2016-04-14',
			url: 'static/notes/tools/react_notes.html',
			des: 'react开发笔记'
		}]
	};

	exports.default = react;

/***/ },

/***/ 171:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var redux = {
		title: 'Redux',
		contents: [{
			title: 'redux开发笔记',
			date: '2016-01-13',
			url: 'static/notes/redux/redux-notes.html',
			des: 'redux开发笔记'
		}, {
			title: 'redux router',
			date: '2016-01-13',
			url: 'static/notes/redux/redux-router.html',
			des: 'redux-router'
		}]
	};

	exports.default = redux;

/***/ },

/***/ 172:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var backbone = {
		title: 'Backbone',
		contents: []
	};

	exports.default = backbone;

/***/ },

/***/ 173:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var gulp = {
		title: 'Gulp',
		contents: [{
			title: 'gulp、grunt对require配置比较',
			date: '2015-08-21',
			url: 'static/notes/tools/gulp-grunt-require.html',
			des: 'gulp、grunt对require配置比较'
		}]
	};

	exports.default = gulp;

/***/ },

/***/ 174:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var grunt = {
		title: 'Grunt',
		contents: [{
			title: 'gulp、grunt对require配置比较',
			date: '2015-08-21',
			url: 'static/notes/tools/gulp-grunt-require.html',
			des: 'gulp、grunt对require配置比较'
		}]
	};

	exports.default = grunt;

/***/ },

/***/ 175:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var webpack = {
		title: 'Webpack',
		contents: [{
			title: 'Webpack introduction',
			date: '2016-03-22',
			url: 'static/notes/tools/webpack-introduction.html'
		}, {
			title: 'Webpack概述',
			date: '2016-02-26',
			url: 'static/notes/tools/webpack.html',
			des: 'Webpack概述'
		}]
	};

	exports.default = webpack;

/***/ },

/***/ 176:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var tools = {
		title: 'Tools',
		contents: [{
			title: '使用tar打包多个目录',
			date: '2016-05-31',
			url: 'static/notes/tools/tar.html'
		}, {
			title: 'Git命令行',
			date: '2016-05-26',
			url: 'static/notes/tools/git.html'
		}, {
			title: '2015: 前端工具现状',
			date: '2016-01-20',
			url: 'static/notes/tools/web-tool-2015.html'
		}]
	};

	exports.default = tools;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Utils = __webpack_require__(178);

	var _PageStyle = __webpack_require__(179);

	var _PageStyle2 = _interopRequireDefault(_PageStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: ZJDGX
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2016/05/22 18:52
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Description: react home page nav list content item
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	__webpack_require__(184);

	var OneNoteNav = function (_React$Component) {
	   _inherits(OneNoteNav, _React$Component);

	   function OneNoteNav(props) {
	      _classCallCheck(this, OneNoteNav);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OneNoteNav).call(this, props));

	      _this.state = {
	         curIndex: 0,
	         contentIndex: 0,
	         curContent: props.NavList[0]
	      };
	      return _this;
	   }

	   _createClass(OneNoteNav, [{
	      key: 'changeNavContent',
	      value: function changeNavContent(type, index) {
	         var cur = this.props.NavList.find(function (item, index) {
	            return item.title == type;
	         });

	         this.setState({
	            curIndex: index,
	            curContent: cur,
	            contentIndex: 0
	         });

	         this.props.setContentUrl(cur.contents[0].url);
	      }
	   }, {
	      key: 'changeContent',
	      value: function changeContent(url, index) {
	         this.setState({ contentIndex: index });
	         this.props.setContentUrl(url);
	      }
	   }, {
	      key: 'changePageStyle',
	      value: function changePageStyle(style) {
	         document.querySelector('body').className = style + '-style';
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         var _this2 = this;

	         return _react2.default.createElement(
	            'div',
	            { className: 'left-sidebar style-bg' },
	            _react2.default.createElement(
	               'div',
	               { className: 'profile' },
	               _react2.default.createElement('img', { className: 'avatar', src: 'static/image/logo.png', width: '100', height: '100' }),
	               _react2.default.createElement(
	                  'p',
	                  null,
	                  '   QQ: 373687921'
	               ),
	               _react2.default.createElement(
	                  'p',
	                  null,
	                  'Phone: 13540273364'
	               )
	            ),
	            _react2.default.createElement(_PageStyle2.default, { styles: this.props.styles, styleIndex: 4, changePageStyle: this.changePageStyle.bind(this) }),
	            _react2.default.createElement(
	               'ul',
	               { className: 'nav-list style-bg' },
	               this.props.NavList.map(function (item, index) {
	                  return _react2.default.createElement(
	                     'li',
	                     { className: 'nav-item' + (_this2.state.curIndex == index ? ' sub-nav-bg' : ''),
	                        onClick: _this2.changeNavContent.bind(_this2, item.title, index) },
	                     item.title
	                  );
	               })
	            ),
	            _react2.default.createElement(
	               'ul',
	               { className: 'nav-content sub-nav-bg' },
	               this.state.curContent.contents.map(function (item, index) {
	                  return _react2.default.createElement(
	                     'li',
	                     { key: index,
	                        title: item.title,
	                        className: _this2.state.contentIndex == index ? 'cur' : '',
	                        onClick: _this2.changeContent.bind(_this2, item.url, index) },
	                     item.title
	                  );
	               })
	            )
	         );
	      }
	   }]);

	   return OneNoteNav;
	}(_react2.default.Component);

	OneNoteNav.defaultProps = {
	   styles: ['gray', 'deep-green', 'deep-blue', 'red', 'sky-blue', 'magenta', 'yellow', 'purple', 'pink', 'light-green']
	};
	exports.default = OneNoteNav;
	;

/***/ },

/***/ 178:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.arrayFind = arrayFind;
	function arrayFind(array, value) {
	    if (!Array.prototype.find) {
	        Array.prototype.find = function (predicate) {
	            if (this === null) {
	                throw new TypeError('Array.prototype.find called on null or undefined');
	            }
	            if (typeof predicate !== 'function') {
	                throw new TypeError('predicate must be a function');
	            }
	            var list = Object(this);
	            var length = list.length >>> 0;
	            var thisArg = arguments[1];
	            var value;

	            for (var i = 0; i < length; i++) {
	                value = list[i];
	                if (predicate.call(thisArg, value, i, list)) {
	                    return value;
	                }
	            }
	            return undefined;
	        };
	    }
	}

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: ZJDGX
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2016/05/24
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Description: change page style
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	__webpack_require__(180);

	var PageStyle = function (_React$Component) {
	   _inherits(PageStyle, _React$Component);

	   function PageStyle(props) {
	      _classCallCheck(this, PageStyle);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageStyle).call(this, props));

	      _this.state = {
	         curStyle: props.styleIndex
	      };
	      return _this;
	   }

	   _createClass(PageStyle, [{
	      key: 'changePageStyle',
	      value: function changePageStyle(style, index) {
	         this.setState({ curStyle: index });
	         this.props.changePageStyle(style);
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         return _react2.default.createElement(
	            'ul',
	            { className: 'page-style' },
	            this.props.styles.map(function (style, index) {
	               return _react2.default.createElement('li', { key: index,
	                  className: 'ib ' + style + (index == this.state.curStyle ? ' cur' : ''),
	                  onClick: this.changePageStyle.bind(this, style, index) });
	            }.bind(this))
	         );
	      }
	   }]);

	   return PageStyle;
	}(_react2.default.Component);

	exports.default = PageStyle;

/***/ },

/***/ 180:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 184:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});