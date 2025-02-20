let playerScore = 0;
let computerScore = 0;
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");


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
playerScoreSpanElement.innerText = playerScore
computerScoreSpanElement.innerText = computerScore
roundResultsMsg.innerText = getRoundResults(userOption)

};
showResults("Rock")