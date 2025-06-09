const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.querySelector("#user-input");
const resultDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  if (isValidUSPhoneNumber(input)) {
    resultDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultDiv.textContent = `Invalid US number: ${input}`;
  }
});


clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultDiv.textContent = "";
});

// VALIDATOR FUNCTION / work more !!!!



function isValidUSPhoneNumber(str) {
  const pattern =  [/^1? ?(( ?\d{3} [- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/gm, /\d{10}/gm, /\d*\(\d[\d)]{3}\d{3}-\d{4}/gm, /\d{3}-\d{3}-\d{4}/gm, /^\d\s\d{3}-\d{3}-\d{4}/gm];
  return pattern.test(str);
}