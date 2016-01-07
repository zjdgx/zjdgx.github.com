/**
 * Build Date: 16/1/6 17:16.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['jquery', 'Backbone', '../handlebar/recommendArticle', '../content/recommendArticle'], function ($, Backbone, template, Content) {
	return Backbone.View.extend({
		el: 'body',
		template: template.recommendArticle,
		events: {
			'click .recommend li': 'changeSrc'
		},
		render: function () {
			this.$el.append(this.template({articles: new Content().content}));

			return this;
		},
		changeSrc: function (e) {
			$('.contentFrame').attr('src', $(e.currentTarget).find('a').attr('href'));

			return false;
		}
	});
});