(function() {

  function initMap() {

    var mapDiv;
    var map;
    var marker;

    mapDiv = document.getElementById( "map" );

    map = new google.maps.Map( mapDiv, {
      center: { lat: 45.105908, lng: 7.644952 },
      zoom: 18
    });

    marker = new google.maps.Marker({
      position: { lat: 45.105908, lng: 7.644952 },
      map: map,
      title: "PFT"
    });

  }

  // Check correct API load
  if ( typeof google !== "undefined" ) {
    initMap();
  }

}());
