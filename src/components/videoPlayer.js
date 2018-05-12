angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  renderiFrame: function () {
    if (this.video !== undefined) {
      return `
        <iframe class="embed-responsive-item" src="{{'https://www.youtube.com/embed/' + $ctrl.video.id.videoId}}" allowFullScreen></iframe>
      `
    }
    return `
      <iframe class="embed-responsive-item">Please wait</iframe>
    `
  },
  //videoUr: "https://www.youtube.com/embed/" + this.video.id.videoId,
  template: 
  `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        {{this.renderiFrame()}}
      </div>
      <div class="video-player-details">
        <h3 ng-hide="{{$ctrl.video === undefined}}">{{$ctrl.video.snippet.title}}</h3>
        <div ng-hide="{{$ctrl.video === undefined}}">{{$ctrl.video.snippet.description}}</div>
      </div>
    </div>
  `
});

  // `
  //   <div class="video-player">
  //     <div class="embed-responsive embed-responsive-16by9">
  //       <iframe ng-hide="{{$ctrl.video === undefined}}" class="embed-responsive-item" src="{{'https://www.youtube.com/embed/' + $ctrl.video.id.videoId}}" allowFullScreen></iframe>
  //     </div>
  //     <div class="video-player-details">
  //       <h3 ng-hide="{{$ctrl.video === undefined}}">{{$ctrl.video.snippet.title}}</h3>
  //       <div ng-hide="{{$ctrl.video === undefined}}">{{$ctrl.video.snippet.description}}</div>
  //     </div>
  //   </div>
  // `