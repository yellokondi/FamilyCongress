using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FamilyCongress2015.Models
{
    public class CooperatorCollection
    {
        public List<Cooperator> Cooperators { get; set; }

        public CooperatorCollection()
        {
            this.Cooperators = new List<Cooperator>();
        }
    }
}