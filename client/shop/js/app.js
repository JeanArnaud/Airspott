/**
 * Set-up the airspott module
 * Used as the main entry for airspott and importing point for shop things and base dependencies
 * @ng-module: com.airspott
 */
angular.module('com.airspott', [
  'pascalprecht.translate',
  'ngRoute',
  'ui.router',
  'com.airspott.api',
  'com.airspott.shop'
]);
