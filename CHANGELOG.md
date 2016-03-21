##2016/03/21

-增加CHANGELOG

##2016/03/18
-homepage增加皮肤设置

###problem
-iframe里面的内容change事件没监听到, 导致内容iframe的皮肤不能同步更新

解决方案: 在每个内容页面增加检测localStorage的脚本, 然后更新皮肤

-通过localStorage保存的皮肤配置在更新到页面时会看到一个皮肤更换的过程