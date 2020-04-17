import angular from "angular";
import appComponent from "./app.component";
import appService from "./app.service";
import appDirective from "./app.directive";
import secondDirective from "./app.button.directive";
import backColorDirective from "./app.backcolor.directive";
import lengthFilter from "./app.filter";
import apiService from './apiService.service';

angular
  .module("app", [])
  .filter("length", lengthFilter)
  .factory("appService", appService)
  // .factory("apiService", apiService)
  .directive("backColor", backColorDirective)
  .directive("aGreatEye", appDirective)
  .directive("secondDirective", secondDirective)
  .component("app", appComponent).name;
