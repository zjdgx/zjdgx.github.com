/**
 * Build Date: 16/1/6 8:28.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['jquery', 'Backbone', '../handlebar/contentListItemView'], function ($, Backbone, contentListItemView) {
	return Backbone.View.extend({
		el: '.sidebar',
		template: contentListItemView.contentListItemViewTemplate,
		events: {
			'click li': 'changeSrc'
		},
		initialize: function (collection) {
			this.collection = collection;
		},
		render: function () {
			var html = [];

			for (var i = 0, len = this.collection.length; i < len; i++) {
				html.push(this.template(this.collection[i]));
			}

			this.$el.append(html.join(''));

			return this;
		},
		changeSrc: function (e) {
			$('.contentFrame').attr('src', $(e.currentTarget).find('a').attr('href'));

			return false;
		}
	});
});