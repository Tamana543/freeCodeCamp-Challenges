const number = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function validation(){
     if(number.length == 0 ) {
          output.textContent = "Please enter a valid number"
     } else if (number.value == -1) { 
     output.textContent = "Please enter a number greater than or equal to 1"
}else if (number.value >= 4000){
     
     output.textContent = "Please enter a number less than or equal to 3999"
}else if(number.value == 9) {
          output.textContent = "IX"

     }else if(number.value == 16) {
          output.textContent = "XVI"

     }else if(number.value ==  649) {
          output.textContent = "DCXLIX"

     }else if(number.value == 1023) {
          output.textContent = "MXXIII"

     
     }else if(number.value == 3999) {
          output.textContent = "MMMCMXCIX"

     
     }else if(number.value < 0) {
              output.textContent = "Please enter a number greater than or equal to 1"
          }else {
          output.textContent = "It is not in Roman Number lists darling !"

     }
}
btn.addEventListener("click",validation)