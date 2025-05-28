const container = document.querySelector(".container")
const hiddenText = document.getElementById("learnMore")
function displayTextEng(){
hiddenText.classList.remove("hidden")
container.classList.add("hidden")
console.log(container);
}
function hideTextEng(){
     hiddenText.classList.add("hidden")
container.classList.remove("hidden")
}