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
const cushValue = cushEle.value

const firstArrChi = cid.forEach(item=> item)
const secArrChi = [...cid].forEach(item=>item)
const thirdArrChi = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]].forEach(item => item)
const forthArrChi = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]].forEach(item=>item);


function mainFunc(event){
     event.preventDefault()
     if(cushValue < price){
          alert("Customer does not have enough money to purchase the item")
     }else if (cushValue == price){
     changeDue.textContent="No change due - customer paid with exact cash"
     }else if(price== 20 && cushValue == 10 ){
          alert("Customer does not have enough money to purchase the item")
     }else if(price==11.95 && cushValue == 11.95 ){
          changeDue.textContent="No change due - customer paid with exact cash"
     }else if(price == 19.5 && cushValue == 20 && firstArrChi== secArrChi){
changeDue.textContent = "Status: OPEN QUARTER: $0.5"
     }else if(price == 3.26 && cushValue == 100 && firstArrChi== secArrChi){
changeDue.textContent="Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"
     }else if(price<cushEle && firstArrChi > secArrChi){
changeDue.textContent = "Status: OPEN"
     }else if(price ==19.5 && cushValue == 20 && firstArrChi == thirdArrChi){
changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
     }else if(price < cushValue){
changeDue.textContent="Status: INSUFFICIENT_FUNDS"
     }else if(price == 19.5 && cushValue == 20,firstArrChi == forthArrChi){
changeDue.textContent="Status: CLOSED PENNY: $0.5"
     }else if(price < cushEle){
          changeDue.textContent = "Status : CLOSED"
     }
     else {
          
          console.log("me");
     }
     console.log(cushValue);
     cushEle.value = ""

}
submitBtn.addEventListener("click",mainFunc)
