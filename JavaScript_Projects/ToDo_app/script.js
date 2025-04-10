const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const cancelBtn = document.getElementById("cancel-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const titleInput = document.getElementById("title-input");
const tasksContainer = document.getElementById("tasks-container");
const discardBtn = document.getElementById("discard-btn");
const descriptionInput = document.getElementById("description-input");
const dateInput = document.getElementById("date-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};
function removeSpecialChars(data){
     let regex = data.replace(/["'_]/g,"");
     return regex
}
const addOrUpdateTask = ()=>{
     if(!titleInput.value.trim()){
          alert("Please provide a title")
          return 
     }
     const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
     const taskObj = {
          id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
          title: removeSpecialChars(titleInput.value),
          date: dateInput.value,
          description: removeSpecialChars(descriptionInput.value),
          
     } ;
     if(dataArrIndex === -1) {
          taskData.unshift(taskObj)
         }else {
          taskData[dataArrIndex] = taskObj;
         }
         localStorage.setItem("data",JSON.stringify(taskData))
         updateTaskContainer()
         reset() // for any bug chick here 
}
const updateTaskContainer = ()=>{
     tasksContainer.innerHTML="";
     taskData.forEach(({id, title, date, description})=>{
          tasksContainer.innerHTML += `
          <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button type="button" class="btn" onclick="editTask(this)">Edit</button>
          <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
          </div>
          `});
}
const deleteTask=(buttonEl)=>{
const dataArrIndex = taskData.findIndex((item)=> item.id === buttonEl.parentElement.id);
buttonEl.parentElement.remove()
taskData.splice(dataArrIndex,1)
localStorage.setItem("data",JSON.stringify(taskData))
}
const editTask=(buttonEl)=>{
 const dataArrIndex = taskData.findIndex((item)=> item.id === buttonEl.parentElement.id);
currentTask = taskData[dataArrIndex]
// console.log(taskData);
titleInput.value = currentTask.title;
dateInput.value = currentTask.date;
descriptionInput.value = currentTask.description;
addOrUpdateTaskBtn.innerText = "Update Task";
taskForm.classList.toggle("hidden")
}
const reset = ()=>{
     titleInput.value= "";
     dateInput.value= "";
     descriptionInput.value= "";
     taskForm.classList.toggle("hidden");
     currentTask ={};
     addOrUpdateTaskBtn.innerText = "Add Task"
}
if(taskData.length) {
     updateTaskContainer()
}
openTaskFormBtn.addEventListener("click",()=>{
     taskForm.classList.toggle("hidden")

})
closeTaskFormBtn.addEventListener("click",()=>{
     // confirmCloseDialog.showModal()// search me 
     const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;
     const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
     if(formInputsContainValues && formInputValuesUpdated) {
          confirmCloseDialog.showModal()
     }else {
          reset()
     }
   
})
cancelBtn.addEventListener("click", ()=>{
     confirmCloseDialog.close()
})
discardBtn.addEventListener("click",()=>{
     confirmCloseDialog.close()
     reset()
})
taskForm.addEventListener("submit",(event)=>{
     event.preventDefault();
     addOrUpdateTask()
})
