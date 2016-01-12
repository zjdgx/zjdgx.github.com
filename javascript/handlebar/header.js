define(['handlebars'], function(Handlebars) {

this["template"] = this["template"] || {};

this["template"]["HeaderViewTemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " cur";
},"3":function(container,depth0,helpers,partials,data) {
    return "class='cur'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<a class=\"logo\" href=\"index.html\">ZJDGX</a>\n<div class=\"category\">\n<div class=\"frontend item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.frontend : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n<label>Frontend</label>\n<ul>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.css : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"css.html\">CSS</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.html : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"html.html\">HTML5</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mobile : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"mobile.html\">Mobile</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.javascript : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"javascript.html\">Javascript</a></li>\n</ul>\n</div>\n<div class=\"backend item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.backend : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n<label>Backend</label>\n<ul>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.java : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"java.html\">Java</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.nodejs : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"nodejs.html\">Nodejs</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.android : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"android.html\">Android</a></li>\n</ul>\n</div>\n<div class=\"database item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.database : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n<label>Database</label>\n<ul>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mysql : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"mysql.html\">MySQL</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mongodb : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"mongodb.html\">MongoDB</a></li>\n</ul>\n</div>\n<div class=\"framework item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.framework : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n<label>Framework</label>\n<ul>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.backbone : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"backbone.html\">Backbone</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.react : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"react.html\">React</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.redux : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"redux.html\">Redux</a></li>\n</ul>\n</div>\n<div class=\"tools item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tools : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n<label>Tools</label>\n<ul>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.gulp : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"gulp.html\">Gulp</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.grunt : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"grunt.html\">Grunt</a></li>\n<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.webpack : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"webpack.html\">webpack</a></li>\n</ul>\n</div>\n<div class=\"notes item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.notes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n<label><a href=\"notes.html\">Notes</a></label>\n</div>\n</div>\n";
},"useData":true});

return this["template"];

});