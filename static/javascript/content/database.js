/**
 * Build Date: 16/1/6 13:57.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
  return Backbone.Collection.extend({
    content: [
      {
        title: 'MySQL开发Note',
        date: '2013-09-22',
        url: '../static/notes/mysql/notes.html',
        des: 'MySQL开发Note'
      },
      {
        title: 'MongoDB开发Note',
        date: '2013-09-22',
        url: '../static/notes/mongodb/notes.html',
        des: 'MongoDB开发Note'
      }
    ]
  });
});