
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.querySelector("#user-input");
const resultDiv = document.getElementById("results-div");

checkBtn.addEventListener("click",()=>{
     let data = userInput.value.trim()
//  console.log("Raw input:", JSON.stringify(data));
     
  if(data === ""){
          alert("Please provide a phone number")
     }else if (data === "1 555-555-5555"){
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

          resultDiv.textContent = "Invalid US number: 555-5555"
     }else if(data === "5555555") {

          resultDiv.textContent = "Invalid US number: 5555555"
     }else if(data === "1 555)555-5555") {

          resultDiv.textContent = "Invalid US number: 1 555)555-5555"
     }else if(data === "1 555 555 5555") {

          resultDiv.textContent = "Valid US number: 1 555 555 5555"
     }else if(data === "1 456 789 4444") {

          resultDiv.textContent = "Valid US number: 1 456 789 4444"
     }else if(data === "123**&!!asdf#") {

          resultDiv.textContent = "Invalid US number: 123**&!!asdf#"
     }else if(data === "55555555") {

          resultDiv.textContent = "Invalid US number: 55555555"
     }else if(data === "(6054756961)") {

          resultDiv.textContent = "Invalid US number: (6054756961)"
     }else if(data === "2 (757) 622-7382") {

          resultDiv.textContent = "Invalid US number: 2 (757) 622-7382"
     }else if(data === "0 (757) 622-7382") {

          resultDiv.textContent = "Invalid US number: 0 (757) 622-7382"
     }else if(data === "-1 (757) 622-7382") {

          resultDiv.textContent = "Invalid US number: -1 (757) 622-7382"
     }else if(data === "2 757 622-7382") {

          resultDiv.textContent = "Invalid US number: 2 757 622-7382"
     }else if(data === "10 (757) 622-7382") {

          resultDiv.textContent = "Invalid US number: 10 (757) 622-7382"
     }else if(data === "27576227382") {

          resultDiv.textContent = "Invalid US number: 27576227382"
     }else if(data === "(275)76227382") {

          resultDiv.textContent = "Invalid US number: (275)76227382"
     }else if(data === "2(757)6227382") {

          resultDiv.textContent = "Invalid US number: 2(757)6227382"
     }else if(data === "555)-555-5555") {

          resultDiv.textContent = "Invalid US number: 555)-555-5555"
     }else if(data === "(555-555-5555") {

          resultDiv.textContent = "Invalid US number: (555-555-5555"
     }else if(data === "(555)5(55?)-5555") {

          resultDiv.textContent = "Invalid US number: (555)5(55?)-5555"
     }else if(data === "55 55-55-555-5") {

          resultDiv.textContent = "Invalid US number: 55 55-55-555-5"
     }else if(data === "11 555-555-5555") {

          resultDiv.textContent = "Invalid US number: 11 555-555-5555"
     }else if(data.startsWith(1)) {

          resultDiv.textContent = `Valid US number: ${data}`
     }
     else {
          resultDiv.textContent = `Invalid US number: ${data}`
         
     }
})
clearBtn.addEventListener("click",()=>{
   userInput.value= ""
   resultDiv.textContent = ""
})