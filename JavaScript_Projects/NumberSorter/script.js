const sortButton = document.getElementById("sort")

const updateUI = (array=[])=>{
     array.forEach((num,i)=>{
          const outputValueNode = document.getElementById(`output-value-${i}`)
          outputValueNode.innerText = num;
     })
}
const sortInputArray = (event)=>{
     event.preventDefault()
     const inputValues = [...document.getElementsByClassName("values-dropdown")].map(dropdown=>Number(dropdown.value));
     updateUI(inputValues)
     // console.log(inputValues);
}
const bubbleSort = (array)=>{

}

sortButton.addEventListener("click",sortInputArray)