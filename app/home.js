angular.module('tooDrunkToDo')
.controller('home', home);

function home($scope, $state) {
  $scope.getList = function () {
    state.go('home.task', {
      task: $scope.task,
    });
  }
};
