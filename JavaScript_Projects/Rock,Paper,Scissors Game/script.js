let playerScore = 0;
let computerScore = 0;
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

showResults("Rock");
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
   const num = Math.floor(options.length * Math.random())
   return options[num]
}
function hasPlayerWonTheRound(player,computer) {

if(player === "Rock" && computer === "Scissors") {
return true
}else if(player === "Scissors" && computer === "Paper") {
    return true
}else if(player === "Paper" && computer === "Rock") {
return true
}else {
    return false
}
}
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    // const hasPlayerWonTheRound = hasPlayerWonTheRound()
    if(hasPlayerWonTheRound === true) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`
    } if(hasPlayerWonTheRound === false) {
        return `Computer wins! ${computerResult} beats ${userOption}`
    } else { 
         return `It's a tie! Both chose ${userOption}`
    }
   
  }
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption)
    if(playerScore ===  3 || computerScore === 3){
        resetGameBtn.style.display = "block";
          optionsContainer.style.display= "none" ;
      if(playerScore === 3) {
          winnerMsgElement.innerText = "Player has won the game!"
          
        }else if(computerScore === 3) {
            winnerMsgElement.innerText = "Computer has won the game!" 
            
            
        }
    }
        
    playerScoreSpanElement.innerText = playerScore
    computerScoreSpanElement.innerText = computerScore
};
function resetGame(){
    playerScore=0
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore
    computerScoreSpanElement.innerText = computerScore
    resetGameBtn.style.display = "none"
    optionsContainer.style.display = "block"
    winnerMsgElement.innerText = ``;
    roundResultsMsg.innerText = ``;
}

resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });
showResults("Rock")