var inkanaApp = angular.module('Inkana', []);

inkanaApp.controller('Kan-troller', ['$scope', function($scope) {
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
  $scope.hiragana = 
    [ 'あ', 'い', 'う', 'え', 'お', 'か', 'が', 'き', 'ぎ', 'く', 'ぐ',
      'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ',
      'ぜ', 'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'つ', 'づ', 'て', 'で',
      'と', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ',　
      'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ',
      'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る',
      'れ', 'ろ', 'わ', 'を', 'ん'];
  $scope.katakana = [ ];
  $scope.romaji   = 
    [ 'a',  'i',  'u',  'e',  'o',  'ka', 'ga', 'ki', 'gi', 'ku', 'gu',
      'ke', 'ge', 'ko', 'go', 'sa', 'za', 'shi', 'ji', 'su', 'zu', 'se', 
      'ze', 'so', 'zo', 'ta', 'da', 'chi', 'ji', 'tsu', 'zu', 'te', 'de', 
      'to', 'do', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'ba', 'pa', 'hi',
      'bi', 'pi', 'fu', 'bu', 'pu', 'he', 'be', 'pe', 'ho', 'bo', 'po',
      'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru',
      're', 'ro', 'wa', 'wo', 'n'];
  $scope.testDeck = $scope.hiragana;
  $scope.nextChar = function() {
    $scope.testIndex = ($scope.testIndex + 1) % $scope.hiragana.length;
    $scope.testChar = $scope.hiragana[$scope.testIndex];
    $scope.testRom  = $scope.romaji[$scope.testIndex];
  }
  $scope.getHiragana = function(index) {
    $scope.testChar = $scope.hiragana[index];
  };

  $scope.hiraganaTitle = 'Hiragana';
  $scope.katakanaTitle = 'Katakana';
}]);