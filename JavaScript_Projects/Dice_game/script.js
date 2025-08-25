const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");

let rolls = 0;
let score = 0;
let round = 1;
let diceValuesArr = [];
let isModalShowing = false;

rulesBtn.addEventListener("click",()=>{
     isModalShowing = !isModalShowing;// new trick
     if(isModalShowing){
          rulesContainer.style.display = "block";
          
          rulesBtn.textContent = "Hide rules"
     }else {
          rulesContainer.style.display = "none";
          
          rulesBtn.textContent = "Show rules"

     }
})
rollDiceBtn.addEventListener("click",()=>{
     if(diceValuesArr.length == 0){

          for(let i = 1 ; i <=5 ; i++){
               const randNum = Math.floor(Math.random()) + 1
               diceValuesArr.push(randNum)
     
          }
     }else {
          diceValuesArr.length = 0
     }
     console.log(diceValuesArr);
})
