using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FamilyCongress2015.Models
{
    public class ConferenceCollection
    {
        public List<Conference> Conferences { get; set; }

        public ConferenceCollection()
        {
            this.Conferences = new List<Conference>();
        }
    }
}