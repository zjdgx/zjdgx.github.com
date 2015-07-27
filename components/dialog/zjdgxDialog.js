;(function($){
	$.fn.extend({
		dialog: function ( opts ) {
			$('body').append('<div class="dialog' + (opts.className ? ' ' + opts.className : '') + '">' +
						'<div class="inner">' +
							'<div class="content">' +
								this +
							'</div></div></div>');
		}
	})
})(jQuery);