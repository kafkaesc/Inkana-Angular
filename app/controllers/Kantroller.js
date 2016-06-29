var inkanaApp = angular.module('Inkana', []);

inkanaApp.controller('Kan-troller', ['$scope', function($scope) {
  $scope.title = 'Hiragana Practice';
  $scope.testChar = 'あ';
  $scope.testRom =  'a';
  $scope.testIndex = 0;
  $scope.hiraganaOld = [ 
    { romaji: 'a', hiragana: 'あ' },
    { romaji: 'i', hiragana: 'い' },
    { romaji: 'u', hiragana: 'う' },
    { romaji: 'e', hiragana: 'え' },
    { romaji: 'o', hiragana: 'お' }
  ];
  $scope.hiragana = [ 'あ', 'い', 'う', 'え',  'お' ];
  $scope.katakana = [ ];
  $scope.romaji   = [ 'a', 'i', 'u', 'e', 'o'];
  $scope.testDeck = $scope.hiragana;
  $scope.nextChar = function() {
    $scope.testIndex = ($scope.testIndex + 1) % $scope.hiragana.length;
    $scope.testChar = $scope.hiragana[$scope.testIndex];
    $scope.testRom  = $scope.romaji[$scope.testIndex];
  }
  $scope.getHiragana = function(index) {
    $scope.testChar = $scope.hiragana[index];
  };
}]);