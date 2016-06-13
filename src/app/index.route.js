(function() {
  'use strict';

  angular
    .module('task')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/photo', {
        templateUrl: 'app/main/views/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .when('/files', {
        templateUrl: 'app/main/views/files.html',
        controller: 'filesCtrl',
        controllerAs: 'fc'
      })
      .when('/sharing', {
        templateUrl: 'app/main/views/sharing.html',
        controller: 'sharingCtrl',
        controllerAs: 'sc'
      })
      .when('/links', {
        templateUrl: 'app/main/views/links.html',
        controller: 'linksCtrl',
        controllerAs: 'lc'
      })
      .when('/events', {
        templateUrl: 'app/main/views/events.html',
        controller: 'eventsCtrl',
        controllerAs: 'ec'
      })
      .when('/gs', {
        templateUrl: 'app/main/views/gs.html',
        controller: 'gsCtrl',
        controllerAs: 'gc'
      })
      .otherwise({
        redirectTo: '/photo'
      });
  }

})();
