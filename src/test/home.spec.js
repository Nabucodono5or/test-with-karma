import "angular";
import "angular-mocks";
import "./../components/home/home";

describe("home Module", () => {
  var $componentController;

  beforeEach(() => {
    angular.mock.module("homeModule");
  });

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it("component home: should have the propierty qualquer", () => {
    let bindings = {};
    let componentController = $componentController("home", null, bindings);

    expect(componentController.qualquer).toEqual("coisa");
  });
});
