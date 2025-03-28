const checkBtn = document.getElementById("check-btn")
const inputEle = document.getElementById("text-input")
const resultBoc = document.getElementById("result")
// console.log(checkBtn);

function chickpointEn(event){
     event.preventDefault()
     // const data = String(inputEle)
     if(inputEle.length === 0 ) {
          alert("Please input a value")
     }else{
          console.log("Hereee");
     }
}
checkBtn.addEventListener("click",chickpointEn)