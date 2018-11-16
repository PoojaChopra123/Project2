// Creating map object
var myMap = L.map("map", {
    center: [15.552727, 48.516388],
    zoom: 11
});

//Adding tile layer
// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);

// // link to GeoJSON
// var geojson;

// d3.json("static/yem_govern.json", function(data) {
//     // Create a new choropleth layer
    

//         //Define what property in the features to use
//     })
// })