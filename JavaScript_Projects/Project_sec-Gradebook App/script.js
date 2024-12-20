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

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

console.log("___Second Challenge___");

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
if(score === 100){
  return "A++";
}else if (score >= 90 || score === 99){
  return "A"
}else if (score >= 80 || score === 89){
  return "B";
}else if (score >= 70 || score === 79){
  return "C";
}else if (score >= 60 || score === 69){
  return "D";
}else {
  return "F";
}
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

console.log("___Third Challenge___");
function hasPassingGrade(score) {
  const grade = getGrade(score);
  // console.log(grade)
  if(grade === "F"){
    return false;
  }else {
    return true;
  }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

console.log("___Forth Challenge___");

function studentMsg(totalScores, studentScore) {
const average = getAverage(totalScores);
// console.log(average);
const grade = getGrade(studentScore);
// console.log(grade);
if(grade === "F"){
  return "Class"+" " +"average:"+ average+ "."+ "Your"+" "+ "grade: " +grade +"."+ "You"+" " + "failed"+" "+"the" + " "+"course.";
}

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));