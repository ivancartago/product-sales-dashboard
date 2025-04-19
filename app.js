// Dummy data (You will need to replace this with your actual product data)
const productData = {
  Cookbook: {
    sales: {
      yearly: [100, 150, 200, 250, 300],
      monthly: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
      platforms: {
        AmazonUS: 400,
        Shopify: 150,
        KDP: 100
      }
    },
    notes: ["Amazon US Cookbook's April 2023 sales aren't accurate."]
  },
  Liner: {
    sales: {
      yearly: [50, 60, 70, 80, 90],
      monthly: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      platforms: {
        AmazonUS: 300,
        Shopify: 120
      }
    },
    notes: ["No sales in ClickFunnels for Liners."]
  },
  // Add similar data for other products (Magnet, Thermometer)
};

// Initialize chart variables
let yearlySalesChart, monthlySalesChart, platformSalesChart;

// Function to update the charts with the selected product data
const updateCharts = (product) => {
  const sales = productData[product].sales;

  // Update Yearly Sales Chart
  if (yearlySalesChart) yearlySalesChart.destroy();
  const ctxYearly = document.getElementById('yearlySalesChart').getContext('2d');
  yearlySalesChart = new Chart(ctxYearly, {
    type: 'bar',
    data: {
      labels: ['2021', '2022', '2023', '2024', '2025'],
      datasets: [{
        label: 'Sales by Year',
        data: sales.yearly,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Update Monthly Sales Chart
  if (monthlySalesChart) monthlySalesChart.destroy();
  const ctxMonthly = document.getElementById('monthlySalesChart').getContext('2d');
  monthlySalesChart = new Chart(ctxMonthly, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Monthly Sales',
        data: sales.monthly,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1
      }]
    }
  });

  // Update Platform Sales Chart
  if (platformSalesChart) platformSalesChart.destroy();
  const ctxPlatform = document.getElementById('platformSalesChart').getContext('2d');
  platformSalesChart = new Chart(ctxPlatform, {
    type: 'pie',
    data: {
      labels: Object.keys(sales.platforms),
      datasets: [{
        label: 'Sales by Platform',
        data: Object.values(sales.platforms),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    }
  });

  // Update Notes
  const notesSection = document.getElementById('notes-section');
  notesSection.innerHTML = '';
  productData[product].notes.forEach(note => {
    const noteElement = document.createElement('p');
    noteElement.innerText = note;
    notesSection.appendChild(noteElement);
  });
};

// Initialize the dashboard with the default product
const defaultProduct = 'Cookbook';
updateCharts(defaultProduct);

// Handle product selection change
document.getElementById('productSelect').addEventListener('change', (event) => {
  const selectedProduct = event.target.value;
  updateCharts(selectedProduct);
});
