(function() {
  var bankroll;
  var minGuess = 1;
  var maxGuess = 10;
  var userInput;
  var bet;
  var validated;
  var lastRoundResult;

  function resolveGameState(guess) {
    var result = Math.ceil((Math.random() * 10));
    if (guess == result) {
      bankroll += bet;
      lastRoundResult = "Nice! You guess correctly with " + guess + ".\n\n";
    } else if(Math.abs(guess - result) != 1) {
      bankroll -= bet;
      lastRoundResult = "Uh oh! You guessed incorrectly with " + guess + " against " + result + ".\n\n";
    } else {
      lastRoundResult = "Only one off! You said " + guess + ", and it was " + result + ".\n\n";
    }
  }

  do {  // program loop
    lastRoundResult = "";
    bankroll = 100;
    do {  // game loop

      // Get the bet from the user
      validated = false;
      do {
        bet = prompt(lastRoundResult + "Your current bankroll: " + bankroll + "\n\nWould you like to bet 5 or 10?", "5");
        validated = (bet == 5 || bet == 10);
      } while (!validated)

      // Get the user's guess
      validated = false;
      do {
        userInput = prompt("Enter your guess between 1 and 10.");
        validated = (userInput >= minGuess && userInput <= maxGuess);
      } while (!validated)

      resolveGameState(userInput);

    } while (bankroll > 0); // end game loop
    userInput = confirm(lastRoundResult + "Would you like to try again?");
  } while (userInput); // end program loop
})();
