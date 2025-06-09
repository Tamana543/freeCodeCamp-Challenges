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
  const pattern = new RegExp(
    '^([+]?1[\\s]?)?' + // optional country code
    '(' +
      '(\\([2-9]1[02-9]\\)|\\([2-9][02-8][0-9]\\)[\\s]?)' + // area code in parentheses
      '|' +
      '([2-9]1[02-9]|[2-9][02-8][0-9])[\\s.-]?' + // or area code without parentheses
    ')' +
    '([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})[\\s.-]?' + // valid exchange code
    '([0-9]{4})$' // last 4 digits
  );
  return pattern.test(str);
}
// /^1? ?(( ?\d{3} [- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/gm, /\d{10}/gm, /\d*\(\d[\d)]{3}\d{3}-\d{4}/gm, /\d{3}-\d{3}-\d{4}/gm, /^\d\s\d{3}-\d{3}-\d{4}/gm