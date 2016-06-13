angular
  .module('task')
  .factory('getImages', function ($http, $q) {
       return {
           getData: function() {  
               return $http.get('app/main/db/db.json')
                   .then(function(response) {
                       if (typeof response.data === 'object') {
                           return response.data;
                       } else {
                           // invalid response
                           return $q.reject(response.data);
                       }

                   }, function(response) {
                       return $q.reject(response.data);
                   });
           }
       };
   });
