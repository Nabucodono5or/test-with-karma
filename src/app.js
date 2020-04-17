import angular from "angular";
import appComponent from "./app.component";
import appService from "./app.service";
import appDirective from "./app.directive";

angular
  .module("app", [])
  .factory("appService", appService)
  .directive("aGreatEye", appDirective)
  .component("app", appComponent).name;
