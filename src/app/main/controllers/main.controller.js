(function() {


  angular
    .module('task')
    .controller('mainCtrl', MainController);

  function MainController($http,$scope,getImages,$rootScope,$translate) {
    var vm = this;

    $scope.currentPage = 1; // show page on load
    $scope.pageSize = 2;

    vm.myImages = getImages.getData();


    vm.myImages.then(function(val) {
      vm.data = val;
        });

        // return language key...
      $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
        console.log(langKey);
     };
     // sorting...
     $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };




  // Simple function to create dynamic class to change text diraction :)

  //  $rootScope.$on('$translateChangeSuccess', function(event, data) {
  //    var language = data.language;
   //
  //    $rootScope.lang = language;
   //
  //    $rootScope.default_direction = language === 'ar' ? 'rtl' : 'ltr';
  //    $rootScope.opposite_direction = language === 'en' ? 'ltr' : 'rtl';
   //
  //    $rootScope.default_float = language === 'ar' ? 'right' : 'left';
  //    $rootScope.opposite_float = language === 'en'  ? 'left' : 'right';
  //  });



      }
})();
