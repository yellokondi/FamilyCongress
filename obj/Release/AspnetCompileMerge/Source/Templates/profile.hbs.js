var profile = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"row panel\">\r\n    <div class=\"col-md-8 col-xs-12\">\r\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.ImageURL || (depth0 != null ? depth0.ImageURL : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ImageURL","hash":{},"data":data}) : helper)))
    + "\" class=\"img-thumbnail picture hidden-xs\" />\r\n        <div class=\"header\">\r\n            <h1>"
    + escapeExpression(((helper = (helper = helpers.ParticipantName || (depth0 != null ? depth0.ParticipantName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ParticipantName","hash":{},"data":data}) : helper)))
    + "</h1>\r\n            <h4>"
    + escapeExpression(((helper = (helper = helpers.ParticipantTitle || (depth0 != null ? depth0.ParticipantTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ParticipantTitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n            <span>"
    + escapeExpression(((helper = (helper = helpers.ParticipantBio || (depth0 != null ? depth0.ParticipantBio : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ParticipantBio","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Participants : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});