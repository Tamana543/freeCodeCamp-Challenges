let playerScore = 0;
let computerScore = 0;
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
    const hasPlayerWonTheRound = hasPlayerWonTheRound()
    if(hasPlayerWonTheRound) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`
    } if(!hasPlayerWonTheRound) {
        return `Computer wins! ${computerResult} beats ${userOption}`
    } else { 
         return `It's a tie! Both chose ${userOption}`
    }
   
  }
  
  console.log(getRoundResults("Rock"));
  console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
// console.log(hasPlayerWonTheRound("Rock","Scissors"));
// console.log(hasPlayerWonTheRound("Scissors", "Rock"));
// console.log(getRandomComputerResult());