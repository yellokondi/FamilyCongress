var conference = Handlebars.template({"1":function(depth0,helpers,partials,data) {
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