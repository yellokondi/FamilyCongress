(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['article'] = template({"1":function(depth0,helpers,partials,data) {
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
templates['conference'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<tr>\r\n    <td>"
    + escapeExpression(((helper = (helper = helpers.ParticipantName || (depth0 != null ? depth0.ParticipantName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ParticipantName","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td>"
    + escapeExpression(((helper = (helper = helpers.Place || (depth0 != null ? depth0.Place : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Place","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td>"
    + escapeExpression(((helper = (helper = helpers.MeetOn || (depth0 != null ? depth0.MeetOn : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"MeetOn","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td>"
    + escapeExpression(((helper = (helper = helpers.Topic || (depth0 != null ? depth0.Topic : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Topic","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td>"
    + escapeExpression(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Description","hash":{},"data":data}) : helper)))
    + "</td>\r\n</tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Conferences : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['post'] = template({"1":function(depth0,helpers,partials,data) {
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
templates['profile'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"row panel\">\r\n    <div class=\"col-md-8 col-xs-12\">\r\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.ImageURL || (depth0 != null ? depth0.ImageURL : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ImageURL","hash":{},"data":data}) : helper)))
    + "\" class=\"img-thumbnail picture hidden-xs\" />\r\n        <div class=\"header\">\r\n            <h1>"
    + escapeExpression(((helper = (helper = helpers.ParticipantName || (depth0 != null ? depth0.ParticipantName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ParticipantName","hash":{},"data":data}) : helper)))
    + "</h1>\r\n            <h4>"
    + escapeExpression(((helper = (helper = helpers.ParticipantTitle || (depth0 != null ? depth0.ParticipantTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ParticipantTitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n            <span>";
  stack1 = ((helper = (helper = helpers.ParticipantBio || (depth0 != null ? depth0.ParticipantBio : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ParticipantBio","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Participants : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();