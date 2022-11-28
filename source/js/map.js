var map = L.map('map').setView([59.96833875898696, 30.317468147345455], 18);
var myIcon = L.icon({
  iconUrl: 'img/icon/map-pin.svg',
  iconSize: [38, 50],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([59.96833875898696, 30.317468147345455],{icon: myIcon}).addTo(map)
