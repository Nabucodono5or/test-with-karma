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

  //directives com somente inserção de template
  it("directive: deveria replace the element with apropriate content", () => {
    let element = $compile("<a-great-eye></a-great-eye>")($rootscope);
    $rootscope.$digest();
    expect(element.html()).toContain("teste de directive, 2 times");
  });

  //directives com evento de click
  it("second directive: deveria increment the element", () => {
    let element = $compile("<second-directive></second-directive>")($rootscope);
    let button = element.find("button");

    $rootscope.value = 10;
    button.triggerHandler("click");

    $rootscope.$digest();

    expect($rootscope.value).toEqual(11);
  });

  it("backcolor directive: should contain attribute color set to red", () => {
    let element = $compile("<back-color color='red' back='blue'></back-color>")(
      $rootscope
    );
    
    $rootscope.$digest();
    
    expect(element.attr('color')).toContain("red");
  });

  it("backcolor directive: should contain attribute back set to blue", () => {
    let element = $compile("<back-color color='red' back='blue'></back-color>")(
      $rootscope
    );
    
    $rootscope.$digest();
    
    expect(element.attr('back')).toContain("blue");
  });

  //testando atributos inseridos pela directive
  it("backcolor directive: should contain attribute style with values set", () => {
    let element = $compile("<back-color color='red' back='blue'></back-color>")(
      $rootscope
    );
    
    $rootscope.$digest();
    
    expect(element.attr('style')).toContain("background-color: blue; color: red;");
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
