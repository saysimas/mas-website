var southWest = L.latLng(29.204529, -98.800);
var northEast = L.latLng(29.653232, -98.200);
var bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
  center: [29.423870, -98.489750], // centered arbitrarily
  zoom: 12, // initial zoom, but will be overridden
  minZoom: 11,
  maxZoom: 18,
  maxBounds: bounds,
  maxBoundsViscosity: 1.0
});

// Tile layer for OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Use fitBounds to zoom out to the maximum level within the defined bounds
map.fitBounds(bounds);

var customPopupOptions = {
  className: 'custom-popup',
  maxWidth: 600,
  minWidth: 600,
  keepInView: true
};
// locations array
var locations = [
  /*{
    coords: [29.427610, -98.498932],
    videoId: '-',
    title: 'Fun with Dogs'
  }, // ATHENA
  {
    coords: [29.364519, -98.228531],
    videoId: '-',
    title: 'Chicken Fight'
  }, // DEWAYNAE
  */{
    coords: [29.417740, -98.516890],
    videoId: '1024509882',
    title: 'Puppy Rescuers'
  }, // EMBER
  {
    coords: [29.599115, -98.610558],
    videoId: '1024510840',
    title: 'A Day at Six Flags'
  }, // LIAM
  /*{
    coords: [29.4285578, -98.4915416],
    videoId: '-',
    title: 'Brutally Raiding Fathead\'s Pizza'
  }, // REMY
  {
    coords: [29.259178, -98.453688],
    videoId: '-',
    title: 'McAllen Flood'
  }, // ZOEY */
  {
    coords: [29.419980, -98.487830],
    videoId: '1024511306',
    title: '-'
  }, // LILIANA
  /* {
    coords: [-],
    videoId: '-',
    title: 'Corn Dog Seed'
  }, // EMERSON P */
  {
    coords: [29.398300, -98.476950],
    videoId: '1024506497',
    title: 'The One-Act Play'
  },/* // BRANDON
  {
    coords: [29.518080, -98.497963],
    videoId: '-',
    title: '-'
  }, // CAMILA
  */{
    coords: [29.527941, -98.472801],
    videoId: '1024511085',
    title: 'That One Time I Went To California, Yippie!'
  }, // LUCIAN
  {
    coords: [29.458450, -98.534210],
    videoId: '1024511477',
    title: 'School Lockdown'
  }/*, // RUBY
  {
    coords: [29.3536752, -98.2960592],
    videoId: '-',
    title: 'That One Play I Did'
  }, // EMERSON C
  {
    coords: [29.4249518, -98.48836],
    videoId: '-',
    title: 'Ow, My Eye!'
  }*/ // VINCENT
];

// Add markers and popups
locations.forEach(function(location) {
  var marker = L.marker(location.coords).addTo(map);
  var iframe = '<iframe src="https://player.vimeo.com/video/' + location.videoId + '" ' +
               'frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
  var popupContent = '<h3>' + location.title + '</h3>' +
                     '<div class="video-container">' + iframe + '</div>';
  marker.bindPopup(popupContent, customPopupOptions);
});