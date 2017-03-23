angular.module('miniRouting').controller('proudectCtrl', function ($scope, $stateParams, proudectService) {
    if ($stateParams.id === 'shoes') {
        $scope.productData = proudectService.shoeData;
    }
    else if ($stateParams.id === 'socks') {
        $scope.productData = proudectService.sockData;
    }
});
