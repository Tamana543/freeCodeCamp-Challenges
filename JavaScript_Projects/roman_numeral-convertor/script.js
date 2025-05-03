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
     }
}
btn.addEventListener("click",validation)