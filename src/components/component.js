import angular from "angular";

let falseFactory = function () {
  return {
    valueReturn: valueReturn,
  };

  function valueReturn() {
    return "Componente";
  }
};

let componentModule = angular
  .module("componentModeule", [])
  .factory("falseFactory", falseFactory).name;

export default componentModule;
