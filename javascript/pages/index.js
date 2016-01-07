/**
 * Build Date: 15/12/30 10:17.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['jquery', 'Backbone', '../component/header', '../handlebar/home', '../content/home'], function ($, Backbone, HeaderView, HomeView, HomeContent) {
	return Backbone.View.extend({
		el: 'body',
		template: HomeView.home,
		initialize: function () {
		},
		render: function () {
			new HeaderView().render();
			this.$el.append(this.template({contentList: new HomeContent().content}));

			return this;
		}
	});
});