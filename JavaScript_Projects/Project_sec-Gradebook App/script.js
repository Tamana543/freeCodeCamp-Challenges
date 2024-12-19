function getAverage(scores) {
  const data = scores;
  let average;
  // for(let i = data; i > 0; i++){
  //   average.push(i)
  // }
data.forEach(el => {
  // console.log( average.push(el + el / data.length))
  average = el + el / data.length;
 return average;
});

return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));