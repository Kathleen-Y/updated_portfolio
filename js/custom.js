// GOOGLE MAP
var map = '';
var center;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/updated_portfolio"
);

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(34.01666652, -118.44572581),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1853.8739113693975!2d-118.445684702015!3d34.01702200243829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb02787166c7%3A0x24783152947f4366!2sSanta%20Monica%20Airport!5e0!3m2!1sen!2sus!4v1599517385352!5m2!1sen!2sus';
    document.body.appendChild(script);
}

$(function(){
  loadGoogleMap();
});

// NIVO LIGHTBOX
$('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
