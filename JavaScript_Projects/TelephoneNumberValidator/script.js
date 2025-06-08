
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("result-div");

let data = userInput.value
checkBtn.addEventListener("click",()=>{
     // data = Number(data)

     if(data.value === ""){
          alert("Please provide a phone number")
     }else if (data === 1555-555-5555){
         console.log("Done");
     }else {
          console.log("NOO");
     }
})
clearBtn.addEventListener("click",()=>{
     data = ""
})