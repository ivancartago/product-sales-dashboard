// Extract Recharts components
const {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} = Recharts;

// Initialize productData as an empty object
let productData = {};
  "Cookbook": {
    "platforms": {
      "ClickFunnels": {
        "Physical": {
          "2025": { "March": 9, "Feb": 15, "Jan": 26 },
          "2024": { "Dec": 27, "Nov": 28, "Oct": 58, "Sept": 57, "Aug": 90, "July": 83, "June": 118, "May": 111, "April": 136, "March": 151, "Feb": 186, "Jan": 315 },
          "2023": { "Dec": 391, "Nov": 220, "Oct": 113, "Sept": 100, "Aug": 151, "July": 218, "June": 133, "May": 163, "April": 208, "March": 219, "Feb": 294, "Jan": 449 },
          "2022": { "Dec": 259, "Nov": 816, "Oct": 229, "Sept": 257, "Aug": 352, "July": 361, "June": 278, "May": 468, "April": 538, "March": 555, "Feb": 673, "Jan": 946 },
          "2021": { "Dec": 664 }
        },
        "eBook": {
          "2025": { "March": 11, "Feb": 5, "Jan": 26 },
          "2024": { "Dec": 11, "Nov": 34, "Oct": 20, "Sept": 29, "Aug": 41, "July": 36, "June": 61, "May": 57, "April": 69, "March": 101, "Feb": 98, "Jan": 137 },
          "2023": { "Dec": 150, "Nov": 99, "Oct": 72, "Sept": 70, "Aug": 116, "July": 158, "June": 103, "May": 102, "April": 142, "March": 168, "Feb": 140, "Jan": 277 },
          "2022": { "Dec": 182, "Nov": 302, "Oct": 166, "Sept": 183, "Aug": 228, "July": 237, "June": 165, "May": 266, "April": 280, "March": 326, "Feb": 352, "Jan": 619 },
          "2021": { "Dec": 362 }
        }
      },
      "Shopify": {
        "Physical": {
          "2025": { "March": 38, "Feb": 119, "Jan": 195 },
          "2024": { "Dec": 158, "Nov": 140, "Oct": 63, "Sept": 62, "Aug": 42, "July": 46, "June": 65, "May": 69, "April": 88, "March": 37, "Feb": 30, "Jan": 51 },
          "2023": { "Dec": 52 }
        },
        "eBook": {
          "2025": { "March": 22, "Feb": 17, "Jan": 17 },
          "2024": { "Dec": 59, "Nov": 28, "Oct": 12, "Sept": 11, "Aug": 20, "July": 25, "June": 19, "May": 22, "April": 15, "March": 11, "Feb": 0, "Jan": 0 },
          "2023": { "Dec": 0 }
        }
      },
      "KDP": {
        "Physical": {
          "2025": { "March": 1, "Feb": 6, "Jan": 12 },
          "2024": { "Dec": 146, "Nov": 11, "Oct": 17, "Sept": 27, "Aug": 15, "July": 32, "June": 39, "May": 36, "April": 44, "March": 45, "Feb": 49, "Jan": 78 },
          "2023": { "Dec": 162, "Nov": 82, "Oct": 46, "Sept": 81, "Aug": 116, "July": 90, "June": 36, "May": 75, "April": 22, "March": 0, "Feb": 0, "Jan": 0 },
          "2022": { "Dec": 0, "Nov": 0, "Oct": 0, "Sept": 0, "Aug": 0, "July": 0, "June": 0, "May": 0, "April": 0, "March": 0 }
        },
        "eBook": {
          "2025": { "March": 46, "Feb": 29, "Jan": 48 },
          "2024": { "Dec": 41, "Nov": 33, "Oct": 19, "Sept": 18, "Aug": 11, "July": 28, "June": 21, "May": 45, "April": 30, "March": 43, "Feb": 44, "Jan": 50 },
          "2023": { "Dec": 48, "Nov": 25, "Oct": 40, "Sept": 19, "Aug": 37, "July": 45, "June": 48, "May": 39, "April": 35, "March": 49, "Feb": 8, "Jan": 55 },
          "2022": { "Dec": 56, "Nov": 64, "Oct": 59, "Sept": 74, "Aug": 72, "July": 94, "June": 45, "May": 21, "April": 23, "March": 4 }
        }
      },
      "Amazon US": {
        "Physical": {
          "2025": { "March": 837, "Feb": 881, "Jan": 1013 },
          "2024": { "Dec": 2030, "Nov": 1807, "Oct": 643, "Sept": 407, "Aug": 489, "July": 803, "June": 548, "May": 556, "April": 576, "March": 579, "Feb": 593, "Jan": 808 },
          "2023": { "Dec": 513, "Nov": 563, "Oct": 425, "Sept": 310, "Aug": 434, "July": 524, "June": 244, "May": 188, "April": 596, "March": 757, "Feb": 687, "Jan": 865 },
          "2022": { "Dec": 1079, "Nov": 826, "Oct": 764, "Sept": 582, "Aug": 839, "July": 760, "June": 422, "May": 293, "April": 200, "March": 112, "Feb": 19, "Jan": 18 }
        }
      },
      "Amazon CA": {
        "Physical": {
          "2025": { "March": 121, "Feb": 85, "Jan": 123 },
          "2024": { "Dec": 1, "Nov": 110, "Oct": 64, "Sept": 49, "Aug": 52, "July": 92, "June": 51, "May": 61, "April": 71, "March": 70, "Feb": 91, "Jan": 128 },
          "2023": { "Dec": 114, "Nov": 6, "Oct": 38, "Sept": 18, "Aug": 32, "July": 32, "June": 8, "May": 6 }
        }
      },
      "Amazon UK": {
        "Physical": {
          "2025": { "March": 40, "Feb": 30, "Jan": 34 },
          "2024": { "Dec": 21, "Nov": 76, "Oct": 20, "Sept": 20, "Aug": 19, "July": 21, "June": 12, "May": 22, "April": 50, "March": 45, "Feb": 54, "Jan": 100 },
          "2023": { "Dec": 27, "Nov": 13, "Oct": 20, "Sept": 28, "Aug": 6 }
        }
      }
    },
    "notes": [
      {
        "id": 1,
        "text": "Amazon CA Cookbook ran out of inventory on Dec. 2024, that's why there's only 1 sale.",
        "showWhen": (year, platform, month) => 
          (year === "2024" || year === "All") && 
          (platform === "Amazon CA" || platform === "All") &&
          (!month || month === "Dec")
      },
      {
        "id": 2,
        "text": "Amazon US Cookbook's April 2023 Total Sales isn't accurate (April 3 - 30) because sales was counted as per week (Monday to Sunday), regardless of date. This will be updated in May.",
        "showWhen": (year, platform, month) => 
          (year === "2023" || year === "All") && 
          (platform === "Amazon US" || platform === "All") &&
          (!month || month === "April")
      },
      {
        "id": 3,
        "text": "KDP Physical ran out of inventory on March 2025, that's why there's only 1 sale.",
        "showWhen": (year, platform, month) => 
          (year === "2025" || year === "All") && 
          (platform === "KDP" || platform === "All") &&
          (!month || month === "March")
      }
    ],
    "config": {
      "years": ["2021", "2022", "2023", "2024", "2025", "All"],
      "platforms": ["ClickFunnels", "Shopify", "KDP", "Amazon US", "Amazon CA", "Amazon UK", "All"],
      "hasEbooks": true,
      "growthFactor": 1.05,
      "productLabel": "Cookbook"
    }
  },
  "Liner": {
    "platforms": {
      "Shopify": {
        "Physical": {
          "2025": { "March": 85, "Feb": 64, "Jan": 85 },
          "2024": { "Dec": 22, "Nov": 0, "Oct": 0, "Sept": 0, "Aug": 0, "July": 0, "June": 0, "May": 40, "April": 55, "March": 39, "Feb": 42, "Jan": 32 },
          "2023": { "Dec": 37 }
        }
      },
      "Amazon US": {
        "Physical": {
          "2025": { "March": 234, "Feb": 222, "Jan": 251 },
          "2024": { "Dec": 38, "Nov": 69, "Oct": 66, "Sept": 86, "Aug": 47, "July": 2, "June": 14, "May": 9, "April": 77, "March": 56, "Feb": 101, "Jan": 93 },
          "2023": { "Dec": 16 }
        }
      },
      "Amazon CA": {
        "Physical": {
          "2025": { "March": 5, "Feb": 12, "Jan": 13 },
          "2024": { "Dec": 12, "Nov": 6, "Oct": 10, "Sept": 5, "Aug": 9, "July": 16, "June": 6, "May": 8, "April": 10, "March": 11, "Feb": 1, "Jan": 2 }
        }
      },
      "Amazon UK": {
        "Physical": {
          "2025": { "March": 22, "Feb": 4, "Jan": 7 },
          "2024": { "Dec": 4, "Nov": 9, "Oct": 17, "Sept": 13, "Aug": 8, "July": 26, "June": 35, "May": 37, "April": 42, "March": 1, "Feb": 1 }
        }
      }
    },
    "notes": [
      {
        "id": 1,
        "text": "Liners aren't sold in ClickFunnels",
        "showWhen": (year, platform) => true
      },
      {
        "id": 2,
        "text": "Amazon US Liners had no to low supply from May 14 - July 30. That's why sales dropped.",
        "showWhen": (year, platform, month) => 
          (year === "2024" || year === "All") && 
          (platform === "Amazon US" || platform === "All") &&
          (!month || ["May", "June", "July"].includes(month))
      },
      {
        "id": 3,
        "text": "AMZ CA Liner had sales on multiple FBA pages from most of May 2024 to March 2025",
        "showWhen": (year, platform) => 
          ((year === "2024" || year === "2025") || year === "All") && 
          (platform === "Amazon CA" || platform === "All")
      },
      {
        "id": 4,
        "text": "No Liner stock for Shopify from June to Dec. 23, 2024",
        "showWhen": (year, platform, month) => 
          (year === "2024" || year === "All") && 
          (platform === "Shopify" || platform === "All") &&
          (!month || ["June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"].includes(month))
      }
    ],
    "config": {
      "years": ["2023", "2024", "2025", "All"],
      "platforms": ["Shopify", "Amazon US", "Amazon CA", "Amazon UK", "All"],
      "hasEbooks": false,
      "growthFactor": 1.1,
      "productLabel": "Liner"
    }
  },
  "Magnet": {
    "platforms": {
      "ClickFunnels": {
        "Physical": {
          "2025": { "March": 10, "Feb": 0, "Jan": 19 },
          "2024": { "Dec": 11, "Nov": 14, "Oct": 35, "Sept": 26, "Aug": 42, "July": 36, "June": 46, "May": 47, "April": 50, "March": 46, "Feb": 77, "Jan": 124 },
          "2023": { "Dec": 238, "Nov": 106, "Oct": 43, "Sept": 82, "Aug": 57, "July": 34, "June": 53, "May": 74, "April": 114, "March": 299, "Feb": 389, "Jan": 445 }
        },
        "eBook": {
          "2025": { "March": 5, "Feb": 7, "Jan": 11 },
          "2024": { "Dec": 13, "Nov": 43, "Oct": 32, "Sept": 27, "Aug": 21, "July": 26, "June": 49, "May": 35, "April": 34, "March": 64, "Feb": 73, "Jan": 69 },
          "2023": { "Dec": 113, "Nov": 50, "Oct": 31, "Sept": 42, "Aug": 43, "July": 64, "June": 34, "May": 61, "April": 95, "March": 271 }
        }
      },
      "Shopify": {
        "Physical": {
          "2025": { "March": 87, "Feb": 0, "Jan": 155 },
          "2024": { "Dec": 66, "Nov": 132, "Oct": 67, "Sept": 51, "Aug": 43, "July": 60, "June": 57, "May": 71, "April": 61, "March": 51, "Feb": 26, "Jan": 44 },
          "2023": { "Dec": 33 }
        },
        "eBook": {
          "2025": { "March": 48, "Feb": 70, "Jan": 136 },
          "2024": { "Dec": 99, "Nov": 106, "Oct": 56, "Sept": 42, "Aug": 49, "July": 57, "June": 35, "May": 45, "April": 56, "March": 19 }
        }
      },
      "Amazon US": {
        "Physical": {
          "2025": { "March": 515, "Feb": 630, "Jan": 736 },
          "2024": { "Dec": 684, "Nov": 268, "Oct": 244, "Sept": 202, "Aug": 227, "July": 406, "June": 267, "May": 283, "April": 382, "March": 308, "Feb": 354, "Jan": 512 },
          "2023": { "Dec": 476, "Nov": 271, "Oct": 168, "Sept": 173, "Aug": 220, "July": 347, "June": 139, "May": 213, "April": 231, "March": 230, "Feb": 247, "Jan": 65 }
        }
      },
      "Amazon CA": {
        "Physical": {
          "2025": { "March": 47, "Feb": 27, "Jan": 44 },
          "2024": { "Dec": 45, "Nov": 29, "Oct": 29, "Sept": 17, "Aug": 23, "July": 40, "June": 16, "May": 15 }
        }
      },
      "Amazon UK": {
        "Physical": {
          "2025": { "March": 8, "Feb": 0, "Jan": 2 },
          "2024": { "Dec": 14, "Nov": 12, "Oct": 23, "Sept": 17, "Aug": 14, "July": 12, "June": 5, "May": 4 }
        }
      }
    },
    "notes": [
      {
        "id": 1,
        "text": "Amazon US Magnet's April 2025 Total Sales isn't accurate (April 3 - 30) because sales was counted as per week (Monday to Sunday), regardless of date. This will be updated in May.",
        "showWhen": (year, platform, month) => 
          (year === "2025" || year === "All") && 
          (platform === "Amazon US" || platform === "All") &&
          (!month || month === "April")
      },
      {
        "id": 2,
        "text": "Amazon CA Magnet Listing was deactivated from January 9 - March 5, 2025 because supplier printed the wrong Magnets. It was replaced and reactivated on March 6, 2025",
        "showWhen": (year, platform, month) => 
          (year === "2025" || year === "All") && 
          (platform === "Amazon CA" || platform === "All") &&
          (!month || month === "Jan" || month === "Feb" || month === "March")
      },
      {
        "id": 3,
        "text": "AMZ CA Magnet had sales on multiple FBA pages on Nov. 2024 and Jan. 2025",
        "showWhen": (year, platform, month) => 
          ((year === "2024" && month === "Nov") || (year === "2025" && month === "Jan") || year === "All") && 
          (platform === "Amazon CA" || platform === "All")
      }
    ],
    "config": {
      "years": ["2023", "2024", "2025", "All"],
      "platforms": ["ClickFunnels", "Shopify", "Amazon US", "Amazon CA", "Amazon UK", "All"],
      "hasEbooks": true,
      "growthFactor": 1.05,
      "productLabel": "Magnet"
    }
  },
  "Thermometer": {
    "platforms": {
      "Shopify": {
        "Physical": {
          "2025": { "March": 0, "Feb": 17, "Jan": 34 },
          "2024": { "Dec": 78, "Nov": 49, "Oct": 24, "Sept": 27, "Aug": 33, "July": 27, "June": 25, "May": 21, "April": 20, "March": 18, "Feb": 31 }
        }
      },
      "Amazon US": {
        "Physical": {
          "2025": { "March": 92, "Feb": 119, "Jan": 88 },
          "2024": { "Dec": 78, "Nov": 61, "Oct": 39, "Sept": 40, "Aug": 20, "July": 78, "June": 18, "May": 28, "April": 52, "March": 49, "Feb": 26 }
        }
      },
      "Amazon CA": {
        "Physical": {
          "2025": { "March": 8, "Feb": 6, "Jan": 16 },
          "2024": { "Dec": 6, "Nov": 5, "Oct": 5, "Sept": 6, "Aug": 5, "July": 22, "June": 5, "May": 19, "April": 15, "March": 7 }
        }
      },
      "Amazon UK": {
        "Physical": {
          "2025": { "March": 5, "Feb": 5, "Jan": 9 },
          "2024": { "Dec": 4, "Nov": 8, "Oct": 6, "Sept": 8, "Aug": 9, "July": 18, "June": 7, "May": 17, "April": 43, "March": 3, "Feb": 1 }
        }
      }
    },
    "notes": [
      {
        "id": 1,
        "text": "Thermometers aren't sold in ClickFunnels",
        "showWhen": (year, platform) => true
      },
      {
        "id": 2,
        "text": "AMZ US Thermometer has multiple FBA Pages since Jan. 1, 2025.",
        "showWhen": (year, platform) => 
          (year === "2025" || year === "All") && 
          (platform === "Amazon US" || platform === "All")
      },
      {
        "id": 3,
        "text": "AMZ US Thermometer Listing got deactivated from 3rd week of May to 1st week of June 2024",
        "showWhen": (year, platform, month) => 
          (year === "2024" || year === "All") && 
          (platform === "Amazon US" || platform === "All") &&
          (!month || month === "May" || month === "June")
      },
      {
        "id": 4,
        "text": "AMZ US Thermometer had no stock for 1 week in August 14 - 28, 2024",
        "showWhen": (year, platform, month) => 
          (year === "2024" || year === "All") && 
          (platform === "Amazon US" || platform === "All") &&
          (!month || month === "Aug")
      }
    ],
    "config": {
      "years": ["2024", "2025", "All"],
      "platforms": ["Shopify", "Amazon US", "Amazon CA", "Amazon UK", "All"],
      "hasEbooks": false,
      "growthFactor": 1.08,
      "productLabel": "Thermometer"
    }
  }
};

// Colors for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
// Default month order
const DEFAULT_MONTHS = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
// We'll dynamically populate this array based on the data
let MONTHS = [];

// Helper function to calculate yearly totals by product type
const calculateYearlyTotals = (salesData, selectedPlatform, hasEbooks) => {
  const years = Object.keys(salesData.platforms)
    .flatMap(platform => 
      Object.keys(salesData.platforms[platform])
        .flatMap(type => 
          Object.keys(salesData.platforms[platform][type])
        )
    )
    .filter((v, i, a) => a.indexOf(v) === i);
  
  const result = [];
  
  years.forEach(year => {
    const yearData = { year };
    let totalPhysical = 0;
    let totalEBook = 0;
    
    // Loop through platforms
    Object.keys(salesData.platforms).forEach(platform => {
      // Skip if a specific platform is selected and this isn't it
      if (selectedPlatform !== "All" && platform !== selectedPlatform) return;
      
      const platformData = salesData.platforms[platform];
      
      // Add physical sales if available
      if (platformData.Physical && platformData.Physical[year]) {
        Object.values(platformData.Physical[year]).forEach(value => {
          totalPhysical += value || 0;
        });
      }
      
      // Add eBook sales if available and product has eBooks
      if (hasEbooks && platformData.eBook && platformData.eBook[year]) {
        Object.values(platformData.eBook[year]).forEach(value => {
          totalEBook += value || 0;
        });
      }
    });
    
    yearData.Physical = totalPhysical;
    yearData.eBook = totalEBook;
    yearData.Total = totalPhysical + totalEBook;
    
    result.push(yearData);
  });
  
  // Sort by year chronologically
  result.sort((a, b) => {
    if (a.year === b.year) return 0;
    if (!isNaN(parseInt(a.year)) && !isNaN(parseInt(b.year))) {
      return parseInt(a.year) - parseInt(b.year);
    }
    return a.year < b.year ? -1 : 1;
  });
  
  return result;
};

// Helper function to calculate platform totals
const calculatePlatformTotals = (salesData, selectedYear, hasEbooks) => {
  const result = [];
  
  Object.keys(salesData.platforms).forEach(platform => {
    const platformData = { platform };
    let totalPhysical = 0;
    let totalEBook = 0;
    
    const data = salesData.platforms[platform];
    
    // Add physical sales if available
    if (data.Physical) {
      Object.keys(data.Physical).forEach(year => {
        // Skip if a specific year is selected and this isn't it
        if (selectedYear !== "All" && year !== selectedYear) return;
        
        Object.values(data.Physical[year]).forEach(value => {
          totalPhysical += value || 0;
        });
      });
    }
    
    // Add eBook sales if available and product has eBooks
    if (hasEbooks && data.eBook) {
      Object.keys(data.eBook).forEach(year => {
        // Skip if a specific year is selected and this isn't it
        if (selectedYear !== "All" && year !== selectedYear) return;
        
        Object.values(data.eBook[year]).forEach(value => {
          totalEBook += value || 0;
        });
      });
    }
    
    platformData.Physical = totalPhysical;
    platformData.eBook = totalEBook;
    platformData.Total = totalPhysical + totalEBook;
    
    result.push(platformData);
  });
  
  return result;
};

// Helper function to get monthly data for a specific year and platform
const getMonthlyData = (salesData, year, platform, hasEbooks) => {
  const result = [];
  
  MONTHS.forEach(month => {
    const monthData = { month };
    let totalPhysical = 0;
    let totalEBook = 0;
    
    // Skip months that don't have data for the selected year
    if (year === "All") return; // Not applicable for "All" years
    
    // Loop through platforms
    Object.keys(salesData.platforms).forEach(platformName => {
      // Skip if a specific platform is selected and this isn't it
      if (platform !== "All" && platformName !== platform) return;
      
      const platformData = salesData.platforms[platformName];
      
      // Add physical sales if available
      if (platformData.Physical && 
          platformData.Physical[year] && 
          platformData.Physical[year][month] !== undefined) {
        totalPhysical += platformData.Physical[year][month] || 0;
      }
      
      // Add eBook sales if available and product has eBooks
      if (hasEbooks && platformData.eBook && 
          platformData.eBook[year] && 
          platformData.eBook[year][month] !== undefined) {
        totalEBook += platformData.eBook[year][month] || 0;
      }
    });
    
    // Only add months that have data
    if (totalPhysical > 0 || totalEBook > 0) {
      monthData.Physical = totalPhysical;
      monthData.eBook = totalEBook;
      monthData.Total = totalPhysical + totalEBook;
      result.push(monthData);
    }
  });
  
  return result;
};

// Function to calculate forecast based on selected platform
const calculate2025Forecast = (salesData, selectedPlatform, hasEbooks, growthFactor) => {
  // Get all years from the data
  const years = Object.keys(salesData.platforms)
    .flatMap(platform => 
      Object.keys(salesData.platforms[platform])
        .flatMap(type => 
          Object.keys(salesData.platforms[platform][type])
        )
    )
    .filter((v, i, a) => a.indexOf(v) === i && !isNaN(parseInt(v)));
  
  // Sort years numerically
  years.sort((a, b) => parseInt(a) - parseInt(b));
  
  // Get the latest year (assuming this is the year we're forecasting)
  const latestYear = years[years.length - 1];
  
  // Get the previous year
  const previousYear = years[years.length - 2];
  
  // If we don't have at least two years of data, can't make a forecast
  if (!latestYear || !previousYear) return null;
  
  // Get the latest year data (with platform filter)
  const latestYearData = calculateYearlyTotals(salesData, selectedPlatform, hasEbooks)
    .find(d => d.year === latestYear);
  
  // If no latest year data, can't make a forecast
  if (!latestYearData) return null;
  
  // Get previous year data for comparison (with platform filter)
  const previousYearData = calculateYearlyTotals(salesData, selectedPlatform, hasEbooks)
    .find(d => d.year === previousYear);
  
  // If no previous year data, can't make a forecast
  if (!previousYearData) return null;
  
  // Count the months in the latest year data
  const monthsInLatestYear = countMonthsInYear(salesData, latestYear, selectedPlatform);
  
  // Calculate monthly averages for previous year
  const avgPreviousYearPhysical = previousYearData.Physical / 12;
  const avgPreviousYearEBook = hasEbooks ? previousYearData.eBook / 12 : 0;
  
  // Forecast remaining months based on previous year monthly averages and growth factor
  const forecast = {
    year: `${latestYear} (Forecast)`,
    Physical: latestYearData.Physical + (avgPreviousYearPhysical * (12 - monthsInLatestYear) * growthFactor),
    eBook: hasEbooks ? latestYearData.eBook + (avgPreviousYearEBook * (12 - monthsInLatestYear) * growthFactor) : 0,
  };
  
  forecast.Total = forecast.Physical + forecast.eBook;
  
  return forecast;
};

// Helper function to count the number of months with data in a year
const countMonthsInYear = (salesData, year, selectedPlatform) => {
  const monthsSet = new Set();
  
  Object.keys(salesData.platforms).forEach(platform => {
    // Skip if a specific platform is selected and this isn't it
    if (selectedPlatform !== "All" && platform !== selectedPlatform) return;
    
    Object.keys(salesData.platforms[platform]).forEach(type => {
      if (salesData.platforms[platform][type][year]) {
        Object.keys(salesData.platforms[platform][type][year]).forEach(month => {
          monthsSet.add(month);
        });
      }
    });
  });
  
  return monthsSet.size;
};

// Prepare data for pie chart
const preparePieChartData = (salesData, selectedYear, hasEbooks) => {
  const platformData = calculatePlatformTotals(salesData, selectedYear, hasEbooks);
  return platformData.map(item => ({
    name: item.platform,
    value: item.Total
  }));
};

// Custom tooltip component for the pie chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      React.createElement('div', { className: 'bg-white p-2 border rounded shadow' },
        React.createElement('p', { className: 'font-semibold' }, payload[0].name),
        React.createElement('p', null, `Sales: ${payload[0].value.toLocaleString()}`),
        React.createElement('p', null, `Share: ${((payload[0].value / payload[0].payload.fullTotal) * 100).toFixed(1)}%`)
      )
    );
  }
  return null;
};

// Main dashboard component
const ProductSalesDashboard = () => {
  const [selectedProduct, setSelectedProduct] = React.useState("Cookbook");
  const [view, setView] = React.useState('yearly');
  const [selectedYear, setSelectedYear] = React.useState('All');
  const [selectedPlatform, setSelectedPlatform] = React.useState('All');
  
  // Get the current product data and configuration
  const currentProductData = productData[selectedProduct];
  
  // If data hasn't loaded yet, show loading
  if (!currentProductData) {
    return React.createElement('div', { className: 'p-4 text-center' },
      React.createElement('h2', { className: 'text-xl mb-2' }, 'Loading dashboard data...')
    );
  }
  
  const { platforms, notes, config } = currentProductData;
  const { platforms: availablePlatforms, hasEbooks, growthFactor, productLabel } = config;
  
  // Get dynamically detected years instead of using the config.years
  const availableYears = extractAvailableYears(productData, selectedProduct);
  
  // Calculate data based on selections
  const yearlyData = calculateYearlyTotals(currentProductData, selectedPlatform, hasEbooks);
  const platformData = calculatePlatformTotals(currentProductData, selectedYear, hasEbooks);
  const monthlyData = getMonthlyData(currentProductData, selectedYear, selectedPlatform, hasEbooks);
  const forecast2025 = calculate2025Forecast(currentProductData, selectedPlatform, hasEbooks, growthFactor);
  
  // Prepare pie chart data
  const pieChartData = preparePieChartData(currentProductData, selectedYear, hasEbooks);
  // Add total to each slice for percentage calculation
  const totalSales = pieChartData.reduce((sum, item) => sum + item.value, 0);
  const enhancedPieData = pieChartData.map(item => ({
    ...item,
    fullTotal: totalSales
  }));
  
  // Create summary data including forecast
  const summaryData = [...yearlyData];
  
  // Get the latest year from the data
  const years = yearlyData.map(item => item.year).filter(year => !isNaN(parseInt(year)));
  const latestYear = years.length > 0 ? Math.max(...years.map(year => parseInt(year))).toString() : null;
  
  if ((selectedYear === 'All' || selectedYear === latestYear) && forecast2025) {
    summaryData.push(forecast2025);
  }
  
  // Filter notes based on current view
  const applicableNotes = notes.filter(note => {
    const monthValue = view === 'monthly' ? 
      (monthlyData.length > 0 ? monthlyData[0].month : null) : null;
    try {
      return note.showWhen(selectedYear, selectedPlatform, monthValue);
    } catch (error) {
      console.error('Error evaluating note condition:', error);
      return false;
    }
  });
  
  // Handle product change
  const handleProductChange = (e) => {
    const newProduct = e.target.value;
    setSelectedProduct(newProduct);
    
    // Reset to default values for the new product
    setView('yearly');
    setSelectedYear('All');
    setSelectedPlatform('All');
  };
  
  // Handle year change
  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setSelectedYear(newYear);
  };
  
  // Handle platform change
  const handlePlatformChange = (e) => {
    const newPlatform = e.target.value;
    setSelectedPlatform(newPlatform);
  };
  
  // Check for potential issues/alerts specific to the selected product
  const checkForAlerts = () => {
    if (selectedProduct === "Thermometer" && 
        (selectedPlatform === "All" || selectedPlatform === "Shopify") && 
        currentProductData.platforms.Shopify.Physical["2025"]["March"] === 0) {
      return "Shopify shows zero sales for March 2025. Please verify if this is correct or if there was an inventory or reporting issue.";
    }
    return null;
  };
  
  const alert = checkForAlerts();
  
  return React.createElement('div', { className: 'p-4' },
    // Title
    React.createElement('h2', { className: 'text-xl font-bold mb-4' }, 'Product Sales Dashboard'),
    
    // Product selector
    React.createElement('div', { className: 'mb-4 p-3 bg-blue-50 border border-blue-200 rounded' },
      React.createElement('div', { className: 'flex items-center space-x-2' },
        React.createElement('label', { className: 'font-semibold' }, 'Select Product:'),
        React.createElement('select', { 
          className: 'border rounded px-3 py-2',
          value: selectedProduct,
          onChange: handleProductChange
        }, 
          Object.keys(productData).map(product => 
            React.createElement('option', { key: product, value: product }, product)
          )
        )
      )
    ),
    
    // Filters
    React.createElement('div', { className: 'flex mb-4 space-x-4' },
      // View selector
      React.createElement('div', null,
        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'View'),
        React.createElement('select', { 
          className: 'border rounded px-3 py-2 w-40',
          value: view,
          onChange: (e) => setView(e.target.value)
        },
          React.createElement('option', { value: 'yearly' }, 'By Year'),
          React.createElement('option', { value: 'monthly' }, 'By Month'),
          React.createElement('option', { value: 'platform' }, 'By Platform')
        )
      ),
      
      // Year selector
      React.createElement('div', null,
        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Year'),
        React.createElement('select', { 
          className: 'border rounded px-3 py-2 w-40',
          value: selectedYear,
          onChange: handleYearChange,
          disabled: view === 'yearly'
        },
          availableYears.map(year => 
            React.createElement('option', { key: year, value: year }, year)
          )
        )
      ),
      
      // Platform selector
      React.createElement('div', null,
        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Platform'),
        React.createElement('select', { 
          className: 'border rounded px-3 py-2 w-40',
          value: selectedPlatform,
          onChange: handlePlatformChange,
          disabled: view === 'platform'
        },
          availablePlatforms.map(platform => 
            React.createElement('option', { key: platform, value: platform }, platform)
          )
        )
      )
    ),
    
    // Alert
    alert && React.createElement('div', { className: 'mb-4 p-2 bg-red-50 border border-red-200 rounded text-red-700' },
      React.createElement('strong', null, 'Alert: '),
      alert
    ),
    
    // Main content grid
    React.createElement('div', { className: 'grid grid-cols-2 gap-4' },
      // Left column
      React.createElement('div', { className: 'col-span-1' },
        // Yearly view
        view === 'yearly' && React.createElement('div', null,
          React.createElement('h3', { className: 'text-lg font-semibold mb-2' },
            `Sales by Year ${selectedPlatform !== 'All' ? `(${selectedPlatform})` : ''}`
          ),
          React.createElement('div', { className: 'h-64' },
            React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
              React.createElement(BarChart, { data: yearlyData },
                React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
                React.createElement(XAxis, { dataKey: 'year' }),
                React.createElement(YAxis, null),
                React.createElement(Tooltip, null),
                React.createElement(Legend, null),
                React.createElement(Bar, { 
                  dataKey: 'Physical', 
                  fill: '#8884d8', 
                  name: `Physical ${productLabel}` 
                }),
                hasEbooks && React.createElement(Bar, { 
                  dataKey: 'eBook', 
                  fill: '#82ca9d', 
                  name: productLabel === "Magnet" ? "Digital Products" : "eBooks" 
                })
              )
            )
          ),
          
          React.createElement('div', { className: 'mt-6' },
            React.createElement('h3', { className: 'text-lg font-semibold mb-2' },
              `Sales Trend by Year ${selectedPlatform !== 'All' ? `(${selectedPlatform})` : ''}`
            ),
            React.createElement('div', { className: 'h-64' },
              React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
                React.createElement(LineChart, { data: yearlyData },
                  React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
                  React.createElement(XAxis, { dataKey: 'year' }),
                  React.createElement(YAxis, null),
                  React.createElement(Tooltip, null),
                  React.createElement(Legend, null),
                  React.createElement(Line, { 
                    type: 'monotone', 
                    dataKey: 'Total', 
                    stroke: '#ff7300', 
                    name: 'Total Sales' 
                  }),
                  React.createElement(Line, { 
                    type: 'monotone', 
                    dataKey: 'Physical', 
                    stroke: '#8884d8', 
                    name: `Physical ${productLabel}` 
                  }),
                  hasEbooks && React.createElement(Line, { 
                    type: 'monotone', 
                    dataKey: 'eBook', 
                    stroke: '#82ca9d', 
                    name: productLabel === "Magnet" ? "Digital Products" : "eBooks" 
                  })
                )
              )
            )
          )
        ),
        
        // Monthly view
        view === 'monthly' && React.createElement('div', null,
          React.createElement('h3', { className: 'text-lg font-semibold mb-2' },
            `Monthly Sales for ${selectedYear === 'All' ? 'All Years' : selectedYear}
             ${selectedPlatform !== 'All' ? ` (${selectedPlatform})` : ''}`
          ),
          
          selectedYear === 'All' 
            ? React.createElement('p', { className: 'text-gray-600 mb-4' }, 
                'Please select a specific year to see monthly data.'
              )
            : monthlyData.length > 0 
              ? React.createElement('div', { className: 'h-64' },
                  React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
                    React.createElement(BarChart, { data: monthlyData },
                      React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
                      React.createElement(XAxis, { dataKey: 'month' }),
                      React.createElement(YAxis, null),
                      React.createElement(Tooltip, null),
                      React.createElement(Legend, null),
                      React.createElement(Bar, { 
                        dataKey: 'Physical', 
                        fill: '#8884d8', 
                        name: `Physical ${productLabel}` 
                      }),
                      hasEbooks && React.createElement(Bar, { 
                        dataKey: 'eBook', 
                        fill: '#82ca9d', 
                        name: productLabel === "Magnet" ? "Digital Products" : "eBooks" 
                      })
                    )
                  )
                )
              : React.createElement('p', { className: 'text-gray-600 mb-4' }, 
                  'No monthly data available for the selected combination.'
                ),
          
          monthlyData.length > 0 && React.createElement('div', { className: 'mt-6' },
            React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Monthly Sales Trend'),
            React.createElement('div', { className: 'h-64' },
              React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
                React.createElement(LineChart, { data: monthlyData },
                  React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
                  React.createElement(XAxis, { dataKey: 'month' }),
                  React.createElement(YAxis, null),
                  React.createElement(Tooltip, null),
                  React.createElement(Legend, null),
                  React.createElement(Line, { 
                    type: 'monotone', 
                    dataKey: 'Total', 
                    stroke: '#ff7300', 
                    name: 'Total Sales' 
                  }),
                  React.createElement(Line, { 
                    type: 'monotone', 
                    dataKey: 'Physical', 
                    stroke: '#8884d8', 
                    name: `Physical ${productLabel}` 
                  }),
                  hasEbooks && React.createElement(Line, { 
                    type: 'monotone', 
                    dataKey: 'eBook', 
                    stroke: '#82ca9d', 
                    name: productLabel === "Magnet" ? "Digital Products" : "eBooks" 
                  })
                )
              )
            )
          )
        ),
        
        // Platform view
        view === 'platform' && React.createElement('div', null,
          React.createElement('h3', { className: 'text-lg font-semibold mb-2' },
            `Sales by Platform ${selectedYear !== 'All' ? `(${selectedYear})` : ''}`
          ),
          React.createElement('div', { className: 'h-64' },
            React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
              React.createElement(BarChart, { data: platformData },
                React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
                React.createElement(XAxis, { dataKey: 'platform' }),
                React.createElement(YAxis, null),
                React.createElement(Tooltip, null),
                React.createElement(Legend, null),
                React.createElement(Bar, { 
                  dataKey: 'Physical', 
                  fill: '#8884d8', 
                  name: `Physical ${productLabel}` 
                }),
                hasEbooks && React.createElement(Bar, { 
                  dataKey: 'eBook', 
                  fill: '#82ca9d', 
                  name: productLabel === "Magnet" ? "Digital Products" : "eBooks" 
                })
              )
            )
          ),
          
          React.createElement('div', { className: 'mt-6' },
            React.createElement('h3', { className: 'text-lg font-semibold mb-2' },
              `Total Sales by Platform ${selectedYear !== 'All' ? `(${selectedYear})` : ''}`
            ),
            React.createElement('div', { className: 'h-64' },
              React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
                React.createElement(BarChart, { data: platformData },
                  React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
                  React.createElement(XAxis, { dataKey: 'platform' }),
                  React.createElement(YAxis, null),
                  React.createElement(Tooltip, null),
                  React.createElement(Legend, null),
                  React.createElement(Bar, { 
                    dataKey: 'Total', 
                    fill: '#ff7300', 
                    name: 'Total Sales' 
                  })
                )
              )
            )
          )
        )
      ),
      
      // Right column
      React.createElement('div', { className: 'col-span-1' },
        // Pie chart
        React.createElement('h3', { className: 'text-lg font-semibold mb-2' },
          `Platform Sales Distribution ${selectedYear !== 'All' ? `(${selectedYear})` : ''}`
        ),
        React.createElement('div', { className: 'h-64' },
          React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
            React.createElement(PieChart, null,
              React.createElement(Pie, {
                data: enhancedPieData,
                cx: '50%',
                cy: '50%',
                labelLine: true,
                label: ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`,
                outerRadius: 80,
                fill: '#8884d8',
                dataKey: 'value'
              },
                enhancedPieData.map((entry, index) => 
                  React.createElement(Cell, { 
                    key: `cell-${index}`, 
                    fill: COLORS[index % COLORS.length] 
                  })
                )
              ),
              React.createElement(Tooltip, { content: CustomTooltip })
            )
          )
        ),
        
        // Data summary table
        React.createElement('div', { className: 'mt-6' },
          React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Data Summary'),
          React.createElement('table', { className: 'min-w-full border' },
            React.createElement('thead', null,
              React.createElement('tr', { className: 'bg-gray-100' },
                React.createElement('th', { className: 'border p-2' }, 'Year'),
                React.createElement('th', { className: 'border p-2' }, `Physical ${productLabel}`),
                hasEbooks && React.createElement('th', { className: 'border p-2' }, 
                  productLabel === "Magnet" ? "Digital Products" : "eBooks"
                ),
                React.createElement('th', { className: 'border p-2' }, 'Total')
              )
            ),
            React.createElement('tbody', null,
              summaryData.map((item) => 
                React.createElement('tr', { 
                  key: item.year, 
                  className: item.year === "2025 (Forecast)" ? "bg-yellow-50" : ""
                },
                  React.createElement('td', { className: 'border p-2' }, item.year),
                  React.createElement('td', { className: 'border p-2' }, 
                    Math.round(item.Physical).toLocaleString()
                  ),
                  hasEbooks && React.createElement('td', { className: 'border p-2' }, 
                    Math.round(item.eBook).toLocaleString()
                  ),
                  React.createElement('td', { className: 'border p-2' }, 
                    Math.round(item.Total).toLocaleString()
                  )
                )
              )
            )
          )
        )
      )
    ),
    
    // Notes section
    applicableNotes.length > 0 && React.createElement('div', { className: 'mt-8 bg-yellow-50 p-4 rounded border border-yellow-200' },
      React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Notes'),
      React.createElement('ol', { className: 'list-decimal pl-5' },
        applicableNotes.map(note => 
          React.createElement('li', { key: note.id, className: 'mb-1' }, note.text)
        )
      )
    ),
    
    // Forecast Method Explanation
    forecast2025 && React.createElement('div', { className: 'mt-8 bg-blue-50 p-4 rounded border border-blue-200' },
      React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Forecast Methodology'),
      React.createElement('p', { className: 'mb-2' }, 
        `The ${forecast2025.year.split(' ')[0]} forecast for ${selectedProduct} is calculated using the following method:`
      ),
      React.createElement('ol', { className: 'list-decimal pl-5' },
        React.createElement('li', { className: 'mb-1' }, 
          `We use the actual data from the available months of ${forecast2025.year.split(' ')[0]} (${countMonthsInYear(currentProductData, forecast2025.year.split(' ')[0], selectedPlatform)} months so far).`
        ),
        React.createElement('li', { className: 'mb-1' }, 
          `For the remaining ${12 - countMonthsInYear(currentProductData, forecast2025.year.split(' ')[0], selectedPlatform)} months, we calculate the average monthly sales from the previous year for the selected platform.`
        ),
        selectedProduct === "Liner" && React.createElement('li', { className: 'mb-1' },
          'Adjustments are made to account for out-of-stock periods in 2024:',
          React.createElement('ul', { className: 'list-disc pl-5 mt-1' },
            React.createElement('li', null, 'Shopify: No stock from June to Dec 23, 2024'),
            React.createElement('li', null, 'Amazon US: Low/no supply from mid-May to end of July, 2024')
          )
        ),
        selectedProduct === "Thermometer" && React.createElement('li', { className: 'mb-1' },
          'Adjustments are made to account for inventory issues in 2024:',
          React.createElement('ul', { className: 'list-disc pl-5 mt-1' },
            React.createElement('li', null, 'Amazon US: Listing deactivation in May-June and stock outage in August'),
            alert && React.createElement('li', null, 'Shopify: Potential March 2025 issue considered in projection')
          )
        ),
        React.createElement('li', { className: 'mb-1' }, 
          `We apply a ${((growthFactor - 1) * 100).toFixed(0)}% growth factor to these monthly averages to account for expected growth.`
        ),
        React.createElement('li', { className: 'mb-1' }, 
          'The forecast combines the actual 3 months plus the projected 9 months.'
        )
      ),
      React.createElement('p', { className: 'mt-2 italic' }, 
        'Note: The forecast automatically adjusts when you change the selected platform.'
      )
    ),
    
    // Product comparison section
    React.createElement('div', { className: 'mt-8 p-4 rounded border border-gray-200' },
      React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Cross-Product Analysis'),
      React.createElement('p', { className: 'mb-2' }, 
        'Use the product selector at the top to switch between products and compare their sales performance.'
      ),
      React.createElement('div', { className: 'grid grid-cols-2 gap-4 mt-4' },
        React.createElement('div', { className: 'p-3 border rounded bg-gray-50' },
          React.createElement('h4', { className: 'font-semibold' }, `Current Product: ${selectedProduct}`),
          React.createElement('p', null, 
            `Total sales in 2025 (Q1): ${yearlyData.find(d => d.year === "2025")?.Total.toLocaleString() || "N/A"}`
          ),
          React.createElement('p', null, 
            `Top platform: ${platformData.sort((a, b) => b.Total - a.Total)[0]?.platform}`
          ),
          hasEbooks && React.createElement('p', null, 
            `Physical to Digital ratio: ${(() => {
              const physicalTotal = yearlyData.reduce((sum, year) => sum + year.Physical, 0);
              const eBookTotal = yearlyData.reduce((sum, year) => sum + year.eBook, 0);
              return eBookTotal > 0 ? `${(physicalTotal / eBookTotal).toFixed(1)}:1` : "N/A";
            })()}`
          )
        ),
        React.createElement('div', { className: 'p-3 border rounded bg-gray-50' },
          React.createElement('h4', { className: 'font-semibold' }, 'Product Insights'),
          React.createElement('ul', { className: 'list-disc pl-5' },
            selectedProduct === "Cookbook" && React.createElement(React.Fragment, null,
              React.createElement('li', null, 'Only product with significant KDP sales'),
              React.createElement('li', null, 'Highest overall sales volume across all platforms')
            ),
            selectedProduct === "Liner" && React.createElement(React.Fragment, null,
              React.createElement('li', null, 'No ClickFunnels sales channel'),
              React.createElement('li', null, 'Significant stock availability issues in 2024')
            ),
            selectedProduct === "Magnet" && React.createElement(React.Fragment, null,
              React.createElement('li', null, 'Strong digital sales component'),
              React.createElement('li', null, 'February 2025 showed unusual sales pattern')
            ),
            selectedProduct === "Thermometer" && React.createElement(React.Fragment, null,
              React.createElement('li', null, 'Newest product in the lineup (2024 launch)'),
              React.createElement('li', null, 'Amazon US is dominant sales channel')
            )
          )
        )
      )
    )
  );
};

// Function to parse the showWhen string from data.json into a function
function createShowWhenFunction(showWhenString) {
  // Create a function that takes year, platform, and month as parameters
  return new Function('year', 'platform', 'month', `return ${showWhenString};`);
}

// Function to determine all months from the data
function extractAllMonths(data) {
  const monthsSet = new Set();
  
  // Loop through all products, platforms, types, years, and months
  Object.values(data).forEach(product => {
    Object.values(product.platforms).forEach(platform => {
      Object.values(platform).forEach(type => {
        Object.values(type).forEach(year => {
          Object.keys(year).forEach(month => {
            monthsSet.add(month);
          });
        });
      });
    });
  });
  
  // Convert the Set to an Array and sort it according to DEFAULT_MONTHS order
  return Array.from(monthsSet).sort((a, b) => {
    const indexA = DEFAULT_MONTHS.indexOf(a);
    const indexB = DEFAULT_MONTHS.indexOf(b);
    
    // If either month is not in the default list, put it at the end
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    
    return indexA - indexB;
  });
}

// Function to process the loaded data.json
function processLoadedData(data) {
  // Convert showWhen strings to functions
  Object.keys(data).forEach(productKey => {
    const product = data[productKey];
    
    if (product.notes) {
      product.notes.forEach(note => {
        note.showWhen = createShowWhenFunction(note.showWhen);
      });
    }
  });
  
  // Update the global months array
  MONTHS = extractAllMonths(data);
  
  return data;
}

// Function to determine all available years from the actual data
function extractAvailableYears(productData, selectedProduct) {
  const yearsSet = new Set();
  
  // Get the product data
  const currentProductData = productData[selectedProduct];
  if (!currentProductData) return [];
  
  // Loop through all platforms, types, and years
  Object.values(currentProductData.platforms).forEach(platform => {
    Object.values(platform).forEach(type => {
      Object.keys(type).forEach(year => {
        // Only add numeric years (not special values like "All")
        if (!isNaN(parseInt(year))) {
          yearsSet.add(year);
        }
      });
    });
  });
  
  // Add "All" option
  yearsSet.add("All");
  
  // Convert to array and sort numerically
  return Array.from(yearsSet).sort((a, b) => {
    if (a === "All") return 1; // "All" should be last
    if (b === "All") return -1;
    return parseInt(a) - parseInt(b);
  });
}

// Function to load the data and initialize the dashboard
function initializeDashboard() {
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Process the loaded data
      productData = processLoadedData(data);
      
      // Render the dashboard
      ReactDOM.render(
        React.createElement(ProductSalesDashboard),
        document.getElementById('root')
      );
    })
    .catch(error => {
      console.error('Error loading data:', error);
      // Display an error message in the UI
      document.getElementById('root').innerHTML = `
        <div style="color: red; padding: 20px; text-align: center;">
          <h2>Error Loading Data</h2>
          <p>${error.message}</p>
          <p>Please check that data.json is properly formatted and accessible.</p>
        </div>
      `;
    });
}

// Initialize the dashboard when the page loads
window.addEventListener('DOMContentLoaded', initializeDashboard);