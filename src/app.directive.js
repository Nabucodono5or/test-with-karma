function appDirective() {
  let directive = {
    restrict: "E",
    replace: true,
    template: `<h1>teste de directive, {{ 1 + 1 }} times</h1>`,
  };
  return directive;
}

export default appDirective;
