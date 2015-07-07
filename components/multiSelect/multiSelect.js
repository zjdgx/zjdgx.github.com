(function ($) {
	$.extend($.fn, {
		multiSelect: function (option) {
			this.empty();

			if (option) {
				var $e = $(this).addClass('multiSelect'),
					items = option.items || [],
					title = option.title,
					$ul = $('<ul/>'),
					onChange = option.onChange;

				$.each(items, function (idx, item) {
					$ul.append('<li val="' + item.value + '"><i class="icon-checkbox checkbox' + (item.selected ? ' checked' : '') + '"></i><span>' + item.value + '</span></li>');
				});

				$('<label/>').click(function() {
					$e.toggleClass('open');
				}).html(title + '<i class="icon-add"></i>').appendTo(this);
				$ul.appendTo(this);

				$ul.find('li').click(function () {
					$(this).find('i').toggleClass('checked');
					onChange(getSelected());
				});

				function getSelected() {
					var html = [];

					$ul.find('i.checked').parent().each(function () {
						html.push($(this).attr('val'));
					});

					return html.join(',');
				}

				$(document).on('click', function (e) {
					!($(e.target).parents()).is($e) && $e.removeClass('open');
				});
			}

			return this;
		}
	});
})(jQuery);