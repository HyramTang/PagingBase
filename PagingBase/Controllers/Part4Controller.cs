using PagingBase.EF;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace PagingBase.Controllers
{
    public class Part4Controller : Controller
    {
        // GET: Part4
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 前端请求
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public JsonResult GetPageData(int pageIndex, int pageSize)
        {
            int totalCount = 0, totalPage = 0;
            List<PagingData> lst = GetDatabaseData(pageIndex, pageSize, out totalCount);
            totalPage = totalCount / pageSize;
            totalPage = (totalCount % pageSize) > 0 ? totalPage + 1 : totalPage;

            return Json(new { data = lst, totalCount = totalCount }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 查询数据库
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <param name="Total"></param>
        /// <returns></returns>
        public List<PagingData> GetDatabaseData(int pageIndex, int pageSize, out int Total)
        {
            using (PagingDBEntities context = new PagingDBEntities())
            {
                Total = context.PagingData.Count();
                return context.PagingData.OrderBy(p => p.Id).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
            }
        }
    }
}