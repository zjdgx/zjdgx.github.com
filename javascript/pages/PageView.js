/**
 * Build Date: 16/1/5 14:25.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['jquery', 'Backbone', '../component/contentListView', '../component/header', '../handlebar/PageView', '../component/recommendArticle'],
	function ($, Backbone, contentListView, HeaderView, PageView, RecommendView) {
	return Backbone.View.extend({
		el: 'body',
		template: PageView.PageView,
		initialize: function () {
		},
		render: function (options) {
			new HeaderView().render(options);
			this.$el.append(this.template({defaultContent: options.default}));

			if (options.contentList.length) {
				new contentListView(options.contentList).render();
			} else {
				this.$el.find('.sidebar').append('<li class="nothing">No Data.</li>');
			}

			new RecommendView().render();

			return this;
		}
	});
});