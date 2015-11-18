var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
    var apikey = "aa3066b97cf3e38461c8b09cc5f4b595daa7f6b8";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = 'Superman';

    var finalURL = gameSearchURL + '&query=' + encodeURI(query) + '&json_callback=JSON_CALLBACK';
    var responseArray = [];
    $http.jsonp(finalURL).then(
        function(response) {
            responseArray = response.data.results;
            console.log(responseArray);
        }
    );


}]);