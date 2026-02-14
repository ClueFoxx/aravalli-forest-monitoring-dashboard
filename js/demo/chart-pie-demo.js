// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("fireRiskChart");

var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Low Risk", "Moderate Risk", "High Risk"],
    datasets: [{
      data: [45, 35, 20],
      backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      hoverBackgroundColor: ['#218838', '#e0a800', '#c82333'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    cutoutPercentage: 75,
    legend: {
      display: true,
      position: 'bottom'
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
    }
  }
});


   
