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

