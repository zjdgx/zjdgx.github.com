define(['handlebars'], function(Handlebars) {

this["template"] = this["template"] || {};

this["template"]["HeaderViewTemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " cur";
},"3":function(container,depth0,helpers,partials,data) {
    return "class='cur'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<a class=\"logo\" href=\"index.html\">ZJDGX</a>\r\n<div class=\"category\">\r\n<div class=\"frontend item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.frontend : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n<label>Frontend</label>\r\n<ul>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.css : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"css.html\">CSS</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.html : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"html.html\">HTML5</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mobile : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"mobile.html\">Mobile</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.javascript : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"javascript.html\">Javascript</a></li>\r\n</ul>\r\n</div>\r\n<div class=\"backend item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.backend : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n<label>Backend</label>\r\n<ul>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.java : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"java.html\">Java</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.nodejs : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"nodejs.html\">Nodejs</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.android : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"android.html\">Android</a></li>\r\n</ul>\r\n</div>\r\n<div class=\"database item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.database : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n<label>Database</label>\r\n<ul>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mysql : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"mysql.html\">MySQL</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mongodb : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"mongodb.html\">MongoDB</a></li>\r\n</ul>\r\n</div>\r\n<div class=\"framework item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.framework : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n<label>Framework</label>\r\n<ul>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.backbone : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"backbone.html\">Backbone</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.react : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"react.html\">React</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.redux : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"redux.html\">Redux</a></li>\r\n</ul>\r\n</div>\r\n<div class=\"tools item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tools : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n<label><a href=\"tools.html\">Tools</a></label>\r\n<ul>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.gulp : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"gulp.html\">Gulp</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.grunt : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"grunt.html\">Grunt</a></li>\r\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.webpack : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"webpack.html\">webpack</a></li>\r\n</ul>\r\n</div>\r\n<div class=\"notes item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.notes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n<label><a href=\"notes.html\">Notes</a></label>\r\n</div>\r\n</div>\n";
},"useData":true});

return this["template"];

});