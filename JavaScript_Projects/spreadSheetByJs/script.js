
// Arrow Functions, features like some, average.. in spreadsheets 
const isEven = (num)=>num%2==0 ? true:false
const sum = (nums)=> nums.reduce((acc,el)=>acc + el , 0)// here new method for adding volues
const average = (nums)=>sum(nums)/nums.length
const median= (nums)=>{
     const sorted =  nums.slice().sort((a,b)=> a - b)
     const length = sorted.length;
  const middle = length/2 -1;
  return isEven(length) ? average([sorted[middle + 1], sorted[middle]]) : sorted[Math.round(middle)];
  
}
const  range = (start,end)=>Array(end-start+1).fill(start).map((element,index)=> element+index)

// new methood for changing string to num 
const charRange =(start,end)=> range(start.charCodeAt(0),end.charCodeAt(0)).map((code)=>String.fromCharCode(code)) ;
const spreadsheetFunctions = {
     sum,
     average,
     median
}
// to parse and evauate the input 
const evalFormula = (x , cells)=>{
     const idToText = (id)=> cells.find(cell => cell.id===id).value;
        const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
     const rangeFromString =(num1,num2)=> range(parseInt(num1),parseInt(num2))
      // Afunction returning an other function 
     // const elemValue = (num)=>{
     //     const inner =(character)=>{
     //      return idToText(character + num)
     //     } 
     //     return inner ..down // }
     const elemValue = (num)=>(character)=>idToText(character+num)
    
     const addCharacters = (character1)=> (character2) => (num)=>charRange(character1,character2)
}
window.onload = () => {
  const container = document.getElementById("container");
const createLabel = (name)=>{
const label = document.createElement("div")
label.className = "label"
label.textContent = name;
container.appendChild(label)
}
const letters = charRange("A","J")
letters.forEach(createLabel)
range(1,99).forEach((number)=>{
     createLabel(number)
     letters.forEach((letter)=>{
          const input = document.createElement('input')
          input.type = "text"
          input.id=letter + number
          input.ariaLabel = letter+number
          input.onchange = update
          container.appendChild(input)
     })
})
}

//Using spreadsheet functions
const update = (event)=>{
const element = event.target
const value = element.value.replace(/\s/g,"")
if(!value.includes(element.id) && value.startsWith("=")){}
}