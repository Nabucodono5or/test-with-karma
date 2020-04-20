import "angular";
import "angular-mocks";
import "./../components/component";

describe("component", () => {
  var falseFactory;
  var $injector;

  beforeEach(() => {
    angular.mock.module("componentModeule");
  });

  beforeEach(inject((_$injector_) => {
    $injector = _$injector_;
    falseFactory = $injector.get("falseFactory");
  }));

  it("module is funcional?", () => {
    expect(falseFactory.valueReturn()).toEqual("Componente");
  });
});
