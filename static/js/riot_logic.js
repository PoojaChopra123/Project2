var myriotMap = L.map("riotMap", {
    center: [15.552727, 48.516388],
    zoom: 6
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1Ijoia3VsaW5pIiwiYSI6ImNpeWN6bjJ0NjAwcGYzMnJzOWdoNXNqbnEifQ.jEzGgLAwQnZCv9rA6UTfxQ"
}).addTo(myriotMap);

// var url = "https://data.humdata.org/dataset/acled-data-for-yemen/resource/573011bf-9c58-4432-95f9-0942d22379c8";

d3.csv("static/data/riotData.csv", function(error, riotData) {
    if (error) throw error;

    var markers = L.markerClusterGroup();
    var coordinates = [];
    riotData.forEach(function(d) {

        coordinates.push([d.latitude, d.longitude]);
    });

    console.log(coordinates);


    for (var i = 1; i <coordinates.length; i++) {

        var location = coordinates[i];

        markers.addLayer(L.marker([location[0], location[1]]));

    }

    myriotMap.addLayer(markers);


});

var death2016;
var death2017;
var death2018;

// d3.csv("riotData.csv", function(error, riotData) {
//     if (error) throw error; 

//     riotData.forEach(function(d) {

//         if (d.year == "2016")


//     })
// });

// var years = [];
// riotData.foreach(function(d){
//     year.push([d.year])
// }); 

// for (var i = 0; i < years.length; i++) {
    
// }

// for (var i = 1; i < years.length; i++) {

// }
// var layers = {
//     Year_2018: new L.LayerGroup(),
//     Year_2017: new L.LayerGroup(), 
//     Year_2016: new L.LayerGroup()
// };

// var overlays = {
//     "2018": layers.Year_2018, 
//     "2017": layers.Year_2017, 
//     "2016": layers.Year_2016
// };

// L.control.layers(null, overlays).addTo(map)

// var info = L.control({
//     position: "bottomright"
// }); 

// info.onAdd = function() {
//     var div = L.DomUntil.create("div", "legend");
//     return div; 
// }

// info.addTo(map); 

// var icons = {
//     Year_2016: L.ExtraMarkers.icon({
//         markercolor: "yellow", 
//         shape: "circle"
//     }), 
//     Year_2017: L.ExtraMarkers.icon({
//         markerColor: "white", 
//         shape: "circle"
//     }), 
//     Year_2018: L.ExtraMarkers.icon({
//         markerColor: "green", 
//         shape:"circle"
//     })
// }