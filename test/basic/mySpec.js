describe('My Test', function(){
   var myVar = true;
   beforeEach(module('myApp'));

   var scope, ctrl;
   beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('todoController', { $scope: scope });
   }));

   it('default msg', function(){
      expect(scope.msg).toBe('hello world');
      scope.changeMsg('new Msg');
      expect(scope.msg).toBe('new Msg');
   });

   it('msg after change', function(){
      scope.changeMsg('new Msg');
      expect(scope.msg).toBe('new Msg');
   });
});

