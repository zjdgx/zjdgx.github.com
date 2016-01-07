/**
 * Build Date: 15/12/30 10:43.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['jquery', 'Backbone', '../handlebar/header'], function ($, Backbone, template) {
	return Backbone.View.extend({
		el: '.header',
		template: template.HeaderViewTemplate,
		initialize: function () {

		},
		render: function (options) {
			this.$el.append(this.template(options));

			return this;
		}
	});
});