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
  

  
d3.csv("Airstrike2.csv", function(error, airstrikeData) {
  
    if (error) throw error;
    var coordinates = []; 
    var heatArray = [];

    airstrikeData.forEach(function(d) {
        coordinates.push([d.Lat, d.Lng]);
    })
    
    // console.log(coordinates);

    for (var i = 0; i < coordinates.length; i++) {

      var location = coordinates[i];
  
      if (location) {
        heatArray.push([location[0], location[1]]);
      }
    }
    // console.log(heatArray);
  
    var heat = L.heatLayer(heatArray, {
        minOpacity: 0.05, 
        maxZoom: 18, 
        radius: 20, 
        blur: 30, 
        gradient: {0.3: 'yellow', 0.4: 'orange', 0.5: 'red'}, 
        maxZoom:14
    }).addTo(myMap);
  
});

// var url = "https://data.humdata.org/dataset/8ed6967a-13c0-4b57-9873-563970a1a35f/resource/2e0cfc3a-701a-447a-8289-a503fc32d943/download/yemen.geojson";

// d3.json(url, function(response) {
  
//     // console.log(response);

//     // var location = response.features[0].geometry.coordinates;
//     // console.log(location);
//     // console.log(location[1]);


//     var heatArray2 = [];

//     for (var i = 0; i< response.features.length; i++) {
//         var location = response.features[i].geometry.coordinates;

//         if (location) {
//             heatArray2.push([location[1], location[0]]);
//         }
//     }
//     console.log(heatArray2.length);

    
//     var heat2 = L.heatLayer(heatArray2, {
//         minOpacity: 0.5, 
//         maxZoom: 18, 
//         radius: 10, 
//         blur: 15, 
//         gradient: {0.3: 'yellow', 0.55: 'green', 0.8: 'blue'},
//         maxZoom:14
//     }).addTo(myMap);
  
// });

// // Create a circle and pass in some initial options
// L.circle([45.52, -122.69], {
//     color: "green",
//     fillColor: "green",
//     fillOpacity: 0.75,
//     radius: 500
//   }).addTo(myMap);


  
var url = "https://data.humdata.org/dataset/8ed6967a-13c0-4b57-9873-563970a1a35f/resource/2e0cfc3a-701a-447a-8289-a503fc32d943/download/yemen.geojson";

d3.json(url, function(response) {
  
    // console.log(response);

    // var location = response.features[0].geometry.coordinates;
    // console.log(location);
    // console.log(location[1]);


    var healthsites = [];

    for (var i = 0; i< response.features.length; i++) {
        var location = response.features[i].geometry.coordinates;

        if (location) {
            healthsites.push([location[1], location[0]]);
        }
    }
    console.log(healthsites.length);

    for (var i = 0; i < healthsites.length; i++) {
        L.circle(healthsites[i], {
            opacity: 0.2,
            color: "blue", 
            radius: 20

        }).addTo(myMap);
    }


  
});

