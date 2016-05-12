(function() {

  var header;
  var hamburger;

  document.addEventListener( "DOMContentLoaded", headerInit );

  function headerInit() {
    header = document.querySelectorAll( ".hd__Container" )[ 0 ];
    hamburger = document.querySelectorAll( ".hd__Hamburger" )[ 0 ];

    bindListeners();
  }

  function bindListeners() {
    hamburger.addEventListener( "click", toggleNav );
  }

  function toggleNav( e ) {
    header.classList.toggle( "visibleNav" );
    document.body.classList.toggle( "stopScrolling" );
  }

}() );
