using Microsoft.AspNetCore.Mvc;

namespace Portolio.Controllers
{
    public class PortfolioController : Controller
    {
        public IActionResult Portfolio()
        {
            return View();
        }
    }
}
