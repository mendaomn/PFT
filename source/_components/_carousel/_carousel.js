(function() {

  var carousel;
  var handles;
  var handlesNumber;
  var actives = [];

  document.addEventListener("DOMContentLoaded", carouselInit );

  function carouselInit() {
    carousel = document.querySelectorAll(".crsl__Container")[ 0 ];
    handles = document.querySelectorAll( ".crsl__ControlHandle" );
    handlesNumber = handles.length;

    bindListeners();
  };

  function bindListeners() {
    for ( var i = 0; i < handlesNumber; i++ ) {
      actives.push("active-" + (i + 1) );
      handles[ i ].addEventListener( "click", crslSwitchActive( i + 1 ) );
    }
  }

  function crslSwitchActive( slideNumber ) {
    return function( e ) {
      actives.forEach(function( className ) {
        carousel.classList.remove( className );
      });
      carousel.classList.add( "active-" + slideNumber );
    };
  }

}());
