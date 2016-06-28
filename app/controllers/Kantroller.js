var inkanaApp = angular.module('Inkana', []);

inkanaApp.controller('Kan-troller', ['$scope', function($scope) {
  $scope.title = 'Hiragana Practice';
  $scope.hiragana = [ 
    { romaji: 'a', hiragana: 'あ' },
    { romaji: 'i', hiragana: 'い' },
    { romaji: 'u', hiragana: 'う' },
    { romaji: 'e', hiragana: 'え' },
    { romaji: 'o', hiragana: 'お' }
  ];
}]);