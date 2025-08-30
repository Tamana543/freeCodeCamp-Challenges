const cushEle =document.getElementById("cash") ;
const submitBtn = document.getElementById("purchase-btn");

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

submitBtn.addEventListener('click',(event)=>{
event.preventDefault()
const cushValue = cushEle.value


console.log(cushValue);
cushEle.value = ""
})