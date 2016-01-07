define(['handlebars'], function(Handlebars) {

this["template"] = this["template"] || {};

this["template"]["home"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h1>\r\n<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.des : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<h5><a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a></h5>\r\n<p>"
    + alias2(alias1((depth0 != null ? depth0.des : depth0), depth0))
    + "</p>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"home\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.contentList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

return this["template"];

});