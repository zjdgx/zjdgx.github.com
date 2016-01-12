/**
 * Build Date: 16/1/12 21:18.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

define(['Backbone', '../component/header', '../content/daily', '../handlebar/DailyView'], function (Backbone, HeaderView, Collection, template) {
    return Backbone.View.extend({
        el: '.daily',
        template: template.DailyViewTemplate,
        render: function () {
            new HeaderView().render();
            this.$el.append(this.template({daily: new Collection().content}));

            return this;
        }
    });
});