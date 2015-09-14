var article = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"col-md-10 blogShort\">\r\n    <h1>"
    + escapeExpression(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.ImageURI || (depth0 != null ? depth0.ImageURI : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ImageURI","hash":{},"data":data}) : helper)))
    + "\" alt=\"article image\" class=\"pull-left img-responsive margin10 img-thumbnail\" />\r\n    <article>\r\n        <p>\r\n            ";
  stack1 = ((helper = (helper = helpers.FullText || (depth0 != null ? depth0.FullText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"FullText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n        </p>\r\n    </article>\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Articles : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});