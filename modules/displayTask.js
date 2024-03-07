
export default function displayTasks(data){
    const todoContainer = document.getElementById("todoContainer");
    const progressContainer = document.getElementById("progressContainer");
    const doneContainer = document.getElementById("doneContainer");

    todoContainer.innerHTML = '';
    progressContainer.innerHTML = '';
    doneContainer.innerHTML = '';

    for (const key in data){
        if(data.hasOwnProperty(key)){
            const task = data[key];
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv');
            taskDiv.dataset.taskKey = key;

            const h3El = document.createElement('h3');
            h3El.textContent = task.task;
            taskDiv.appendChild(h3El);

            if(task.status === 'to do'){
                const todoForm = document.createElement("form");
                const todoInput = document.createElement("input");
                const todoBtn = document.createElement("button");

                taskDiv.appendChild(todoForm);

                todoInput.type = 'text';
                todoInput.placeholder = 'Enter Name:';
                todoForm.appendChild(todoInput);

                todoBtn.type = 'button';
                todoBtn.textContent = 'Assign >>';
                todoForm.appendChild(todoBtn);

                todoContainer.appendChild(taskDiv);

                color(taskDiv, task.category);
            }
            else if(task.status === 'in progress'){
                const person =document.createElement('p');
                person.textContent = `- ${task.assigned}`;
                taskDiv.appendChild(person);

                const doneBtn = document.createElement('button');
                taskDiv.appendChild(doneBtn);
                doneBtn.type = 'button';
                doneBtn.textContent = 'Done >>';
                progressContainer.appendChild(taskDiv);

                color(taskDiv, task.category);
            }
            else if(task.status === 'done'){
                const person =document.createElement('p');
                person.textContent = `- ${task.assigned}`;
                taskDiv.appendChild(person);

                const removeBtn = document.createElement('button');
                taskDiv.appendChild(removeBtn);

                removeBtn.type = 'button';
                removeBtn.textContent = 'Remove X';
                doneContainer.appendChild(taskDiv);

                color(taskDiv, task.category);
            }
        }
    }
}

const categoryColors = {
    'dev frontend': '#C9E4DE',
    'dev backend': '#C6DEF1',
    'ux': '#F7D9C4'
};

function color(divElement, category){
    const color = categoryColors[category];
    if(color){
        divElement.style.backgroundColor = color;
    }
}

