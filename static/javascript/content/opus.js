/**
 * Build Date: 16/1/13 17:16.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
  return Backbone.Collection.extend({
    content: [
      {
        title: '专注力测试',
        date: '2016-10-01',
        url: '../static/notes/opus/concentration/index.html',
        des: '专注力测试'
      }
    ]
  });
});