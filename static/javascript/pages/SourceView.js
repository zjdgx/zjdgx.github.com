/**
 * Build Date: 16/1/5 14:25.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['jquery', 'Backbone', '../component/contentListView', '../component/header', '../handlebar/SourceView'],
	function ($, Backbone, contentListView, HeaderView, SourceView) {
		return Backbone.View.extend({
			el: 'body',
			loaded: false,
			sourceType: 'javascript',
			template: SourceView.SourceView,
			events: {
				'blur input': 'toggleFocus',
				'focus input': 'toggleFocus',
				'keyup input': 'searchGit',
				'click .search-container .dropdown label': 'toggleDropdown',
				'click .dropdown li': 'chooseGitSourceType'
			},
			initialize: function () {
			},
			render: function (options) {
				new HeaderView().render(options);
				this.$el.append(this.template({sources: options.contentList}));

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
			},
			toggleFocus: function (e) {
				this.$el.find('div.search-container').toggleClass('focus', e);
			},
			toggleDropdown: function (e) {
				$(e.currentTarget).next().toggleClass('hide');
			},
			chooseGitSourceType: function (e) {
				var value = e.currentTarget.textContent;

				this.sourceType = value.toLowerCase();
				this.$el.find('.dropdown label').html(value);
				this.$el.find('.dropdown ul').addClass('hide');
			},
			searchGit: function (e) {
				if (13 == e.keyCode || 13 == e.which) {
					var html = [],
						self = this,
						queryString = e.currentTarget.value + (this.sourceType == 'none' ? '' : 'language:' + this.sourceType);

					this.$el.find('div.loading').removeClass('hide');

					$.getJSON('https://api.github.com/search/repositories?q=' + (queryString.length ? queryString : 'null') + '&sort=stars', function (value) {
						value.items.forEach(function (item) {
							html.push('<li><a href="');
							html.push(item.html_url);
							html.push('" target="_blank">');
							html.push(item.name);
							html.push('</a><p>Stars: ');
							html.push(item.stargazers_count);
							html.push('&nbsp;&nbsp;Forks: ');
							html.push(item.forks);
						});

						self.$el.find('ul.git-sources').html(html.join(''));
						self.$el.find('div.loading').addClass('hide');
					});
				}
			}
		});
	});