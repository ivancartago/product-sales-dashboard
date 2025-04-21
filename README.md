# Product Sales Dashboard - User Guide

## Overview

This dashboard displays sales data for [Pine and Pepper](https://pineandpepper.co) products across different platforms. It includes charts and tables to help you visualize sales trends over time.

## How to Update Sales Data

### Basic Steps

1. Open the `data.js` file in a text editor (like Notepad, TextEdit, or VS Code)
2. Find the product section you want to update (Cookbook, Liner, Magnet, or Thermometer)
3. Add new sales data for the month/platform you need to update
4. Save the file
5. Refresh the dashboard in your browser

### Detailed Instructions for Adding New Monthly Data

#### Step 1: Find Your Product

In the `data.js` file, locate the product you want to update. Each product has its own section that starts with a name like `"Cookbook": {` or `"Liner": {`.

#### Step 2: Navigate to the Right Platform

Within each product section, find the platform you want to update under the `"platforms"` section. For example:
- `"ClickFunnels"`
- `"Shopify"`
- `"Amazon US"`
- `"Amazon CA"`
- `"Amazon UK"`
- `"KDP"`

#### Step 3: Find the Product Type and Year

Each platform contains product types:
- `"Physical"` for physical products
- `"eBook"` for digital products (Note: even though Magnet shows as "Digital Products" in the dashboard, the data structure still uses `"eBook"` as the type)

Within each type, you'll find years (like `"2025"`).

#### Step 4: Add Your New Data

To add a new month's data, add it to the list of months within the appropriate year. 

**Example:** To add April 2025 sales for Cookbook on Amazon US:

Find this section:
```
"Amazon US": {
  "Physical": {
    "2025": { "March": 837, "Feb": 881, "Jan": 1013 },
    ...
  }
}
```

Add April data like this:
```
"Amazon US": {
  "Physical": {
    "2025": { "April": 895, "March": 837, "Feb": 881, "Jan": 1013 },
    ...
  }
}
```

**Important:** 
- Use the exact month format as shown in the existing data: `"Jan"`, `"Feb"`, `"March"`, `"April"`, `"May"`, `"June"`, `"July"`, `"Aug"`, `"Sept"`, `"Oct"`, `"Nov"`, `"Dec"`
- Use a number without quotation marks for the sales value: `895` (not "895")
- Add a comma after the new value unless it's the last one in the list
- The order of months doesn't matter, but it's easier to read if you put newer months first

#### Step 5: Save and View

Save the file and refresh your browser to see the updated dashboard.

### Adding Notes (Optional)

If there's something important about your new data (like inventory issues or special promotions), you can add a note:

1. Find the `"notes"` section for your product
2. Add a new note object following the pattern of existing notes
3. Use a unique ID number
4. Write your note text
5. Set the `showWhen` function to control when the note appears

**Example:**
```
{
  "id": 4,
  "text": "Amazon US Cookbook had a special promotion in April 2025.",
  "showWhen": (year, platform, month) => 
    (year === "2025" || year === "All") && 
    (platform === "Amazon US" || platform === "All") &&
    (!month || month === "April")
}
```

## Common Scenarios

### Adding a New Month for All Platforms

If you're adding a new month (like April 2025) for all platforms of a product, you'll need to add the month to each platform separately.

### Adding a New Product

Adding a new product requires more technical knowledge. Please consult with your developer for this task.

### Correcting Mistakes

If you enter incorrect data, simply find the value in the file and change it to the correct number.

## Troubleshooting

### Dashboard Not Updating

- Make sure you saved the `data.js` file
- Refresh your browser (try a hard refresh: Ctrl+F5 or Cmd+Shift+R)
- Check for missing commas or other syntax errors

### Sales Data Not Appearing

- Verify you used the correct month format (e.g., "Jan", "Feb", "March", "April")
- Make sure you're looking at the right year/platform in the dashboard
- Check that you added the data as a number (895) not a string ("895")

### Errors in Charts

- Look for error messages in the browser console (right-click > Inspect > Console)
- Check for typos or missing commas in your data
