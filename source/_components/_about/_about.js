(function() {

  function initMap() {

    var mapDiv;
    var map;
    var marker;

    mapDiv = document.getElementById( "map" );

    map = new google.maps.Map( mapDiv, {
      center: { lat: 45.115115, lng: 7.651363 },
      zoom: 14
    });

    marker = new google.maps.Marker({
      position: { lat: 45.115115, lng: 7.651363 },
      map: map,
      title: "Hello World!"
    });

  }

  // Check correct API load
  if ( typeof google !== "undefined" ) {
    initMap();
  }

}());
