// const checkBtn = document.getElementById("check-btn")
// const inputEle = document.getElementById("text-input")
// const result = document.getElementById("result")
// const details = document.getElementsByClassName("details");
// // console.log(checkBtn);

// function chickpointEn(event){
//      event.preventDefault()
     
//      // const data = String(inputEle)
//      // console.log(inputEle.value);
//      if (inputEle.value == "") {
//           alert("Please input a value.");
//      }else {
         
//       if (inputEle.value == "A"){
//      console.log(inputEle.value);
//      result.textContent= "A is a palindrome";
//      }
//       if (inputEle.value == "eye"){
//      console.log(inputEle.value);
//      result.textContent= "eye is a palindrome";
//      }
//       if ( inputEle.value == "_eye"){
//      console.log(inputEle.value);
//      result.textContent= "_eye is a palindrome";
//      }
//       if ( inputEle.value == "race car"){
//      console.log(inputEle.value);
//      result.textContent= "race car is a palindrome";
//      }
//       if ( inputEle.value == "not a palindrome"){
//      console.log(inputEle.value);
//      result.textContent= "not a palindrome is not a palindrome";
//      }
//      if ( inputEle.value == "A man, a plan, a canal. Panama"){
//           console.log(inputEle.value);
//           result.textContent= "A man, a plan, a canal. Panama is  a palindrome";
//           }
//             if ( inputEle.value == "never odd or even"){
//                console.log(inputEle.value);
//                result.textContent= "never odd or even is  a palindrome";
//                }
//             if ( inputEle.value == "nope"){
//                console.log(inputEle.value);
//                result.textContent= "nope is not a palindrome";
//                }
//             if ( inputEle.value == "almostomla"){
//                console.log(inputEle.value);
//                result.textContent= "almostomla is not a palindrome";
//                }
//             if ( inputEle.value == "My age is 0, 0 si ega ym."){
//                console.log(inputEle.value);
//                result.textContent= "My age is 0, 0 si ega ym. is a palindrome";
//                }
//             if ( inputEle.value == "1 eye for of 1 eye."){
//                console.log(inputEle.value);
//                result.textContent= "1 eye for of 1 eye. is not a palindrome";
//                }
//                if ( inputEle.value == "0_0 (: /-\ :) 0-0"){
//                     console.log(inputEle.value);
//                     result.textContent= "0_0 (: /-\ :) 0-0 is  a palindrome";
//                }
//                if ( inputEle.value == "five|\_/|four"){
//                   console.log(inputEle.value);
//                   result.textContent= "five|\_/|four is not a palindrome";
//                   }
                 
   
//                }
// }
// checkBtn.addEventListener("click",chickpointEn)

const checkBtn = document.getElementById("check-btn");
const inputEle = document.getElementById("text-input");
const result = document.getElementById("result");

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Check if the cleaned string is the same forward and backward
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

function checkPalindrome(event) {
    event.preventDefault();

    let inputValue = inputEle.value.trim();
    
    if (inputValue === "") {
        alert("Please input a value.");
        return;
    }

    if (isPalindrome(inputValue)) {
        result.textContent = `${inputValue} is a palindrome`;
    } else {
        result.textContent = `${inputValue} is not a palindrome`;
    }
}

checkBtn.addEventListener("click", checkPalindrome);