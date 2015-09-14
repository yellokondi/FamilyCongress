using System.Web.Mvc;
using System.Web.WebPages;

namespace FamilyCongress2015.App_Code
{
    public class Helper : System.Web.WebPages.HelperPage
    {
        //Workaround - exposes the MVC HtmlHelper instead of the normal helper
        public static new HtmlHelper Html
        {
            get { return ((System.Web.Mvc.WebViewPage)WebPageContext.Current.Page).Html; }
        }
    }
}