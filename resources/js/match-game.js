//https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-8/Match+Game/solution/index.html

var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});
/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var allNumbers = [];
  for (var i = 1; i <= 8; i++) {
    allNumbers.push(i);
    allNumbers.push(i);
  };

  var cardValues = [];
  while (allNumbers.length>0) {
    var randomNumber = Math.floor(Math.random() * allNumbers.length);
    var randomValue = allNumbers.splice(randomNumber, 1)[0];
    cardValues.push(randomValue)
  };

  return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

  $game.empty();
  for (var i = 0; i < cardValues.length; i++) {
    var value = cardValues[i];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };
    var $cardElement = $('<div class="col-md-3 card"></div>');
    $cardElement.data(data);

    $game.append($cardElement);
  }


};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
