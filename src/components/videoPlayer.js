angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    //videoUr: "https://www.youtube.com/embed/" + this.video.id.videoId,
    template: 
  `
    <div ng-if="$ctrl.video" class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="{{'https://www.youtube.com/embed/' + $ctrl.video.id.videoId}}" allowFullScreen></iframe>
      </div>
      <div class="video-player-details">
        <h3>{{$ctrl.video.snippet.title}}</h3>
        <div>{{$ctrl.video.snippet.description}}</div>
      </div>
    </div>
    <div ng-if="!$ctrl.video">Please wait</div>
  `
  });
