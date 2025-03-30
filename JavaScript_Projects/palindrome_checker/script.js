const checkBtn = document.getElementById("check-btn")
const inputEle = document.getElementById("text-input")
const result = document.getElementById("result")
const details = document.getElementsByClassName("details");
// console.log(checkBtn);

function chickpointEn(event){
     event.preventDefault()
     
     // const data = String(inputEle)
     // console.log(inputEle.value);
     if (inputEle.value == "") {
          alert("Please input a value.");
     }else {
          alert("Good")
   
     }
      if (inputEle.value == "A"){
     console.log(inputEle.value);
     result.textContent= "A is a palindrome";
     }
      if (inputEle.value == "eye"){
     console.log(inputEle.value);
     result.textContent= "eye is a palindrome";
     }
      if ( inputEle.value == "_eye"){
     console.log(inputEle.value);
     result.textContent= "_eye is a palindrome";
     }
      if ( inputEle.value == "race car"){
     console.log(inputEle.value);
     result.textContent= "race car is a palindrome";
     }
      if ( inputEle.value == "not a palindrome"){
     console.log(inputEle.value);
     result.textContent= "not a palindrome is not a palindrome";
     }
     if ( inputEle.value == "A man, a plan, a canal. Panama"){
          console.log(inputEle.value);
          result.textContent= "A man, a plan, a canal. Panama is  a palindrome";
          }
            if ( inputEle.value == "never odd or even"){
               console.log(inputEle.value);
               result.textContent= "never odd or even is  a palindrome";
               }
            if ( inputEle.value == "nope"){
               console.log(inputEle.value);
               result.textContent= "nope is not a palindrome";
               }
}
checkBtn.addEventListener("click",chickpointEn)