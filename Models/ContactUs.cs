using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace FamilyCongress2015.Models
{
	public class ContactUs
	{
		[Required, Display(Name = "Comment")]
		public String Comment { get; set; }

		[Display(Name = "Email"), EmailAddress]
		public String Email { get; set; }

		[Required, Display(Name = "First Name")]
		public String FirstName { get; set; }

		[Required, Display(Name = "Last Name")]
		public String LastName { get; set; }

		[Required, Display(Name = "Telephone")]
		public String Telephone { get; set; }
	}
}