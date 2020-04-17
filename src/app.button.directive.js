function buttonDirective() {
  let directive = {
    template: `<button>Imcrement a value</button>`,
    link: link,
  };

  return directive;

  function link(scope, element) {
    element.find("button").on("click", () => {
      scope.value++;
    });
  }
}

export default buttonDirective;
