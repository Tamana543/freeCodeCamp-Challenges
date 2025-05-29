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
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 ===0 ? true : false
const oddListMedian = testArr1[Math.floor(testArr1.length/2)];
console.log(oddListMedian);
console.log(isEven);
const getMedian = (array)=>{
    const sorted = array.sort((a,b) => a-b)

}