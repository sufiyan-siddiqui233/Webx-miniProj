var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/homeContent.html",
        controller: "HomeController",
      })

      .when("/shop", {
        templateUrl: "views/shopping.html",
        controller: "ShopController",
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutController",
      })
      .when("/contact/:id", {
        templateUrl: "views/contact.html",
        controller: "ContactController",
      });

    // Use $locationProvider to configure HTML5 mode
    $locationProvider.html5Mode(false);

    // Set hash prefix to an empty string
    $locationProvider.hashPrefix("");
  },
]);

myApp.controller("HomeController", [
  "$scope",
  function ($scope) {
    $scope.message = "Welcome to the Home Page!";
  },
]);

myApp.controller("MyController", function ($scope) {
  // Data for the examples
  $scope.text2 = "30$ - 50$";
  $scope.date = new Date();
  $scope.text = "Top Sales";
});
myApp.controller("Main", function ($scope) {
  $scope.text = "Fashion Trendz";
});

myApp.directive("customDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./views/contact.html", // Specify the path to your directive's template
    scope: {
      // Define any isolated scope properties if needed
    },
    link: function (scope, element, attrs) {
      // Add custom behavior here
      element.on("click", function () {
        // element.css("text-color", "red");
        element.find("h").css("color", "blue");
      });
    },
  };
});
// myApp.directive("paymentDirective", function () {
//   return {
//     restrict: "E",
//     templateUrl: ".html", // Specify the path to your directive's template
//     scope: {
//       // Define any isolated scope properties if needed
//     },
//     link: function (scope, element, attrs) {
//       // Add custom behavior here
//       element.on("click", function () {
//         // element.css("text-color", "red");
//         element.find("h").css("color", "blue");
//       });
//     },
//   };
// });
