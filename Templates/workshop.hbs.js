var workshop = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "				<a href=\""
    + this.escapeExpression(((helper = (helper = helpers.RegisterUrl || (depth0 != null ? depth0.RegisterUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RegisterUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-lg btn-primary\">Submit</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "﻿<div class=\"container\">\r\n	<h2>"
    + alias3(((helper = (helper = helpers.Subject || (depth0 != null ? depth0.Subject : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Subject","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	<h3>\r\n		<a href=\"/Home/Participants#"
    + alias3(((helper = (helper = helpers.Instructor || (depth0 != null ? depth0.Instructor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Instructor","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.Instructor || (depth0 != null ? depth0.Instructor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Instructor","hash":{},"data":data}) : helper)))
    + "</a>\r\n	</h3>\r\n	<div>\r\n		<div class=\"row\">\r\n			<div>\r\n				<h4>Place:</h4>\r\n				<p>"
    + ((stack1 = ((helper = (helper = helpers.Place || (depth0 != null ? depth0.Place : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Place","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p><br />\r\n				<h4>Meets On</h4>\r\n				<p>"
    + ((stack1 = ((helper = (helper = helpers.MeetOn || (depth0 != null ? depth0.MeetOn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"MeetOn","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p><br />\r\n				<h4>Workshop Presentation</h4>\r\n				<p>"
    + ((stack1 = ((helper = (helper = helpers.Definition || (depth0 != null ? depth0.Definition : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Definition","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p><br />\r\n				<h4>Main Topic and Audience</h4>\r\n				<p>\r\n					"
    + ((stack1 = ((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n				</p><br />\r\n				<h4>Participation Rules</h4>\r\n				<p>\r\n					"
    + ((stack1 = ((helper = (helper = helpers.Rules || (depth0 != null ? depth0.Rules : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Rules","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n				</p><br />\r\n				<h4>Items Included</h4>\r\n				<p>\r\n					"
    + ((stack1 = ((helper = (helper = helpers.Help || (depth0 != null ? depth0.Help : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Help","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n				</p><br />\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RegisterUrl : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});