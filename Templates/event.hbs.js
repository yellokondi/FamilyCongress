var event = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<tr>\r\n    <td>";
  stack1 = ((helper = (helper = helpers.ParticipantName || (depth0 != null ? depth0.ParticipantName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ParticipantName","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\r\n    <td>";
  stack1 = ((helper = (helper = helpers.WhereAt || (depth0 != null ? depth0.WhereAt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"WhereAt","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\r\n    <td>";
  stack1 = ((helper = (helper = helpers.When || (depth0 != null ? depth0.When : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"When","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\r\n    <td>";
  stack1 = ((helper = (helper = helpers.Topic || (depth0 != null ? depth0.Topic : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Topic","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\r\n    <td>";
  stack1 = ((helper = (helper = helpers.Audience || (depth0 != null ? depth0.Audience : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Audience","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\r\n</tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.Event : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});