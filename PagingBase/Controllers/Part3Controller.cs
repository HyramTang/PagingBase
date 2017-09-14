using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace PagingBase.Controllers
{
    public class Part3Controller : Controller
    {
        // GET: Part3
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetPageData(int pageIndex, int pageSize)
        {
            //模拟数据库数据---------------------------------------------------------
            int totalCount = 996;
            int totalPage = totalCount / pageSize;
            totalPage = (totalCount % pageSize) > 0 ? totalPage + 1 : totalPage;
            List<TableField> lst = GenerateData(totalCount).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();

            return Json(new { data = lst, totalCount = totalCount }, JsonRequestBehavior.AllowGet);
        }

        public List<TableField> GenerateData(int totalPage)
        {
            List<TableField> lst = new List<TableField>();
            for (int i = 1; i <= totalPage; i++)
            {
                lst.Add(new TableField()
                {
                    A = "A" + i,
                    B = "B" + i,
                    C = "C" + i
                });
            }
            return lst;
        }
    }

    public class TableField
    {
        public string A { get; set; }
        public string B { get; set; }
        public string C { get; set; }
    }
}