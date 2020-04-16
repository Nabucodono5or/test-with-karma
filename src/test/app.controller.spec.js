import "angular";
import "angular-mocks";
import "./../app";

describe("Testando jasmine", () => {
  it("2 + 2 should be 4", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Testando module: app", () => {
  var $componentController;
  var appServiceObject;

  beforeEach(() => {
    angular.mock.module("app");
  });

  beforeEach(inject((_$componentController_, $injector) => {
    $componentController = _$componentController_;
    appServiceObject = $injector.get('appService');
  }));

  it("Componente deve conter o titulo 'Bem vindo'", () => {
    let bindings = {};
    let componenteController = $componentController("app", null, bindings);

    expect(componenteController.titulo).toEqual("Bem vindo");
  });

  it('appService: deveria conter o valor "olá mundo"', () => {
    expect(appServiceObject.get()).toEqual("Olá mundo");
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
});
