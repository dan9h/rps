const HANDS = ['rock', 'paper', 'scissors'];
const LOSE = -1;
const TIE = 0;
const WIN = 1;
const echo = console.log; // just an alias

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * HANDS.length);
  return HANDS[randomIndex];
}

function getPlayerChoice() {
  const hand = prompt('Enter your choice (rock, paper, or scissors):');
  return hand;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return TIE;
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return WIN;
  } else {
    return LOSE;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  const rounds = 5;

  for (let round = 1; round <= rounds; round++) {
    echo(`\nRound ${round}:`);

    // Prompt the user for their choice
    const playerChoice = getPlayerChoice();

    // Exits the game immediately when the user hit Cancel on the prompt
    if (playerChoice === null) {
      echo('\nThank you for playing!');
      return;
    }

    // Validate the player's choice
    if (!HANDS.includes(playerChoice)) {
      echo('Invalid input! Please choose rock, paper, or scissors.');
      round--; // Don't count this round if the input is invalid
      continue;
    }

    // Get the computer's choice
    const computerChoice = getComputerChoice();

    // Display the choices
    echo(`You chose: ${playerChoice}`);
    echo(`Computer chose: ${computerChoice}`);

    // Determine round winner
    const result = playRound(playerChoice, computerChoice);

    // Update the score and display round winner
    switch (result) {
      case WIN:
        echo('You win!');
        playerScore++;
        break;
      case LOSE:
        echo('Computer wins!');
        computerScore++;
        break;
      default:
        echo("It's a tie!");
        break;
    }
  }

  // Display the final score and declare winner
  echo(`\nFinal Score:`);
  echo(`You: ${playerScore}`);
  echo(`Computer: ${computerScore}`);

  if (playerScore > computerScore) {
    echo('\nCongratulations, you win the game!');
  } else if (playerScore < computerScore) {
    echo('\nSorry, the computer wins the game.');
  } else {
    echo("\nIt's a tie! No one wins.");
  }
}

// Start the game
playGame();
