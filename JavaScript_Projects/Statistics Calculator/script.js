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



const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
// const testArr1 = [1, 2, 3, 4, 5];
// const testArr2 = [1, 2, 3, 4, 5, 6];
// const isEven = testArr2.length % 2 ===0 ? true : false
// const oddListMedian = testArr1[Math.floor(testArr1.length/2)];
// const evenListMedian = getMean(testArr2)
// console.log(evenListMedian);
// console.log(oddListMedian);
// console.log(isEven);
const getMedian = (array)=>{
    const sorted = array.toSorted((a,b) => a-b)
    return  sorted.length % 2 === 1 ? sorted[Math.floor(sorted.length / 2)] : getMean(sorted)


}
// main Functionality
const calculate = function(){
       const value = document.querySelector("#numbers").value;
       const array = value.split(/,\s*/g);
       const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
       const mean = getMean(numbers)
       const median = getMedian(numbers)   
           // Volues assigning
      document.querySelector("#mean").textContent = mean
      document.querySelector("#median").textContent = median
};