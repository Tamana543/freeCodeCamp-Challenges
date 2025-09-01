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
     for (let i = 0; i < drawerDesc.length; i++) {
    const [name, available] = drawerDesc[i];
    const val = secObj[name];
    let give = 0;
    let left = Math.round(available * 100) / 100;

    while (change >= val && left >= val) {
      change = Math.round((change - val) * 100) / 100;
      left = Math.round((left - val) * 100) / 100;
      give = Math.round((give + val) * 100) / 100;
    }

    if (give > 0) changeArr.push([name, give]);
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
