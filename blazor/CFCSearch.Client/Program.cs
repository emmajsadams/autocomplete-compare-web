using Microsoft.AspNetCore.Blazor.Browser.Rendering;
using Microsoft.AspNetCore.Blazor.Browser.Services;
using Microsoft.Extensions.DependencyInjection;
using CFCSearch.Client.Services;

namespace CFCSearch.Client
{
    public class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = new BrowserServiceProvider(services =>
            {
                services.AddSingleton<AppState>();
            });

            new BrowserRenderer(serviceProvider).AddComponent<Main>("body");
        }
    }
}
