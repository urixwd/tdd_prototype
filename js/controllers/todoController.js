(function () {

    function todoController($scope, $rootScope) {
        var self = this;
        $scope.msg = 'hello world';

        $scope.changeMsg = function(msg){
            this.msg = msg;
        }
    }

    angular.module("myApp").controller("todoController", ['$scope', '$rootScope', todoController]);
})();