var southWest = L.latLng(29.204529, -98.800);
var northEast = L.latLng(29.653232, -98.200);
var bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
  center: [29.423870, -98.489750], // centered on the cvs on commerce, arbitrarily
  zoom: 12,
  minZoom: 11,
  maxZoom: 18,
  maxBounds: bounds,
  maxBoundsViscosity: 1.0,
  zoomControl: false
});

L.control.zoom({
  position: 'bottomright'
}).addTo(map);

// tilelayer for openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

var customPopupOptions = {
  className: 'custom-popup',
  maxWidth: 600,
  minWidth: 600,
  keepInView: true
};

// locations array
var locations = [
  {
    coords: [29.416656, -98.519357],
    videoId: '895052680',
    title: 'Dunkin\''
  },
  {
    coords: [29.3812569, -98.5727526],
    videoId: '901646295',
    title: 'A Walk In Time'
  },
  {
    coords: [29.4190824, -98.4835734],
    videoId: '783144698',
    title: 'Towerfall'
  },
  {
    coords: [29.4586699, -98.4776784],
    videoId: '786012361',
    title: 'Prosperity of Tomorrow'
  }
];

locations.forEach(function(location) {
  var marker = L.marker(location.coords).addTo(map);
  var iframe = '<iframe src="https://player.vimeo.com/video/' + location.videoId + '" ' +
               'frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
  var popupContent = '<h3>' + location.title + '</h3>' +
                     '<div class="video-container">' + iframe + '</div>';
  marker.bindPopup(popupContent, customPopupOptions);
});
