const listOfAllDice= document.querySelectorAll(".die");
const scoreInputs = document.querySelector("#score-options") ;
const scoreSpans = document.querySelector("span");
const roundElement = document.querySelector("#current-round");
const rollsElement = document.querySelector("#current-round-rolls");
const totalScore = document.querySelector("#total-score");
const scoreHistory = document.querySelector("#score-history");
const rollDiceBtn = document.querySelector(" #roll-dice-btn");
const keepScoreBtn = document.querySelector("#keep-score-btn")
const rulesBtn= document.querySelector("#rules-btn")
const rulesContainer = document.querySelector(".rules-container")

let rolls;
let score;
let round;
let diceValuesArr;


