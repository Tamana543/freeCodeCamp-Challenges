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


const diceRoller = ()=>{
diceValuesArr = []

          for(let i = 1 ; i <=5 ; i++){
               const randNum = Math.floor(Math.random()*6) + 1
               diceValuesArr.push(randNum)
     
               listOfAllDice.forEach((option,index)=>{
               option.textContent = diceValuesArr[index]
               })
          }
     
     // console.log(diceValuesArr);
}

const updateStats = ()=>{
     roundElement.textContent = round;
     rollsElement.textContent = rolls
}
const resetRadioOptions = ()=>{
     scoreInputs.forEach(item=>{
          item.disabled = true
          item.checked = false

     })
     scoreSpans.forEach(item=>{
     item.textContent = ""

     })
}
const getHighestDuplicates = (array)=>{
const numCounter ={} ;
let highestCount = 0; 

for(const num of array)
if(numCounter[num]){
numCounter[num]++
}else {
numCounter[num] = 1
}
// to count the repetatin of the num 
for(const num of array){
     const counting = numCounter[num];
     if(counting >=3 && counting > highestCount){
          highestCount = counting
     }
     if(counting >= 4 && counting > highestCount){
          highestCount = counting
     }
}
const sum = array.reduce((acc, el) => acc + el, 0);
// console.log(sum);

if(highestCount >= 4){
     updateRadioOption(1, sum)
}
if(highestCount>=3){
     updateRadioOption(0,sum)
}
updateRadioOption(5,0)

}
const updateRadioOption = (index,score)=>{
scoreInputs[index].disabled =false;
scoreInputs[index].value = score;
scoreSpans[index].textContent = `, score = ${score}`;
}
// to keep the score you selected and move onto the next round.
const updateScore = (value, id)=>{
const newScore = parseInt(value)
score += newScore
totalScoreElement.textContent = score

const li = document.createElement("li")
li.textContent= `${id} : ${newScore}`
scoreHistory.appendChild(li)
// scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};
rollDiceBtn.addEventListener("click",()=>{
     if(rolls < 3) {
          diceRoller()
          rolls ++;
          updateStats()
          getHighestDuplicates(diceValuesArr)

     }else {
          rollDiceBtn.disabled = true
          alert("Select Your score, no more role greather than 3")
     }
})
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

