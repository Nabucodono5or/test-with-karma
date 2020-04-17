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
  var $compile;
  var $rootscope;

  beforeEach(() => {
    angular.mock.module("app");
  });

  beforeEach(inject((
    _$componentController_,
    $injector,
    _$compile_,
    _$rootScope_
  ) => {
    $componentController = _$componentController_;
    appServiceObject = $injector.get("appService");
    $compile = _$compile_;
    $rootscope = _$rootScope_;
  }));

  it("Componente deve conter o titulo 'Bem vindo'", () => {
    let bindings = {};
    let componenteController = $componentController("app", null, bindings);
    expect(componenteController.titulo).toEqual("Bem vindo");
  });

  it('appService: deveria conter o valor "olá mundo"', () => {
    expect(appServiceObject.get()).toEqual("Olá mundo");
  });

  it("componente app: deveria possuir hello", () => {
    let bindings = {};
    let componenteController = $componentController("app", null, bindings);
    expect(componenteController.hello).toEqual("Olá mundo");
  });

  it("directive: deveria replace the element with apropriate content", () => {
    let element = $compile("<a-great-eye></a-great-eye>")($rootscope);
    $rootscope.$digest();

    expect(element.html()).toContain("teste de directive, 2 times");
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
