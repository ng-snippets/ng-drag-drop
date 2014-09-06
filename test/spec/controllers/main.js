'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngDragDropApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});


var testfunc = function(abc){
  return abc*abc*abc;
};

describe('test function ', function(){
  var def;
    beforeEach(function(){
        def = 4;
    });

    it('should return the cube of the given number',function(){
        expect(testfunc(def)).toBe(64);
    });
});
