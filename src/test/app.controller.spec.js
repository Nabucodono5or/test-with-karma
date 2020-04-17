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
  var $filter;
  var apiServiceObject;

  beforeEach(() => {
    angular.mock.module(($provide) => {
      $provide.factory("apiService", ($q) => {
        let getData = jasmine.createSpy("getData").and.callFake(() => {
          let itens = [];
          let deferred = $q.defer();
          deferred.resolve(itens);

          return deferred.promise;
        });

        let service = {
          getData: getData,
        };

        return service;
      });
    });

    angular.mock.module("app");
  });

  beforeEach(inject((
    _$componentController_,
    $injector,
    _$compile_,
    _$rootScope_,
    _$filter_,
    apiService
  ) => {
    $componentController = _$componentController_;
    appServiceObject = $injector.get("appService");
    apiServiceObject = apiService;
    $compile = _$compile_;
    $rootscope = _$rootScope_;
    $filter = _$filter_;
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

    expect(element.attr("color")).toContain("red");
  });

  it("backcolor directive: should contain attribute back set to blue", () => {
    let element = $compile("<back-color color='red' back='blue'></back-color>")(
      $rootscope
    );

    $rootscope.$digest();

    expect(element.attr("back")).toContain("blue");
  });

  //testando atributos inseridos pela directive
  it("backcolor directive: should contain attribute style with values set", () => {
    let element = $compile("<back-color color='red' back='blue'></back-color>")(
      $rootscope
    );

    $rootscope.$digest();

    expect(element.attr("style")).toContain(
      "background-color: blue; color: red;"
    );
  });

  it('length Filter: should return null to string "" ', () => {
    let length = $filter("length");
    expect(length("")).toEqual(0);
  });

  it('length Filter: should return 5 to string "power" ', () => {
    let length = $filter("length");
    expect(length("power")).toEqual(5);
  });

  it("api Service Mock: should return undefined from method getData", () => {
    var itens;

    apiServiceObject.getData().then((result) => {
      itens = result;
    });

    $rootscope.$digest();

    expect(itens).toEqual([]);
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
