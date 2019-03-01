function initChart () {
  var canvas = document.getElementById("myChart");
  var ctx = canvas.getContext('2d');
  var dates = canvas.dataset.dates.split("-");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: dates,
            backgroundColor: [
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)'
            ],
            borderColor: [
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function initChart2 () {
  var canvas2 = document.getElementById("myChart2");
  var ctx = canvas2.getContext('2d');
  var themes = canvas2.dataset.themes.split("-");
  var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: themes,
            backgroundColor: [
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)'
            ],
            borderColor: [
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function initChart3 () {
  var canvas3 = document.getElementById("myChart3");
  var ctx = canvas3.getContext('2d');
  var budgets = canvas3.dataset.budgets.split("-");
  var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Budget',
            data: budgets,
            backgroundColor: [
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)'
            ],
            borderColor: [
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

export {initChart}

export {initChart2}

export {initChart3}
