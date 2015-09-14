using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FamilyCongress2015.Models
{
    public class ArticleCollection
    {
        public List<Article> Articles { get; set; }

        public ArticleCollection()
        {
            this.Articles = new List<Article>();
        }
    }
}