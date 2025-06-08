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
  // Reject if any invalid characters (letters or symbols)
  if (/[^0-9\s\-()]/.test(str)) return false;

  // Parentheses must be properly opened and closed and wrap exactly 3 digits
  if (str.includes("(") || str.includes(")")) {
    if (!/\(\d{3}\)/.test(str)) return false;
    // Must not have unmatched or misplaced parentheses
    if (str.indexOf("(") > str.indexOf(")")) return false;
    if (str.match(/\(/g)?.length !== str.match(/\)/g)?.length) return false;
  }

  // Remove all non-digit characters to count digits
  const numbersOnly = str.replace(/\D/g, "");

  if (numbersOnly.length === 10) {
    return true;
  } else if (numbersOnly.length === 11 && numbersOnly.startsWith("1")) {
    return true;
  }

  return false;
}
