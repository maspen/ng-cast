angular.module('video-player')
.component('videoList', {
  controller: function() {
    this.videos = window.exampleVideoData;
  },
  templateUrl: '../src/templates/videoList.html'
});
