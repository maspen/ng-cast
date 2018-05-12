angular.module('video-player')
  .component('search', {
  // TODO
    bindings: {
      service: '<',
      result: '<'
    },
    template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" 
        ng-model="query"
        ng-model-options="{ debounce: 500 }"
        ng-change="$ctrl.service.search(query, $ctrl.result)"
      />
      <button ng-click="$ctrl.service.search(query, $ctrl.result)" 
        ng-model-options="{ debounce: 500 }" 
      class="btn">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
  `
  });
