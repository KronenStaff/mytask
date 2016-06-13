(function() {
  'use strict';

  angular
    .module('task')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $translateProvider) {
    // Enable log
    $translateProvider
   .useStaticFilesLoader({
     prefix: 'app/main/db/translations/locale-',
     suffix: '.json'
   })
   .preferredLanguage('en');

    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }



})();
