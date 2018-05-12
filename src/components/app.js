angular.module('video-player')
  .component('app', {
  // hook up app.html
  // templateUrl: '../src/templates/app.html'
  // find way to have page render w/ app.html
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {},
      this.onClick = function(video) {
        this.selectVideo(video);
      };
      this.selectVideo = function(video) {
        this.currentVideo = video;
      };
      this.searchResults = function (videos) {
        // TODO: handle error
        console.log('app#searchResults videos ', videos);
        this.videos = videos;
        this.currentVideo = videos[0];
      };
      this.onClick = this.onClick.bind(this);
      youTube.search('puppies', this.searchResults.bind(this));
    },
    template: `
     <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video="$ctrl.currentVideo"></video-player>
        </div>
        <div class="col-md-5">
          <video-list videos="$ctrl.videos" on-click="$ctrl.onClick"></video-list>
        </div>
      <div>
    </div>
  `
  });
/*
error response;

data.error.code eg 405
dat.error.message  eg 'Daily Limit for Unauthenticated Use Exceeded. Continued use requires signup.'
*/
