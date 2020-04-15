import 'angular';
import 'angular-mocks';
import './../app';
import './../app.controller';

describe("Testando karma", () => {
  beforeEach(() => {
    angular.mock.module("app");
  });

  var $controller;

  beforeEach(inject((_$controller_) => {
    $controller = _$controller_;
  }));

  it("controller deve conter o titulo 'Bem vindo'", () => {
    let $scope = {};
    let controller = $controller("AppController", { $scope: $scope });

    expect(controller.titulo).toEqual('Bem vindo');
  });

  it("2 + 2 should be 4", () => {
    expect(2 + 2).toBe(4);
  });
});
