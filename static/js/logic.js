// Creating map object
var myMap = L.map("map", {
    center: [15.552727, 48.516388],
    zoom: 6
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);

// link to GeoJSON
var geojson;

d3.json("static/data/yem_govern.json", function(data) {
    // Create a new choropleth layer
    geojson = L.choropleth(data).addTo(myMap);

    cholera = L.choropleth(data, {

        // Define what  property in the features to use
        valueProperty: "cases",

        // Set color scale
        scale: ["#ffffb2", "#b10026"],

        // Number of breaks in step range
        steps: 10,

        // q for quartile, e for equidistant, k for k-means
        mode: "q",
        style: {
            // Border color
            color: "#fff",
            weight: 1,
            fillOpacity: 0.8
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.name_en + ", " + feature.properties.name_ar + "<br>Total Number of Cholera Cases (Feb 2018):<br>" + feature.properties.cases);
        }
    }).addTo(myMap);
    
});


