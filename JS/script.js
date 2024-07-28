let rockbutton=document.getElementById("first-button");
let paperbutton=document.getElementById("second-button");
let scissorsbutton=document.getElementById("third-button");
let displaydiv=document.getElementById("display");
let humanselection=document.getElementById("humansum");
let computerselection=document.getElementById("computersum");
let playAgainButton = document.createElement("button");


  rockbutton.addEventListener("click", playRound)
  paperbutton.addEventListener("click",playRound)
  scissorsbutton.addEventListener("click",playRound)

  let computerSum = 0;
  let humanSum = 0;
  let roundsplayed=0;
function playRound(e) {
  if(roundsplayed<5){

    //comsputers random selection funciton from rock,paper and scissors
    let getComputerchoice = () => {
      let options = ["rock", "paper", "scissors"];
    
      let optionsResult = Math.floor(Math.random() * options.length);
      return options[optionsResult];
    };
    let computerSelection = getComputerchoice();
  // human selection function from rock,paper and scissors by entering in prompt
    let humanSelection=e.target.value;   
   
    //function to play the game by accepting parameters
    let playGame = (computerSelection, humanSelection) => {
      if ((computerSelection=="paper"&&humanSelection=="paper")||
        (computerSelection == "rock" && humanSelection == "rock") ||
        (computerSelection == "scissors" && humanSelection == "scissors")
      ) {
        displaydiv.textContent="tie";
        
        
      } else if (computerSelection == "rock" && humanSelection == "paper") {
        humanSum = humanSum + 1;
        humanselection.textContent=humanSum;
        displaydiv.textContent="you win by paper"
      } else if (computerSelection == "paper" && humanSelection == "rock") {
        computerSum = computerSum + 1;

        computerselection.textContent=computerSum;
        displaydiv.textContent="computer win by paper"
      } else if (computerSelection == "rock" && humanSelection == "scissors") {
        computerSum = computerSum + 1;
        computerselection.textContent=computerSum;
        displaydiv.textContent="computer win by rock";
      } else if (computerSelection == "paper" && humanSelection == "scissors") {
        humanSum = humanSum + 1;
        humanselection.textContent=humanSum;
        displaydiv.textContent="you win by scissors"
      } else if (computerSelection == "scissors" && humanSelection == "paper") {
        computerSum = computerSum + 1;
        
        computerselection.textContent=computerSum;
        displaydiv.textContent="computer win by scissors"
      } else if (computerSelection == "scissors" && humanSelection == "rock") {
        humanSum = humanSum + 1;
        humanselection.textContent=humanSum;
        displaydiv.textContent="you win by rock"
      } 
      
    };
        playGame(computerSelection, humanSelection);
  
        computerselection.textContent=computerSum;
        humanselection.textContent=humanSum;
  //displaying each players sum result

  roundsplayed++
  
  //display who wins the given round game
  }
    if (roundsplayed == 5) {
      if (computerSum > humanSum) {
        displaydiv.textContent = "Computer wins the game!";
      } else if (humanSum > computerSum) {
        displaydiv.textContent = "You win the game!";
      } else {
        displaydiv.textContent = "It's a tie!";
      }
      displaydiv.appendChild(playAgainButton);
      playAgainButton.textContent = "Play Again";
      playAgainButton.addEventListener("click", resetGame);
    }
  }
 
  function resetGame() {
    roundsplayed = 0;
    computerSum = 0;
    humanSum = 0;
    displaydiv.textContent = "";
    humanselection.textContent = "";
    computerselection.textContent = "";
  
    // Remove the playAgainButton from the document body
    if (playAgainButton.parentNode) {
      playAgainButton.parentNode.removeChild(playAgainButton);
    }
  }



