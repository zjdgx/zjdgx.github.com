/**
 * Build Date: 16/1/20 9:38.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
  return Backbone.Collection.extend({
    content: [
      {
        title: '修改Git提交记录的用户信息',
        date: '2016-10-31',
        url: '../static/notes/tools/git-reset-user-info.html'
      },
      {
        title: 'linux命令',
        date: '2016-06-12',
        url: '../static/notes/tools/linux.html'
      },
      {
        title: '使用tar打包多个目录',
        date: '2016-05-31',
        url: '../static/notes/tools/tar.html'
      },
      {
        title: 'Git命令行',
        date: '2016-05-26',
        url: '../static/notes/tools/git.html'
      },
      {
        title: '2015: 前端工具现状',
        date: '2016-01-20',
        url: '../static/notes/tools/web-tool-2015.html',
        des: '2015: 前端工具现状'
      }
    ]
  });
});