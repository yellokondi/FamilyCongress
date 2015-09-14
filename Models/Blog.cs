﻿using System;
using System.Collections.Generic;
using SqlFu;
using SqlFu.DDL;

namespace FamilyCongress2015.Models
{
    [Table("Blogs", AutoGenerated = true, CreationOptions = IfTableExists.Ignore, PrimaryKey = "ID")]
    public class Blog
    {
        public int ID { get; set; }

        [ColumnOptions(Size = "100")]
        public String Title { get; set; }

        [ColumnOptions(DefaultValue = "/Content/default_blog_image/default_document.png", Size = "500")]
        public String ImageURI { get; set; }

        [ColumnOptions(Size = "850")]
        public String Slug { get; set; }

        [ColumnOptions(Size = "100")]
        public String UserName { get; set; }

        [ColumnOptions(Size = "255", DefaultValue = "#")]
        public String FullArticleURL { get; set; }
                
        public DateTime CreatedOn { get; set; }

        /// <summary>
        /// Displays CreatedOn value as a date only.
        /// </summary>
        [ColumnOptions(Ignore = true)]
        public String CreatedOnDate { get; set; }

        /// <summary>
        /// Tags which are assigned to each blog entry.
        /// </summary>
        [ColumnOptions(Ignore = true)]
        public List<Tag> Tags { get; set; }

        #region Optional Properties
        [ColumnOptions(IsNullable = true)]
        public int? Comments { get; set; }

        [ColumnOptions(IsNullable = true)]
        public int? Shares { get; set; }
        #endregion

    }
}
