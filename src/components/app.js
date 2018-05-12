angular.module('video-player')
.component('app', {
  // hook up app.html
  // templateUrl: '../src/templates/app.html'
  // find way to have page render w/ app.html
  controller: function() {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.consoleVideos = () => {
      console.log(this);
    };
    this.onClick = function(video) {
      console.log('app#onClick(video) ', video);
    };
    this.onClick = this.onClick.bind(this);
  },
  template: `
     <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search><h5><em>search</em> component goes here</h5></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video="$ctrl.video"></video-player>
        </div>
        <div class="col-md-5">
          <video-list videos="$ctrl.videos" on-click="$ctrl.onClick"></video-list>
        </div>
      <div>
    </div>
  `

});
