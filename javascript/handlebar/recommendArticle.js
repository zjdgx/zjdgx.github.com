define(['handlebars'], function(Handlebars) {

this["template"] = this["template"] || {};

this["template"]["recommendArticle"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li title=\""
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\"><a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">("
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + ")"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"recommend\">\r\n<label>推荐阅读</label>\r\n<ul class=\"arrowDown\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.articles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n</div>\n";
},"useData":true});

return this["template"];

});