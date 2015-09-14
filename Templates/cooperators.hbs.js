var cooperators = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"img-responsive\">\r\n    <a href=\""
    + escapeExpression(((helper = (helper = helpers.SiteUrl || (depth0 != null ? depth0.SiteUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"SiteUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.SiteTitle || (depth0 != null ? depth0.SiteTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"SiteTitle","hash":{},"data":data}) : helper)))
    + "\" class=\"thumbnail\">\r\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.LogoPath || (depth0 != null ? depth0.LogoPath : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"LogoPath","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.ImageAlt || (depth0 != null ? depth0.ImageAlt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ImageAlt","hash":{},"data":data}) : helper)))
    + "\" />\r\n    </a>\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Cooperator : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});