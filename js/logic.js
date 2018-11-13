var myMap = L.map("map", {
    center: [15.5527, 48.5164],
    zoom: 11
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1Ijoia3VsaW5pIiwiYSI6ImNpeWN6bjJ0NjAwcGYzMnJzOWdoNXNqbnEifQ.jEzGgLAwQnZCv9rA6UTfxQ"
}).addTo(myMap);

// var url = "https://data.humdata.org/dataset/acled-data-for-yemen/resource/573011bf-9c58-4432-95f9-0942d22379c8";

d3.csv("riotData.csv", function(error, riotData) {
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

    myMap.addLayer(markers);


});