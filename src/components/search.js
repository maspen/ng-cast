angular.module('video-player')
  .component('search', {
  // TODO
    bindings: {
      service: '<',
      result: '<'
    },
    template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model="query" />
      <button ng-click="$ctrl.service.search(query, $ctrl.result)" class="btn">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
  `
  });
