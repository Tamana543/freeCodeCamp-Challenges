function getAverage(scores) {
  const data = scores;
  const averrage= [];
//   for(let i = data; i > 0; i++){
//     averrage.push(i)
//   }
data.forEach(el => {averrage.push(el + el / data.length)});

return averrage;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));