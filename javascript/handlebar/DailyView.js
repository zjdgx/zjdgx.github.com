define(["handlebars"],function(a){return this.template=this.template||{},this.template.DailyViewTemplate=a.template({1:function(a,b,c,d,e){var f,g=null!=b?b:{};return"<li>\r\n<h5>"+a.escapeExpression(a.lambda(null!=b?b.date:b,b))+"</h5>\r\n"+(null!=(f=c["if"].call(g,null!=(f=null!=(f=null!=b?b.daily:b)?f.does:f)?f.length:f,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+(null!=(f=c["if"].call(g,null!=(f=null!=(f=null!=b?b.daily:b)?f.todo:f)?f.length:f,{name:"if",hash:{},fn:a.program(5,e,0),inverse:a.noop,data:e}))?f:"")+"</li>\r\n"},2:function(a,b,c,d,e){var f;return"<label>Done:</label><br/>\r\n<ol>\r\n"+(null!=(f=c.each.call(null!=b?b:{},null!=(f=null!=b?b.daily:b)?f.does:f,{name:"each",hash:{},fn:a.program(3,e,0),inverse:a.noop,data:e}))?f:"")+"</ol>\r\n"},3:function(a,b,c,d,e){return"<li>"+a.escapeExpression(a.lambda(b,b))+"</li>\r\n"},5:function(a,b,c,d,e){var f;return"<label>Todo:</label><br/>\r\n<ol>\r\n"+(null!=(f=c.each.call(null!=b?b:{},null!=(f=null!=b?b.daily:b)?f.todo:f,{name:"each",hash:{},fn:a.program(6,e,0),inverse:a.noop,data:e}))?f:"")+"</ol>\r\n"},6:function(a,b,c,d,e){var f;return null!=(f=c["if"].call(null!=b?b:{},null!=b?b.href:b,{name:"if",hash:{},fn:a.program(7,e,0),inverse:a.program(10,e,0),data:e}))?f:""},7:function(a,b,c,d,e){var f,g=a.lambda,h=a.escapeExpression;return"<li "+(null!=(f=c.unless.call(null!=b?b:{},null!=b?b.finished:b,{name:"unless",hash:{},fn:a.program(8,e,0),inverse:a.noop,data:e}))?f:"")+">\r\n<a href='"+h(g(null!=b?b.href:b,b))+"' target='_blank'>"+h(g(null!=b?b.content:b,b))+"</a>\r\n</li>\r\n"},8:function(a,b,c,d,e){return'class="unfinished"'},10:function(a,b,c,d,e){var f;return"<li "+(null!=(f=c.unless.call(null!=b?b:{},null!=b?b.finished:b,{name:"unless",hash:{},fn:a.program(8,e,0),inverse:a.noop,data:e}))?f:"")+">"+a.escapeExpression(a.lambda(null!=b?b.content:b,b))+"</li>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return null!=(f=c.each.call(null!=b?b:{},null!=b?b.daily:b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:""},useData:!0}),this.template});