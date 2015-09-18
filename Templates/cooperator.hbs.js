var cooperator = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"img-responsive\">\r\n    <a href=\""
    + alias3(((helper = (helper = helpers.SiteUrl || (depth0 != null ? depth0.SiteUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"SiteUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias3(((helper = (helper = helpers.SiteTitle || (depth0 != null ? depth0.SiteTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"SiteTitle","hash":{},"data":data}) : helper)))
    + "\" class=\"thumbnail\">\r\n        <img src=\""
    + alias3(((helper = (helper = helpers.LogoPath || (depth0 != null ? depth0.LogoPath : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"LogoPath","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.ImageAlt || (depth0 != null ? depth0.ImageAlt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ImageAlt","hash":{},"data":data}) : helper)))
    + "\" />\r\n    </a>\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Cooperators : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});