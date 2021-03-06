﻿using System.Web;
using System.Web.Optimization;

namespace FamilyCongress2015
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
						"~/Scripts/jquery-{version}.js"));

			bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
						"~/Scripts/jquery.validate*"));

			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
						"~/Scripts/modernizr-*"));

			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
					  "~/Scripts/bootstrap.js",
					  "~/Scripts/respond.js"));

			bundles.Add(new ScriptBundle("~/bundles/handlebars").Include(
				"~/Scripts/handlebars.runtime.min.js",
				"~/Templates/Precompiled/templates.js"));

			bundles.Add(new ScriptBundle("~/bundles/rejestracja").Include(
				"~/Scripts/rejestracja.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					  "~/Content/bootstrap.css",
					  "~/Content/font-awesome.min.css",
					  "~/Content/carousel.css",
					  "~/Content/topnav.css",
					  "~/Content/flag-icon.css",
					  "~/Content/blog.css",
					  "~/Content/logo.css",
					  "~/Content/colorgraph.css"));
		}
	}
}
