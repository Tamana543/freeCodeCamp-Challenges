const container = document.querySelector(".container")
const hiddenText = document.getElementById("learnMore")

// UI functionality 
function displayTextEng(){
hiddenText.classList.remove("hidden")
container.classList.add("hidden")
console.log(container);
}
function hideTextEng(){
     hiddenText.classList.add("hidden")
container.classList.remove("hidden")
}

// main Functionality
const calculate = function(){
       const value = document.querySelector("#numbers").value;
       const array = value.split(/,\s*/g);
       const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
       const mean = getMean(numbers)
     // Volues assigning
      document.querySelector("#mean").textContent = mean
};

const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
const getMedian = (array)=>{
    const sorted = array.sort((a,b) => a-b)
  
}