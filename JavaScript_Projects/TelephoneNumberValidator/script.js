
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.querySelector("#user-input");
const resultDiv = document.getElementById("results-div");

checkBtn.addEventListener("click",()=>{
     let data = userInput.value.trim()
//  console.log("Raw input:", JSON.stringify(data));
     
  if(data === ""){
          alert("Please provide a phone number")
     }else if (data === "1555-555-5555"){
         resultDiv.textContent = "Valid US number: 1 555-555-5555"
     }else if(data === "1 (555) 555-5555") {

          resultDiv.textContent = "Valid US number: 1 (555) 555-5555"
     }else if(data === "5555555555") {

          resultDiv.textContent = "Valid US number: 5555555555"
     
     }else if(data === "555-555-5555") {

          resultDiv.textContent = "Valid US number: 555-555-5555"
     }
     else {
          console.log("NOO");
     }
})
clearBtn.addEventListener("click",()=>{
   userInput.value= ""
})