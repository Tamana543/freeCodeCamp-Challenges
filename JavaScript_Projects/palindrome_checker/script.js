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