using System;
using System.Collections.Generic;
using System.Linq;
using SqlFu;
using SqlFu.DDL;
using SqlFu.DDL.Generators.SqlServer;
using System.Data;
using System.Data.Common;
using FamilyCongress2015.Models;

namespace FamilyCongress2015.DAL
{
	public class SqlFuDAL
	{
		#region Create Table Methods
		internal static void CreateTable<T>() where T : class
		{
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				//First time run only - the below will create table of a given class
				//If CreationOptions is set to DropIt, the below will recreate the table
				var builder = db.DatabaseTools().GetCreateTableBuilder<T>();
				builder.ExecuteDDL();
			}
		}

		internal static void CreateBlogTagsLinkerTable()
		{
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				var builder = db.DatabaseTools().GetCreateTableBuilder("BlogTags", IfTableExists.Ignore);
				builder.Columns
					.Add("BlogID", DbType.Int32, isNullable: false, autoIncrement: false)
					.Add("TagID", DbType.Int32, isNullable: false, autoIncrement: false);

				builder.Constraints.AddPrimaryKeyOn("BlogID,TagID", "PK_BlogTags");
				builder.Constraints["PK_BlogTags"].IfDatabaseIs(DbEngine.SqlServer)
					.PrimaryKeyOptions(SqlServerOptions.PrimaryKeyIs.Clustered());
				builder.Indexes.AddIndexOn("TagID,BlogID", isUnique: true, indexName: "UX_BlogTags");

				builder.ExecuteDDL();
			}
		}
		#endregion

		#region Retrieve Data Methods
		internal static List<Participant> GetAllParticipantsFromDB()
		{
			List<Participant> participants = new List<Participant>();
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				participants = db.Query<Participant>().ToList();
			}
			return participants;
		}

		internal static List<Blog> GetNewest3BlogsFromDB()
		{
			List<Blog> blogs = new List<Blog>();
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				blogs = db.Query<Blog>("SELECT TOP 3 * FROM appadmin.Blogs ORDER BY CreatedOn DESC").ToList();
			}
			return blogs;
		}

		internal static List<Tag> GetTagsForBlog(Blog blog)
		{
			List<Tag> tags = new List<Tag>();

			String sql = @"SELECT t.TagName, t.TagURL
FROM appadmin.Tags t
INNER JOIN appadmin.BlogTags bt ON t.ID = bt.TagID
WHERE bt.BlogID = {0}";
			String query = String.Format(sql, blog.ID);

			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				tags = db.Query<Tag>(query).ToList();
			}

			return tags;
		}
		#endregion

		#region Search/Get Methods
		internal static List<T> FindObjectsByType<T>(String query) where T : class
		{
			List<T> retVal;
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				retVal = db.Query<T>().ToList();
			}
			return retVal;
		}

		/// <summary>
		/// Used to return all record of type T.
		/// </summary>
		/// <typeparam name="T">Class for which one wants to get all records.</typeparam>
		/// <returns>Returns all records from a corresponding table for class T.</returns>
		internal static List<T> FindObjectsByType<T>() where T : class
		{
			List<T> retVal;
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				retVal = db.Query<T>().ToList();
			}

			return retVal;
		}

		internal static List<Cooperator> FindCooperatorsByType(String type)
		{
			List<Cooperator> retVal;
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				retVal = db.Query<Cooperator>(c => c.Type == type).ToList();
			}

			return retVal;
		}

		internal static Workshop FindWorkshopByLabName(String name)
		{
			Workshop retVal = null;
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				retVal = db.Query<Workshop>(w => w.Name == name).FirstOrDefault();
			}
			return retVal;
		}

		internal static Article FindArticleById(int id)
		{
			Article retVal = new Article();
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				retVal = db.Query<Article>(a => a.ID == id).FirstOrDefault();
			}
			return retVal;
		}

		internal static Blog FindBlogByTagName(string tagName)
		{
			Blog retVal = null;
			string hashTagName = string.Empty;
			if (!String.IsNullOrEmpty(tagName))
			{
				hashTagName = tagName;
				if (!tagName.StartsWith("#"))
				{
					hashTagName = "#" + tagName;
				}                
			}

			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			Tag tag;
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				if (tagName.Equals(hashTagName, StringComparison.InvariantCulture))
				{
					tag = db.Query<Tag>(t => t.TagName == tagName).FirstOrDefault();
				}
				else
				{
					tag = db.Query<Tag>(t => t.TagName == tagName || t.TagName == hashTagName).FirstOrDefault();
				}
				if (tag != null)
				{
					retVal = db.Query<Blog>(b => b.Tags.Contains(tag)).FirstOrDefault();
				}
			}
			return retVal;
		}
		#endregion

		#region Populate Tables With Data
		internal static LastInsertId PopulateArticles(Article article)
		{
			LastInsertId retVal;
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				retVal = db.Insert<Article>(article);
			}
			return retVal;
		}

		internal static LastInsertId PopulateBlogs(Blog blog)
		{
			LastInsertId retVal;
			string connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBContext"].ConnectionString;
			SqlFuDao.ConnectionStringIs(connection, DbEngine.SqlServer);
			using (DbConnection db = SqlFuDao.GetConnection())
			{
				retVal = db.Insert<Blog>(blog);
			}
			return retVal;
		}
		#endregion
	}
}
