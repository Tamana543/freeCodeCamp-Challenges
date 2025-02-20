let playerScore = 0;
let computerScore = 0;
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

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
showResults("Rock")