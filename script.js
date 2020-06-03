const API_KEY = ""
const apiSrc = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`

const setSrc = document.getElementById("apiUrl").src = apiSrc;

const mapEl = document.getElementById("map");


function initMap() {


 // Map options
 let options = {

  zoom: 10,
  // Center @ Frankfurt,DE
  center: { lat: 50.0842, lng: 8.4432 }

 }


 // New map
 let getMap = new google.maps.Map(mapEl, options);

 // Add Marker
 let marker = new google.maps.Marker({

  position: { lat: 49.9929, lng: 8.2473 },
  map: map,
  icon: ""

 });

}