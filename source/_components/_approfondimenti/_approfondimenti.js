(function() {

  // Check correct API load
  if ( typeof angular !== "undefined" ) {
    initApprofondmenti();
  }

  function initApprofondmenti() {
    var app = angular.module( "ApprApp", []);
    app.controller( "VideosCtrl", [ "$scope", "$http", function( $scope, $http ) {
      $scope.quantity = 6;


      var api = "https://www.googleapis.com/youtube/v3/channels";
      var payload = {
        part: "contentDetails",
        id: "UCe0DNp0mKMqrYVaTundyr9w", // "UCi22jkhYuLD47CDtHQza0xA",
        key: "AIzaSyBIcXqEJ4zryH4RMx_S9CJ4SoMWKQgCQ6o"
      };

      $http.get( api, {
        params: payload
      }).then( cb );


      function cb( data ) {
        var playlistId = data.data.items[ 0 ].contentDetails.relatedPlaylists.uploads;
        var url = "https://www.googleapis.com/youtube/v3/playlistItems";
        var payload = {
          part: "snippet",
          maxResults: 50,
          playlistId: playlistId,
          key: "AIzaSyBIcXqEJ4zryH4RMx_S9CJ4SoMWKQgCQ6o"
        };
        $http.get( url, {
          params: payload
        }).then(function( data ) {
          $scope.videos = data.data.items;
        });
      }

    } ]);

    app.controller( "ArticlesCtrl", [ "$scope", "$http", function( $scope, $http ) {
      $scope.quantity = 6;

      var url = "https://api.tumblr.com/v2/blog/eccenoctua.tumblr.com/posts/?callback=JSON_CALLBACK";

      $http.jsonp( url, {
        params: {
          api_key: "Jy3GXjMOSU5deJkqeJpYHZWHOYIiG3toBqCa1wco0pZiwtAU0L"
        }
      }).then(function( data ) {
        $scope.articles = data.data.response.posts;
        console.log( data.data.response.posts[ 0 ] );
      });

    } ]);
  }
}() );
