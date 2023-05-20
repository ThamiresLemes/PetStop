// create map

const map = L.map("mapid").setView([-22.9183902,-42.8313887], 15);

// create and add TileLayer

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon

L.marker([-22.9183902,-42.8313887])
  .addTo(map)
  .bindPopup("A pretty CSS popup.<br> Easily customizable.")
  .openPopup();
