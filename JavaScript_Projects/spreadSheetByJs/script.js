const  range = (start,end)=>Array(end-start+1).fill(start).map((element,index)=> element+index)
// new methood for changing string to num 
const charRange =(start,end)=> range(start.charCodeAt(0),end.charCodeAt(0)) ;

window.onload = () => {
  const container = document.getElementById("container");
const createLabel = (name)=>{
const label = document.createElement("div")
label.className = "label"
label.textContent = name;
container.appendChild(label)
}
}