var myMap = L.map("map", {
    center: [15.5527, 48.5164],
    zoom: 7
});
  
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);
  

L.circle([12, 43], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.2,
    radius: 50000
}).addTo(myMap);
  
  
// var url = "https://data.humdata.org/dataset/8ed6967a-13c0-4b57-9873-563970a1a35f/resource/2e0cfc3a-701a-447a-8289-a503fc32d943/download/yemen.geojson";

// d3.json(url, function(response) {
  
//     // console.log(response);

//     // var location = response.features[0].geometry.coordinates;
//     // console.log(location);
//     // console.log(location[1]);


//     var healthsites = [];

//     for (var i = 0; i< response.features.length; i++) {
//         var location = response.features[i].geometry.coordinates;

//         if (location) {
//             healthsites.push([location[1], location[0]]);
//         }
//     }
//     console.log(healthsites[0]);

//     for (var i = 0; i < healthsites; i++) {
//         L.circle(healthsites[i], {
//             fillOpacity: 0.75,
//             color: "white", 
//             fillColor: "purple", 
//             radius: 25

//         }).addTo(myMap);
//     }

// });
