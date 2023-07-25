// Get the range inputs
// const range1 = document.getElementById('range1');
// const range2 = document.getElementById('range2');
// const range3 = document.getElementById('range3');
// const range4 = document.getElementById('range4');

// // Get the corresponding <p> tags
// const percentages1 = document.querySelector('.percentages1');
// const percentages2 = document.querySelector('.percentages2');
// const percentages3 = document.querySelector('.percentages3');
// const percentages4 = document.querySelector('.percentages4');

// // Add event listeners to track changes in range values
// range1.addEventListener('input', () => {
//   percentages1.textContent = range1.value + '%';
// });

// range2.addEventListener('input', () => {
//   percentages2.textContent = range2.value + '%';
// });

// range3.addEventListener('input', () => {
//   percentages3.textContent = range3.value + '%';
// });

// range4.addEventListener('input', () => {
//   percentages4.textContent = range4.value + '%';
// });










const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: 'red',
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.9
    },
    {
      label: 'Cubic interpolation',
      data: datapoints,
      borderColor: 'blue',
      fill: false,
      tension: 0.9
    },
    {
      label: 'Linear interpolation (default)',
      data: datapoints,
      borderColor: 'green',
      fill: false
    }
  ]
};
 // Wait for the DOM to load
 document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  const canvas = document.getElementById('chartContainer');

  // Create the chart
  new Chart(canvas, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'X Axis'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Y Axis'
          }
        }
      }
    }
  });
});

const data2 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [{
    label: 'Color Distribution',
    data: [12, 19, 3, 5, 2],
    backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
  }]
};

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  const canvas1 = document.getElementById('pieChart');

  // Create the chart
  new Chart(canvas1, {
    type: 'pie',
    data: data2,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Color Distribution'
        }
      }
    }
  });
});


const data3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Sales',
    data: [50, 75, 60, 90, 80, 70],
    backgroundColor: 'blue'
  }]
};

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  const canvas3 = document.getElementById('barChart');

  // Create the chart
  new Chart(canvas3, {
    type: 'bar',
    data: data3,
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Sales'
          }
        }
      }
    }
  });
});