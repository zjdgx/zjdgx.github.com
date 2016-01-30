/**
 * Build Date: 16/1/5 14:25.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['jquery', 'Backbone', '../component/contentListView', '../component/header', '../handlebar/PageView' ],
	function ($, Backbone, contentListView, HeaderView, PageView) {
	return Backbone.View.extend({
		el: 'body',
		loaded: false,
		template: PageView.PageView,
		initialize: function () {
		},
		render: function (options) {
			new HeaderView().render(options);
			this.$el.append(this.template({defaultContent: options.default}));

			this.toggleLoading();

			$.getJSON('', function (value) {
				value.items.forEach(function (item) {

				});
			});

			if (options.contentList.length) {
				new contentListView(options.contentList).render();
			} else {
				this.$el.find('.sidebar').append('<li class="nothing">No Data.</li>');
			}

			return this;
		}
	});
});