import "angular";
import "angular-mocks";
import "./../app";


describe("Testando karma", () => {
  var $componentController;

  beforeEach(() => {
    angular.mock.module("app");
  });

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it("Componente deve conter o titulo 'Bem vindo'", () => {
    let bindings = {};
    let componenteController = $componentController("app", null, bindings);

    expect(componenteController.titulo).toEqual('Bem vindo');
  });

  // var $controller;

  // beforeEach(inject((_$controller_) => {
  //   $controller = _$controller_;
  // }));

  // it("controller deve conter o titulo 'Bem vindo'", () => {
  //   let $scope = {};
  //   let controller = $controller("AppController", { $scope: $scope });

  //   expect(controller.titulo).toEqual('Bem vindo');
  // });

  it("2 + 2 should be 4", () => {
    expect(2 + 2).toBe(4);
  });
});
