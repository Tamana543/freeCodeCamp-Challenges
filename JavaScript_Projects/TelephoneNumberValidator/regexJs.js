const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.querySelector("#user-input");
const resultDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();
   
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  if (regex.test(input)) {
    resultDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultDiv.textContent = `Invalid US number: ${input}`;
  }
});


clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultDiv.textContent = "";
});

