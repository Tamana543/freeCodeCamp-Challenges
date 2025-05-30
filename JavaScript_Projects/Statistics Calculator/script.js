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
const getMode = (array)=>{
  const counts = {};
  array.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1)
  if(new Set(Object.values(counts)).size === 1){
    return null
  }
  const highest = Object.keys(counts).sort((a , b)=> counts[b]- counts[a])[0]
  const mode = Object.keys(counts).filter(el => counts[el] === counts[highest])
  return mode.join(", ")
}
const getRange = (array)=>{
  return ( Math.max(...array)-  Math.min(...array))
}
const getVariance =(array)=>{
  const mean = getMean(array)
    const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0)/ array.length;
  return variance
} ;
const getStandardDeviation =(array)=>{
  const variance = getVariance(array)
  // writing root in js 
  // const standardDeviation = Math.pow(variance,1/2)
  const standardDeviation = Math.sqrt(variance)
  return standardDeviation
}
// main Functionality
const calculate = function(){
       const value = document.querySelector("#numbers").value;
       const array = value.split(/,\s*/g);
       const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
       const mean = getMean(numbers)
       const median = getMedian(numbers)   
       const mode = getMode(numbers);
       const range = getRange(numbers);
       const variance = getVariance(numbers);
       const standardDev = getStandardDeviation(numbers);
           // Volues assigning
      document.querySelector("#mean").textContent = mean
      document.querySelector("#median").textContent = median
      document.querySelector("#mode").textContent = mode
      document.querySelector("#range").textContent = range
      document.querySelector("#variance").textContent = variance
      document.querySelector("#standardDeviation").textContent = standardDev
    }