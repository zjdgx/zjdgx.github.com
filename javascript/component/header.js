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
		events: {
			'click .switch-style i': 'switchStyle',
			'mouseover .item a': 'toggleStyle',
			'mouseout .item a': 'toggleStyle'
		},
		initialize: function () {

		},
		switchStyle: function (e) {
			var styleClass = e.target.className.replace(/ib /, '').concat('-style');

			window.localStorage && localStorage.setItem('webStyle', styleClass);
			$('body').attr('class', styleClass);
			$(".contentFrame").contents().find("body").attr('class', styleClass);
		},
		toggleStyle: function (e) {
			$(e.currentTarget)[e.type == 'mouseover' ? 'addClass' : 'removeClass']('style-bg');
		},
		render: function (options) {
			this.$el.append(this.template(options));

			return this;
		}
	});
});