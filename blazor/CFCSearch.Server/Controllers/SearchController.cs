using CFCSearch.Shared;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CFCSearch.Server.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        public IEnumerable<SearchResult> Index(string query = "") {
            if (string.IsNullOrEmpty(query)) {
                return Enumerable.Empty<SearchResult>();
            }

            return SampleData.Results.Where(result => result.Label.ToLower().StartsWith(query.ToLower()));
        }
    }
}
