let sum = 0; 
function getAverage(scores) {
  const data = scores;
  console.log(scores)

  for(let i = 0; i < data.length; i++){
   sum = sum + data[i];
  
  }
// data.forEach(el => {
//  sum = sum +el.at()
//   average = el / data.length;
//  return average;
// });

return sum/scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));