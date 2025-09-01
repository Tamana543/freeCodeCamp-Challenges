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
let cushValue = Number(cushEle.value);

const secObj = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};



function mainFunc(event){
     event.preventDefault()
     let change = Math.round((cushValue-price)*100) / 100;
     let totalCID = Math.round(cid.reduce((sum,[_,amount])=> sum + amount, 0) * 100)/100

     if(cushValue < price){
          alert("Customer does not have enough money to purchase the item")
          cushEle.value =""
          return
     }else if (change === 0){
     changeDue.textContent="No change due - customer paid with exact cash";
     cushEle.value= ""
     return;
     }
     // the drawer change 
     if(totalCID === change){
          const closedStr = [...cid].slice().sort((a,b)=>secObj[b[0]]-secObj[a[0]]).filter(([_,amount]) => amount> 0).map(([name,amount])=>`${name}: $${fmt(amount)}`).join(" ")
          changeDue.textContent= `Status: CLOSED ${closedStr}`;
          cushEle.value="";
          return;
     }

       const drawerDesc = [...cid].slice().sort((a, b) => secObj[b[0]] - secObj[a[0]]);
     let changeArr = [];
     // console.log(cushValue);

     // col the changes
     for(let [name,amount] of drawerDesc){
          let denomValue = secObj[name];
          let toReturn  = 0 ; 

         while(change >= denomValue && amount >=denomValue){
          change =Math.round((change-denomValue)* 100) / 100;
          amount = Math.round((amount-denomValue) * 100) / 100;
          toReturn = Math.round((toReturn + denomValue) * 100)/ 100
         } 
         if(toReturn > 0) {
          changeArr.push([name,toReturn])
         }
     }

     // the remaining cash counter

     let remainingCID = cid.map(([name,amount])=>{
          let used = changeArr.find(([n])=> n === name)
          if(used){
               return [name, Math.round((amount-used[1]) * 100) / 100]
          }else {
               return [name,amount]
          }
     });

     let totalRemaining = Math.round(remainingCID.reduce((sum,[_,a])=> sum + a , 0) * 100) / 100


     // last chickPoint 
     if(change > 0){
          changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
     }else if(totalRemaining === 0){
// WITHDRAWL END
let closedStr = remainingCID.map(([n,a])=> `${n}: $${a}`).join(" ");
    changeDue.textContent = "Status: CLOSED " + closedStr;
     }else {
    let openStr = changeArr.map(([n, a]) => `${n}: $${a}`).join(" ");
    changeDue.textContent = "Status: OPEN " + openStr;
  }

     cushEle.value = ""

}
submitBtn.addEventListener("click",mainFunc)
 /**
  
// const firstArrChi = cid.forEach(item=> item)
// const secArrChi = [...cid].forEach(item=>item)
// const thirdArrChi = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]].forEach(item => item)
// const forthArrChi = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]].forEach(item=>item);

 //inside Fun
  else if(price== 20 && cushValue == 10 ){
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
  */