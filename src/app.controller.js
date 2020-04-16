function AppController($scope, appService) {
  let vm = this;
  vm.titulo = "Bem vindo";
  vm.hello = appService.get();
}

AppController.$inject = ["$scope", "appService"];

export default AppController;
