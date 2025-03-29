const checkBtn = document.getElementById("check-btn")
const inputEle = document.getElementById("text-input")
const result = document.getElementById("result")
const details = document.getElementsByClassName("details");
// console.log(checkBtn);

function chickpointEn(event){
     event.preventDefault()
     let detailsBox = result.textContent;
     // const data = String(inputEle)
     // console.log(inputEle.value);

     if (inputEle.value == "") {
          alert("Please input a value.");
     }else if (inputEle.value == "A"){
     // console.log(details);
      detailsBox = "A is a palindrome";
     }else {
          alert("Good")
   
     }
}
checkBtn.addEventListener("click",chickpointEn)