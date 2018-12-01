// Create a map object
var usabombMap = L.map("usamap", {
  center: [15.05, 48.5],
  zoom: 7
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(usabombMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(USairstrikes) {
  return USairstrikes*500;
}

// Each city object contains the city's name, location and population
var cities = [
  {
    name: "Sanaa",
    location: [15.3694, 44.1910],
    USairstrikes: 3
  },
  {
    name: "Sadaa",
    location: [16.9509, 43.7478],
    USairstrikes: 2
  },
  {
    name: "Abyan",
    location: [13.6343, 46.0563],
    USairstrikes: 80
  },
  {
    name: "Bayda",
    location: [13.9889, 45.5771],
    USairstrikes: 52
  },
  {
    name: "Jawf",
    location: [29.8874, 39.320],
    USairstrikes: 8
  },
  {
    name: "Marib",
    location: [15.4700, 45.3229],
    USairstrikes: 36
  },
  {
    name: "Shabwah",
    location: [14.7546, 46.5163],
    USairstrikes: 67
  },
  {
    name: "Hadramaut",
    location: [416.9304, 49.3653],
    USairstrikes: 46
  }

];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "red",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(cities[i].USairstrikes)
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>USairstrikes: " + cities[i].USairstrikes + "</h3>").addTo(usabombMap);
}
