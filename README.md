# Product Sales Dashboard

A dashboard for visualizing sales data across different products, platforms, and time periods.

## Features

- View sales data by year, month, or platform
- Filter data by specific years and platforms
- Interactive charts (bar charts, line charts, pie charts)
- Sales forecasting for the current year
- Detailed data notes and alerts
- Cross-product analysis

## How to Use

### Local Development

1. Clone this repository
2. Open `index.html` in a web browser

### Hosting on GitHub Pages

1. Push the code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your dashboard will be published at `https://[your-username].github.io/[repo-name]/`

## File Structure

- `index.html` - Contains the HTML structure and styling
- `dashboard.js` - Contains all the JavaScript code and React components
- `data.json` - Contains all the sales data, which can be easily updated

## Technology Stack

- HTML/CSS for structure and styling
- React for the UI components (loaded via CDN)
- Recharts for data visualization (loaded via CDN)
- Babel for JSX transformation (loaded via CDN)

## Customizing the Dashboard

### Updating Data.json

The dashboard is now fully data-driven through the `data.json` file. You can update this file in several ways:

1. **Adding new months:** Simply add the new month to the appropriate year in the data structure. The dashboard will automatically detect and display the new month in chronological order.

2. **Adding new years:** Add a new year key with the corresponding month data, and the dashboard will automatically include it.

3. **Adding new products:** Follow the existing structure to add a new product:

```json
"NewProduct": {
  "platforms": {
    "Platform1": {
      "Physical": {
        "2025": { "March": 10, "April": 15 }
      }
    }
  },
  "notes": [
    {
      "id": 1,
      "text": "Note about this product",
      "showWhen": "year === '2025' || year === 'All'"
    }
  ],
  "config": {
    "years": ["2024", "2025", "All"],
    "platforms": ["Platform1", "Platform2", "All"],
    "hasEbooks": false,
    "growthFactor": 1.05,
    "productLabel": "New Product"
  }
}
```

### Notes on the showWhen Conditions

The `showWhen` property in notes now uses string expressions that will be evaluated as JavaScript. Here are some examples:

```json
"showWhen": "year === '2025' || year === 'All'"
"showWhen": "(year === '2024' || year === 'All') && (platform === 'Amazon US' || platform === 'All')"
"showWhen": "true"  // Always show this note
"showWhen": "(!month || ['May', 'June', 'July'].includes(month))"  // Only for specific months
```

## Dynamic Year and Month Handling

The dashboard now automatically detects and handles:

1. **New years:** When you add data for a new year (like 2026), the system will:
   - Automatically detect the new year in your data
   - Add it to the year selector dropdown
   - Include it in charts and calculations
   - Create forecasts for it based on previous year data

2. **New months:** If you add new months of data, the system will:
   - Automatically include them in the correct chronological order
   - Update all charts and tables to show the new data
   - Adjust forecasts based on the available months

3. **Custom months:** The system even supports non-standard month names (like "Q1", "Q2") if you want to use them in your data structure.

All of this happens without any code changes required - just update the data.json file!

## License

MIT License
