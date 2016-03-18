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
		events: {
			'onload .contentFrame': 'frameContentLoaded'
		},
		initialize: function () {
			if (window.localStorage && localStorage['webStyle']) {
				$('body').attr('class', localStorage['webStyle']);
			}
		},
		frameContentLoaded: function () {
			console.log('frame loaded');
			if (window.localStorage && localStorage['webStyle']) {
				$(".contentFrame").contents().find("body").attr('class', localStorage['webStyle']);
			}
		},
		render: function (options) {
			new HeaderView().render(options);
			this.$el.append(this.template({defaultContent: options.default}));

			if (options.contentList.length) {
				new contentListView(options.contentList).render();
			} else {
				this.$el.find('.sidebar').append('<li class="nothing style-bg">No Data.</li>');
			}

			return this;
		}
	});
});