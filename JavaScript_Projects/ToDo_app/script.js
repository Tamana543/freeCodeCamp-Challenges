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

const taskData = [];
let currentTask = {};
openTaskFormBtn.addEventListener("click",()=>{
     taskForm.classList.toggle("hidden")

})
closeTaskFormBtn.addEventListener("click",()=>{
     confirmCloseDialog.showModal()// search me 
})
cancelBtn.addEventListener("click", ()=>{
     confirmCloseDialog.close()
})
discardBtn.addEventListener("click",()=>{
     confirmCloseDialog.close()
     taskForm.classList.toggle("hidden")
})
taskForm.addEventListener("submit",(event)=>{
     event.preventDefault();
     const dataArrIndex =taskData.findIndex((item)=>(item)=>item.id === currentTask.id)  ;
     const taskObj = {
          id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
          title: titleInput.value,
          date: dateInput.value,
          description: descriptionInput.value,
          
     } ;
    if(dataArrIndex === -1) {
     taskData.unshift(taskObj)
    }
    taskData.forEach(({id, title, date, description})=>{
tasksContainer.innerHTML += `
<div class="task" id="${id}">
<p><strong>Title:</strong> ${title}</p>
<p><strong>Date:</strong> ${date}</p>
</div>
`
    }) 
})