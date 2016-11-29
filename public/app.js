var app = angular.module('app',[])

function mainCtrl($scope, $http) {
  $scope.formData = {};

  // when landing on the page, get all todos and show them
  $http.get('/api/pics')
  .success(function(data) {
    $scope.pics = data;
    console.log(data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });
  $scope.upvote = function(item){
      item.likes += 1;
    }

}
