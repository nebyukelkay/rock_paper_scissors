//funtion to play the game the round given

function playRound(roundNum) {
  let computerSum = 0;
  let humanSum = 0;
  for (let i = 1; i <= roundNum; i++) {
    //comsputers random selection funciton from rock,paper and scissors
    let getComputerchoice = () => {
      let options = ["rock", "paper", "scissors"];

      let optionsResult = Math.floor(Math.random() * options.length);
      return options[optionsResult];
    };

    //human selection function from rock,paper and scissors by entering in prompt
    let getHumanChoice = () => {
      let options = prompt("Enter from rock,paper or scissors").toLowerCase();
      if (options != "rock" && options != "paper" && options != "scissors") {
        return "Enter valid value";
      } else {
        return options;
      }
    };
    //putting return of computer and human selections on variable, because it helps to pass variables as an arguement
    let computerSelection = getComputerchoice();
    let humanSelection = getHumanChoice();

    //function to play the game by accepting parameters
    let playGame = (computerSelection, humanSelection) => {
      if ((computerSelection=="paper"&&humanSelection=="paper")||
        (computerSelection == "rock" && humanSelection == "rock") ||
        (computerSelection == "scissors" && humanSelection == "scissors")
      ) {
        return "tie";
      } else if (computerSelection == "rock" && humanSelection == "paper") {
        humanSum = humanSum + 1;
        return "you win by paper";
      } else if (computerSelection == "paper" && humanSelection == "rock") {
        computerSum = computerSum + 1;
        return "computer win by paper";
      } else if (computerSelection == "rock" && humanSelection == "scissors") {
        computerSum = computerSum + 1;
        return "computer win by rock";
      } else if (computerSelection == "paper" && humanSelection == "scissors") {
        humanSum = humanSum + 1;
        return "you win by scissors";
      } else if (computerSelection == "scissors" && humanSelection == "paper") {
        computerSum = computerSum + 1;
        return "computer win by scissors";
      } else if (computerSelection == "scissors" && humanSelection == "rock") {
        humanSum = humanSum + 1;
        return "you win by rock";
      } else {
        return "Enter valied value";
      }
    };
    console.log(playGame(computerSelection, humanSelection));
  }
  //displaying each players sum result

  console.log(`computer : ${computerSum}`);
  console.log(`human : ${humanSum}`);
  //display who wins the given round game
  if (computerSum > humanSum) {
    console.log(`Computer wins  ${computerSum}:${humanSum}`);
  } else if (humanSum > computerSum) {
    console.log(`you win  ${humanSum}:${computerSum}`);
  } else {
    console.log("you draw! play again!!!");
  }
}
let round = parseInt(prompt("Enter the round you want to play!"));
playRound(round);
