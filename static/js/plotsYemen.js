function init() {
  data = [{
    x: [2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [ 30.04, 28.35, 17.47, 7.98, 7.58, 6.61, 5.70 ] }];
  var LINE = document.getElementById("plot");
  Plotly.plot(LINE, data);
}

function updatePlotly(newx, newy) {
  var LINE = document.getElementById("plot");

  // Note the extra brackets around 'newx' and 'newy'
  Plotly.restyle(LINE, "x", [newx]);
  Plotly.restyle(LINE, "y", [newy]);
}

function getData(dataset) {

  // Initialize empty arrays to contain our axes
  var x = [];
  var y = [];

  // Fill the x and y arrays as a function of the selected dataset
  switch (dataset) {
  case "dataset1":
    x = ["Jan2013", "Jan2014", "Jan2015", "Jan2016", "Jan2017", "Jan2018", "Sept 2018"];
    y = [ 30.04, 28.35, 17.47, 7.98, 7.58, 6.61, 5.70];
    break;
  case "dataset2":
    x = [2013, 2014, 2015, 2016, 2017, 2018, 2019];
    y = [ 8.18,7.51, 4.82, 2.20, 2.09, 1.83, 1.57 ];
    break;
  case "dataset3":
    x = [2013, 2014, 2015, 2016, 2017, 2018, 2019];
    y = [1132.1, 1101.1, 674.9, 432.4, 416.2, 400, 420];
    break;
  case "dataset4":
    x = [2013, 2014, 2015, 2016, 2017, 2018, 2019];
    y = [312, 303, 186, 119, 114.8, 110.4, 115.92];
    break;

  default:
    x = [1, 2, 3, 4, 5];
    y = [1, 1, 1, 1, 1];
    break;
  }

  updatePlotly(x, y);
}

init();
