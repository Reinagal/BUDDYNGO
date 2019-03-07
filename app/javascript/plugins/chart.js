function initChart () {
  var canvas = document.getElementById("myChart");
  var ctx = canvas.getContext('2d');
  var dates = canvas.dataset.dates.split("/");
  var labels = canvas.dataset.labels.split("/");
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Votes',
            data: dates,
            backgroundColor: [
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)'
            ],
            borderColor: [
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend:false,
        scales: {
            xAxes: [{
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
  var themes = canvas2.dataset.themes.split("/");
  var labels = canvas2.dataset.labels.split("/");
  var myChart2 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Scores',
            data: themes,
            backgroundColor: [
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)'
            ],
            borderColor: [
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend:false,
        scales: {
            xAxes: [{
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
  var budgets = canvas3.dataset.budgets.split("/");
  var labels = canvas3.dataset.labels.split("/");
  var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Budget / pers.',
            data: budgets,
            backgroundColor: [
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)'
            ],
            borderColor: [
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend:false,
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

function initChart4 () {
  var canvas4 = document.getElementById("myChart4");
  var ctx = canvas4.getContext('2d');
  var destinations = canvas4.dataset.destinations.split("/");
  var labels = canvas4.dataset.labels.split("/");
  var myChart4 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Destination',
            data: destinations,
            backgroundColor: [
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)',
                'rgba(58, 175, 169, 0.2)'
            ],
            borderColor: [
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)',
                'rgba(43, 122, 120, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend:false,
        scales: {
            xAxes: [{
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

export {initChart4}
