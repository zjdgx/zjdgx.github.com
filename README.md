# ZJDGX HOME PAGE

[![Build Status](https://travis-ci.org/zjdgx/zjdgx.github.com.png)](https://travis-ci.org/zjdgx/zjdgx.github.com)

use `[webpack](https://webpack.js.org/)` `[react](https://github.com/facebook/react)` to build ZJDGX home page.

## 2017/09/18

- add gitbook.
- add build status.

## 2017/09/15

- add git command which can see the content of committed files.

## 2017/08/22

- add meta for author, keywords and description
- add code to set the page style randomly.

## 2017/08/18

- add code to return home page when click the logo icon.

## 2017/08/13

- show date on canvas clock
- add canvas clock to home page.
- add web source links on home page.
- add webpack-hot-server for development
- add canvas clock

## 2017/08/12

- add shell module
- add shell file to copy files exclude node_modules and etc.
- add Linux chflags command which can show or hidden file or folder in Linux.

## 2017/08/07

- 添加redux资源

## 2017/08/01

- 添加redux demo地址

## 2017/07/29
  
- 添加geolocation到opus
- 将lottery移动到opus

## 2017/07/27
  
- css增加动画生成工具网站链接

## 2017/02/04

- 首页增加资源链接

## 2017/01/23

- 增加localStorage修改样式
- 增加git webhooks

## 2017/01/09

- 添加git镜像源
- concentration
- git修改提交用户名

## 2016/10/31

- add the document for reset the user infomation in committed record of git.

## 2016/10/30

- merge MongoDB and MySQL to database.
- add opus module

## 2016/08/16

- 增加[3种数组复制方法的性能对比](http://zjdgx.github.io/static/notes/javascript/javascript-copy-compare.html)

## 2016/07/22

- 增加[Android滑动导航菜单](http://zjdgx.github.io/static/notes/android/android-source.html)
- 增加[javascript object判断](http://zjdgx.github.io/static/notes/javascript/javascript base.html)

## 2016/07/22

- 增加[修改MySQL外键](http://zjdgx.github.io/static/notes/mysql/notes.html)

## 2016/07/18

- 增加[MySQL外键](http://zjdgx.github.io/static/notes/mysql/notes.html)
- 增加[webpack plugin](http://zjdgx.github.io/static/notes/tools/webpack-plugin.html)
- 增加[判断元素是否是某个元素的子元素](http://zjdgx.github.io/static/notes/javascript/isChild.html)

## 2016/07/07

- 增加[Java批量修改照片](http://zjdgx.github.io/static/notes/java/batch-rename-photo.html)

## 2016/07/05

- 增加[webstorm破解](http://zjdgx.github.io/static/notes/tools/webstorm.2016.html)

## 2016/06/13

- 增加[tar加密解密](http://zjdgx.github.io/static/notes/tools/tar.html)

## 2016/06/12

- 增加[linux命令行](http://zjdgx.github.io/)
- 在git命令中添加忽略mode, 使用方法: `git config core.filemode false`

## 2016/06/07

- 在resume中添加统计代码
- 在javascript中添加闭包

## 2016/06/03

- 增加[javascript删除数组中重复元素](http://zjdgx.github.io/index.html)
- 增加eslint, 使用方法: `node ./node_modules/eslint/bin/eslint.js xxx/xxx.js`

## 2016/06/02

- 增加[css翻转动画](http://zjdgx.github.io/index.html)
- 使用module.exports保存notes数据

## 2016/05/31

- 增加[tar打包多个目录](http://zjdgx.github.io/nodejs.20160524.html)
- 将homepage的grunt+backbone版本与webpack+react版本整合

## 2016/05/26

- 增加[Git命令行](http://zjdgx.github.io/gruntVersion/tools.20160524.html)

## 2016/05/21

- 增加[react canvas头像上传](http://zjdgx.github.io/gruntVersion/react.20160524.html)

## 2016/05/08

- 增加[localStorage](http://zjdgx.github.io/gruntVersion/javascript.20160524.html)

## 2016/04/14

- 增加[react开发笔记](http://zjdgx.github.io/gruntVersion/react.20160524.html)

## 2016/03/30

- 增加[删除node_modules文件夹代码](http://zjdgx.github.io/gruntVersion/nodejs.20160524.html)

## 2016/03/24

- 增加[node websocket](http://zjdgx.github.io/gruntVersion/javascript.20160524.html)

## 2016/03/21

- 增加CHANGELOG
- 增加Canvas抽奖游戏

## 2016/03/18
- homepage增加皮肤设置

### problem

- iframe里面的内容change事件没监听到, 导致内容iframe的皮肤不能同步更新

解决方案: 在每个内容页面增加检测localStorage的脚本, 然后更新皮肤

- 通过localStorage保存的皮肤配置在更新到页面时会看到一个皮肤更换的过程
