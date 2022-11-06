var ctx1 = document.getElementById("myChart");
var ctx2 = document.getElementById("vilja");
var ctx3 = document.getElementById("vihannekset");

d3.csv('https://markus-dev-hinnat-website.s3.eu-west-1.amazonaws.com/maitotuotteet.csv')
  .then(makeChart)

  d3.csv('https://markus-dev-hinnat-website.s3.eu-west-1.amazonaws.com/viljatuotteet.csv')
  .then(makeChart2)

  d3.csv('https://markus-dev-hinnat-website.s3.eu-west-1.amazonaws.com/vihannekset.csv')
  .then(makeChart3)

function makeChart(item_data) {
  //console.log(item_data)
  const colors = ["#ffc021", "#b326b5","#2b00ff", "#e61010", "#121f10"]
  let point_data = []
  let color_counter = 0
  const final_data = []
  let label = ""

  for (var i=0;i<item_data.length;i++) {
    let point = {x: item_data[i].date, y: item_data[i].price, label: item_data[i].name}
    if (label != item_data[i].name) {
      if (point_data.length > 0) {
        final_data.push({data: point_data, label: label, borderColor: colors[color_counter]})
        color_counter++
        point_data = []
      }
    label = item_data[i].name
    }
    point_data.push(point)
  }
  final_data.push({data: point_data, label: label, borderColor: colors[color_counter]})

  var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
      datasets: final_data
    },
    options: {
      scales: {
        x: {
          type: 'time'
        }
      }
    }
  });
}


function makeChart2(item_data) {
  //console.log(item_data)
  const colors = ["#ffc021", "#b326b5","#2b00ff", "#e61010", "#121f10"]
  let point_data = []
  let color_counter = 0
  const final_data = []
  let label = ""

  for (var i=0;i<item_data.length;i++) {
    let point = {x: item_data[i].date, y: item_data[i].price, label: item_data[i].name}
    if (label != item_data[i].name) {
      if (point_data.length > 0) {
        final_data.push({data: point_data, label: label, borderColor: colors[color_counter]})
        color_counter++
        point_data = []
      }
    label = item_data[i].name
    }
    point_data.push(point)
  }
  final_data.push({data: point_data, label: label, borderColor: colors[color_counter]})


  var myChart = new Chart(ctx2, {
    type: 'line',
    data: {
      datasets: final_data
    },
    options: {
      scales: {
        x: {
          type: 'time'
        }
      }
    }
  });
}
function makeChart3(item_data) {
  //console.log(item_data)
  const colors = ["#ffc021", "#b326b5","#2b00ff", "#e61010", "#121f10"]
  let point_data = []
  let color_counter = 0
  const final_data = []
  let label = ""

  for (var i=0;i<item_data.length;i++) {
    let point = {x: item_data[i].date, y: item_data[i].price, label: item_data[i].name}
    if (label != item_data[i].name) {
      if (point_data.length > 0) {
        final_data.push({data: point_data, label: label, borderColor: colors[color_counter]})
        color_counter++
        point_data = []
      }
    label = item_data[i].name
    }
    point_data.push(point)
  }
  final_data.push({data: point_data, label: label, borderColor: colors[color_counter]})

  var myChart = new Chart(ctx3, {
    type: 'line',
    data: {
      datasets: final_data
    },
    options: {
      scales: {
        x: {
          type: 'time'
        }
      }
    }
  });
}