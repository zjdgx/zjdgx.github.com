define(['handlebars'], function(Handlebars) {

this["template"] = this["template"] || {};

this["template"]["PageView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<iframe class=\"contentFrame\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.defaultContent || (depth0 != null ? depth0.defaultContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"defaultContent","hash":{},"data":data}) : helper)))
    + "\" frameborder=\"0\" scrolling=\"0\" marginheight=\"0\" marginwidth=\"0\"></iframe>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"contentFrame nothing\">\r\nNothing At All...\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"javascript\">\r\n<ul class=\"sidebar\"></ul>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.defaultContent : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

return this["template"];

});