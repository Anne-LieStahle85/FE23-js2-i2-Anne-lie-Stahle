import displayTasks from "./modules/displayTask.js";
import { getTasks, addTask, assignTask, taskDone, deleteTask } from "./modules/fetchFunktions.js";


const form = document.getElementById("taskForm");
const newTaskInput = document.getElementById("newTask");
const categorySelect = document.getElementById("category");

form.addEventListener("submit", async (event) =>{
    event.preventDefault();

    const newTaskValue = newTaskInput.value.trim();
    const categoryValue = categorySelect.value;

    const newTask = {
        assigned: "none",
        category: categoryValue,
        status: "to do",
        task: newTaskValue
    }

    form.reset();

    await addTask(newTask);
    const updatedData = await getTasks();
    displayTasks(updatedData);

})

document.addEventListener('click', async function (event){
    const target = event.target;

    if(target.tagName === 'BUTTON' && target.textContent === 'Assign >>'){
        const assignedPerson = target.previousElementSibling.value;
        const taskDiv = target.closest('.taskDiv');
        const taskKey = taskDiv.dataset.taskKey;

        if(assignedPerson && taskKey){
            await assignTask(taskKey, assignedPerson);

            const progressContainer = document.getElementById('progressContainer');
            progressContainer.appendChild(taskDiv);

            const updatedData = await getTasks();
            displayTasks(updatedData);
           
        }
    }
})

document.addEventListener('click', async function (event){
    const target = event.target;

    if(target.tagName === 'BUTTON' && target.textContent === 'Done >>'){
        const taskDiv = target.closest('.taskDiv');
        const taskKey = taskDiv.dataset.taskKey;

        if(taskKey){
            await taskDone(taskKey);

            const doneContainer = document.getElementById('doneContainer');
            doneContainer.appendChild(taskDiv);

            const updatedData = await getTasks();
            displayTasks(updatedData);
        }   
    }
})

document.addEventListener('click', async function (event){
    const target = event.target;

    if(target.tagName === 'BUTTON' && target.textContent === 'Remove X'){
        const taskDiv = target.closest('.taskDiv');
        const taskKey = taskDiv.dataset.taskKey;

        if(taskKey){
            await deleteTask(taskKey);
            taskDiv.remove();

            const updatedData = await getTasks();
            displayTasks(updatedData);
        }
    }
})

getTasks().then(displayTasks)
 