define(['handlebars'], function(Handlebars) {

this["template"] = this["template"] || {};

this["template"]["DailyViewTemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<li>\r\n<h5>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.date : depth0), depth0))
    + "</h5>\r\n<label>Done:</label><br/>\r\n<ol>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.daily : depth0)) != null ? stack1.does : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ol>\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.daily : depth0)) != null ? stack1.todo : stack1)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "<li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label>Todo:</label><br/>\r\n<ol>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.daily : depth0)) != null ? stack1.todo : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ol>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.finished : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "</li>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "class=\"unfinished\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.daily : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

return this["template"];

});