/**
 * Build Date: 16/1/20 9:38.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone'], function (Backbone) {
	return Backbone.Collection.extend({
		content: [],
		initialize: function () {
            var self = this;

			$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars', function (value) {
                value.items.forEach(function (item) {
                    self.content.push({
                        name: item.name,
                        forks: item.forks,
                        url: item.html_url,
                        stars: item.stargazers_count
                    });
                });
			});
		}
	});
});