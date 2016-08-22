$(document).ready(function() {
  $('#submit').click(function() {
    var guess = $('#guess').val();
    var bet = $('#bet-5').prop("checked") ? 5 : 10;
    resolveGameState(guess, bet);
  });
});

var resolveGameState = function(guess, bet) {
  var result = Math.ceil((Math.random() * 10));
  var bankroll = parseInt($('#bankroll').text());
  var lastRoundResult;

  if (guess == result) {
    bankroll += bet;
    lastRoundResult = "Nice! You guess correctly with " + guess + ".\n\n";
  } else if(Math.abs(guess - result) != 1) {
    bankroll -= bet;
    lastRoundResult = "Uh oh! You guessed incorrectly with " + guess + " against " + result + ".\n\n";
  } else {
    lastRoundResult = "Only one off! You said " + guess + ", and it was " + result + ".\n\n";
  }

  $('#bankroll').replaceWith('<span id="bankroll">' + bankroll + '</span>');
  $('#output').replaceWith('<span id="output">' + lastRoundResult + '</span>');

  if (bankroll <= 0) { promptForRestart(); }
}

var promptForRestart = function() {
  if (confirm('Too bad :(\n\nWould you like to try again?')) {
    $('#bankroll').replaceWith('<span id="bankroll">100</span>');
    $('#output').replaceWith('<span id="output"></span>');
  }
}
