angular.module('video-player')
  .service('youTube', function($http) {
  // TODO

    // https://www.googleapis.com/youtube/v3/search

  // controller: function () {
    this.search = function (str, callback) {
    // console.log('youTube#search callback ', callback);

      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          'maxResults': '5',
          'part': 'snippet',
          'q': str,
          'videoEmbeddable': 'true',
          'type': 'video',
          'key': window.YOUTUBE_API_KEY
        }
      })
        .then(function successCallback(response) {
          callback(response.data.items);
        }, function errorCallback(response) { 
          callback(response.data);
        });
    };
  // };
  });
