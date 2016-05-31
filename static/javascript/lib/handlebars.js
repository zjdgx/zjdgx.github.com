/**
 * Build Date: 15/12/30 16:11.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define('handlebars', ['handlebars.runtime'], function (Handlebars) {
	Handlebars.registerHelper('is', function (key, value) {
		console.log('key: ' + key + ', value: ' + value);
		return false;
	});

	return Handlebars;
});