import angular from "angular";
import appComponent from "./app.component";
import appService from "./app.service";
import appDirective from "./app.directive";
import secondDirective from './app.button.directive';

angular
  .module("app", [])
  .factory("appService", appService)
  .directive("aGreatEye", appDirective)
  .directive("secondDirective", secondDirective)
  .component("app", appComponent).name;
