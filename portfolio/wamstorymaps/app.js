// Define the geographical bounds
var southWest = L.latLng(29.204529, -98.525);
var northEast = L.latLng(29.653232, -98.470);
var bounds = L.latLngBounds(southWest, northEast);

// Initialize the map
var map = L.map('map', {
  center: [29.4241, -98.4936], // Centered on downtown San Antonio
  zoom: 12,
  minZoom: 11,
  maxZoom: 18,
  maxBounds: bounds,
  maxBoundsViscosity: 1.0,
  zoomControl: false
});

// Add custom zoom control (optional)
L.control.zoom({
  position: 'bottomright'
}).addTo(map);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

// Define custom popup options
var customPopupOptions = {
  className: 'custom-popup',
  maxWidth: 600,
  minWidth: 600,
  keepInView: true
};

// Define locations with videos (replace with your actual data)
var locations = [
  {
    coords: [29.416656, -98.519357],
    videoId: '895052680', // Replace with your Vimeo video ID
    title: 'Dunkin\''
  },
  {
    coords: [29.3812569, -98.5727526],
    videoId: '901646295', // Replace with your Vimeo video ID
    title: 'A Walk In Time'
  },
  {
    coords: [29.4190824, -98.4835734],
    videoId: '783144698', // Replace with your Vimeo video ID
    title: 'Towerfall'
  },
  {
    coords: [29.4586699, -98.4776784],
    videoId: '786012361', // Replace with your Vimeo video ID
    title: 'Prosperity of Tomorrow'
  }
  // Add more locations as needed
];

// Add markers and popups
locations.forEach(function(location) {
  var marker = L.marker(location.coords).addTo(map);

  // Vimeo embed iframe without width and height attributes
  var iframe = '<iframe src="https://player.vimeo.com/video/' + location.videoId + '" ' +
               'frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';

  // Popup content
  var popupContent = '<h3>' + location.title + '</h3>' +
                     '<div class="video-container">' + iframe + '</div>';

  // Bind popup with custom options
  marker.bindPopup(popupContent, customPopupOptions);
});
