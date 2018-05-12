angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick : '<'
  },
  template: `
  <ul class="video-list">
    <video-list-entry ng-repeat="video in $ctrl.videos" video="video" ng-click="$ctlr.onClick()" />
  </ul>
  `
  // templateUrl: '../src/templates/videoList.html'
});
