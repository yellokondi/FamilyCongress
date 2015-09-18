using FamilyCongress2015.DAL;
using FamilyCongress2015.Models;

namespace FamilyCongress2015
{
	public class DBInitiatorConfig
	{
		public static void InitializeDatabase()
		{
			SqlFuDAL.CreateTable<Participant>();
			SqlFuDAL.CreateTable<Article>();
			SqlFuDAL.CreateTable<Blog>();
			SqlFuDAL.CreateTable<Tag>();
			SqlFuDAL.CreateBlogTagsLinkerTable();
			SqlFuDAL.CreateTable<Conference>();
			SqlFuDAL.CreateTable<Cooperator>();
		}
	}
}