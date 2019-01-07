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
    
    console.log(coordinates);

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

d3.csv("foodports.csv", function(error, foodportData) {

    if (error) throw error; 
  
    // console.log(response);

    // var location = response.features[0].geometry.coordinates;
    // console.log(location);
    // console.log(location[1]);
    var coordinates = []; 

    foodportData.forEach(function(d) {
        coordinates.push([d.Lat, d.Lng]);
    })



    for (var i = 0; i < coordinates.length; i++) {
        L.circle(coordinates[i], {
            opacity: 1,
            fillOpacity: 1,
            color: "blue", 
            radius: 5000

        }).addTo(myMap);
    }


  
});

