const checkBtn = document.getElementById("check-btn")
const inputEle = document.getElementById("text-input")
const resultBoc = document.getElementById("result")
// console.log(checkBtn);

function chickpointEn(event){
     event.preventDefault()
     // const data = String(inputEle)
     console.log(inputEle.value);
     if(inputEle.value == " ") {
          alert("Please input a value")
     }else{
          console.log("Hereee");
     }
}
checkBtn.addEventListener("click",chickpointEn)