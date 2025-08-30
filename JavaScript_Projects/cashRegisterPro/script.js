const cushEle =document.getElementById("cash") ;
const submitBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due")

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
function mainFunc(event){
     event.preventDefault()
     const cushValue = cushEle.value
     if(cushValue < price){
          alert("Customer does not have enough money to purchase the item")
     }else if (cushValue == price){
     changeDue.textContent="No change due - customer paid with exact cash"
     }else {
          
          console.log("me");
     }
     console.log(cushValue);
     cushEle.value = ""

}
submitBtn.addEventListener("click",mainFunc)
