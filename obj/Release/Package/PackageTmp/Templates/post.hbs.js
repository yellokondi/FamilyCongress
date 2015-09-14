var post = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"col-md-10 blogShort\">\r\n    <h1>";
  stack1 = ((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1>\r\n    <a href=\""
    + escapeExpression(((helper = (helper = helpers.FullArticleURL || (depth0 != null ? depth0.FullArticleURL : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"FullArticleURL","hash":{},"data":data}) : helper)))
    + "\" class=\"thumbnail pull-left margin10\">\r\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.ImageURI || (depth0 != null ? depth0.ImageURI : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ImageURI","hash":{},"data":data}) : helper)))
    + "\" alt=\"post image\">\r\n    </a>\r\n    <article>\r\n        <p>\r\n            ";
  stack1 = ((helper = (helper = helpers.Slug || (depth0 != null ? depth0.Slug : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Slug","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n        </p>\r\n    </article>\r\n    <p class=\"pull-left marginBottom10\">\r\n        <i class=\"glyphicon glyphicon-user\"></i> by <a href=\"#\">"
    + escapeExpression(((helper = (helper = helpers.UserName || (depth0 != null ? depth0.UserName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"UserName","hash":{},"data":data}) : helper)))
    + "</a>\r\n        | <i class=\"glyphicon glyphicon-calendar\"></i> "
    + escapeExpression(((helper = (helper = helpers.CreatedOnDate || (depth0 != null ? depth0.CreatedOnDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"CreatedOnDate","hash":{},"data":data}) : helper)))
    + "\r\n        <!--| <i class=\"glyphicon glyphicon-comment\"></i> 3 Comments\r\n        | <i class=\"glyphicon glyphicon-share\"></i> <a href=\"#\">39 Shares</a>-->\r\n        | <i class=\"glyphicon glyphicon-tags\"></i> Tags :\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Tags : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </p>\r\n    <a class=\"btn btn-blog pull-right marginBottom10\" href=\""
    + escapeExpression(((helper = (helper = helpers.FullArticleURL || (depth0 != null ? depth0.FullArticleURL : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"FullArticleURL","hash":{},"data":data}) : helper)))
    + "\">READ MORE</a>\r\n</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <a href=\""
    + escapeExpression(((helper = (helper = helpers.TagURL || (depth0 != null ? depth0.TagURL : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"TagURL","hash":{},"data":data}) : helper)))
    + "\"><span class=\"label label-info\">"
    + escapeExpression(((helper = (helper = helpers.TagName || (depth0 != null ? depth0.TagName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"TagName","hash":{},"data":data}) : helper)))
    + "</span></a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Posts : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});