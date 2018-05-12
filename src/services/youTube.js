angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function (str, callback) {
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
  });
