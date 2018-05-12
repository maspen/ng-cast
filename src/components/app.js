angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {},
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = (videos) => {
        // TODO: handle error
        this.videos = videos;
        this.currentVideo = videos[0];
      };
      this.service = youTube;
      youTube.search('puppies', this.searchResults);
    },
    template: `
     <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search service="$ctrl.service" result="$ctrl.searchResults"></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video="$ctrl.currentVideo"></video-player>
        </div>
        <div class="col-md-5">
          <video-list videos="$ctrl.videos" on-click="$ctrl.selectVideo"></video-list>
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
