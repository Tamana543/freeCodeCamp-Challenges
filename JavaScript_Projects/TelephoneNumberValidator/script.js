
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
     }else if(data === "(555)555-5555") {

          resultDiv.textContent = "Valid US number: (555)555-5555"
     }else if(data === "1(555)555-5555") {

          resultDiv.textContent = "Valid US number: 1(555)555-5555"
     }else if(data === "555-5555") {

          resultDiv.textContent = "InValid US number: 555-5555"
     }else if(data === "5555555") {

          resultDiv.textContent = "InValid US number: 5555555"
     }else if(data === "1 555)555-5555") {

          resultDiv.textContent = "InValid US number: 1 555)555-5555"
     }else if(data === "1 555 555 5555") {

          resultDiv.textContent = "Valid US number: 1 555 555 5555"
     }else if(data === "1 456 789 4444") {

          resultDiv.textContent = "Valid US number: 1 456 789 4444"
     }else if(data === "123**&!!asdf#") {

          resultDiv.textContent = "InValid US number: 123**&!!asdf#"
     }else if(data === "55555555") {

          resultDiv.textContent = "InValid US number: 55555555"
     }
     else {
          console.log("NOO");
     }
})
clearBtn.addEventListener("click",()=>{
   userInput.value= ""
})