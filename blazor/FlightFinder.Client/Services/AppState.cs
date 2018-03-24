using FlightFinder.Shared;
using Microsoft.AspNetCore.Blazor;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace FlightFinder.Client.Services
{
    public class AppState
    {
        public IReadOnlyList<SearchResult> SearchResults { get; private set; }
        public bool SearchInProgress { get; private set; }
        public SearchResult SelectedResult { get; private set; }
        public event Action OnChange;
        private readonly HttpClient http;

        public AppState(HttpClient httpInstance)
        {
            http = httpInstance;
        }

        public async Task Search(string query)
        {
            // TODO: Handle debounce?
            SearchInProgress = true;
            NotifyStateChanged();

            try {
                SearchResults = await http.GetJsonAsync<SearchResult[]>($"/api/search?query={query}");
            } catch (Exception e) {
                // TOOD: Handle error?
                Console.WriteLine(e.ToString());
                throw e;
            } finally {
                SearchInProgress = false;
                NotifyStateChanged();
            }
        }

        public async Task SetSelectedResult(SearchResult result)
        {
            SearchResults = null;
            SelectedResult = result;
            NotifyStateChanged();

            // TODO: make api call to new selected endpoint
            await Task.Delay(0);
        }

        private void NotifyStateChanged() => OnChange?.Invoke();
    }
}
