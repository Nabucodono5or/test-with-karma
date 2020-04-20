import "angular";
import "angular-mocks";
import "./../app";

describe("Testando jasmine", () => {
  it("2 + 2 should be 4", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Testando module: app", () => {
  var $q;
  var $componentController;
  var appServiceObject;
  var $compile;
  var $rootscope;
  var $filter;
  var apiServiceObject;

  beforeEach(() => {
    // module $provide cria uma factory, service ou filter náo existente
    // Caso exista o service ou factory então ele sobrescrito

    // angular.mock.module(($provide) => {
    //   $provide.factory("apiService", ($q) => {
    //     let deferred = $q.defer();
    //     let lista = ["algo"];
    //     deferred.resolve(lista);
    //     let promise = deferred.promise;

    //     spyOn("getData").and.returnValue(promise);

    //     let service = {
    //       getData: getData,
    //     };

    //     return service;
    //   });
    // });

    angular.mock.module("app");
  });

  beforeEach(inject((
    _$componentController_,
    $injector,
    _$compile_,
    _$rootScope_,
    _$filter_,
    apiService,
    _$q_
  ) => {
    $componentController = _$componentController_;
    appServiceObject = $injector.get("appService");
    apiServiceObject = apiService;
    $compile = _$compile_;
    $rootscope = _$rootScope_;
    $filter = _$filter_;
    $q = _$q_;
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

  it("api Service with promise: should return undefined from method getData", () => {
    var itens;

    apiServiceObject.getData().then((result) => {
      itens = result;
    });

    $rootscope.$apply();

    expect(itens).toEqual([]);
  });

  it("api Service Mock promise with promise: should return array no null from method getData", () => {
    let itens;
    let deferred = $q.defer();
    let lista = ["algo"];
    deferred.resolve(lista);
    let promise = deferred.promise;

    // aqui estou mockando o service ainda qe ele exista
    // Simplesmente estou pegando o service no pulo e retornando outra coisa
    // Melhor do que criar service com o $provide
    spyOn(apiServiceObject, "getData").and.returnValue(promise);

    apiServiceObject.getData().then((result) => {
      itens = result;
    });

    $rootscope.$apply();

    expect(itens).toEqual(["algo"]);
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
