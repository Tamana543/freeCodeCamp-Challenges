// // Day_one challenge MAke a Pyromid 
// let profession = "teacher";
// let age;
// console.log(age);
// console.log(profession);
// let count  = 8;
// console.log(count + 1)
// let rows = [];
// rows = ["Naomi","Quincy","CamperChan"];
// console.log(rows[0])
// rows[2] = 10;
// console.log(rows)
// rows[rows.length-1] =3;
// let cities = ["London","New York","Mumbai"]
// console.log(cities);
// cities[cities.length-1] = "Mexico City";
// console.log(cities)
// rows.push("freeCodeCamp")
// console.log(rows)
// let popped = rows.pop();
// console.log(popped);
// let pushed = rows.push(pushed);
// console.log(pushed)
// rows = [];
// character = "Hello";
// const character = "#";
// const rows = [];
// // for (let i = 1; i <= count; i++) {
// //      rows.push(padRow(i,count))
// //    }
// for (const row of rows){
//      result = result + row + "\n"; 
// }
// function padRow(rowNumber,rowCount) {
    
//   return " ".repeat(rowCount-rowNumber)+character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount-rowNumber);
//    }


// function addTwoNumbers(A,B){
//      return A+B;
//      }
// let sum = addTwoNumbers(5,10);
//      console.log(sum);
   
//      if ("") {
//           console.log("Condition is true");
//         } else if (5 > 10) {
//           console.log("5 is less than 10");
//         }else {
//           console.log("This is the else block")
//         }
        
      

//         // while (rows.length<count) {
      
//         //   rows.push(padRow(rows.length+1,count))
         
//         // }
//         // for (let i = count; i > 0; i--) {
//         //   rows.push(padRow(i, count));
//         // }
//         const numbers = [1,2,3];
//         const shifted = numbers.shift();
//         const unshifted = numbers.unshift(5);
//         let inverted = true;
//         for (let i = 1; i <= count; i++) {
//           if(inverted){
            
//             rows.unshift(padRow(i, count));
//           }else{
//             rows.push(padRow(i, count));

//           }
//           }
const character = "😊";
const count = 10;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}