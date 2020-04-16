import angular from "angular";
import appComponent from "./app.component";
import appService from "./app.service";

angular
  .module("app", [])
  .factory("appService", appService)
  .component("app", appComponent).name;
