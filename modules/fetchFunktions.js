
const baseUrl = 'https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks'
const header = {
    "Content-type": "application/json; charset=UTF-8"
}

async function getTasks(){
    const url = baseUrl + '.json';

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    return data;
}

async function addTask(newTask){
    const url = baseUrl + `.json`;

    const options = {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: header
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);

}

async function assignTask(key, assignedPerson){
    const url = baseUrl + `/${key}.json`;

    const options = {
        method: "PATCH",
        body: JSON.stringify({
            assigned: assignedPerson,
            status: "in progress"
        }),
        headers: header
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}

async function taskDone(key){
    const url = baseUrl + `/${key}.json`;

    const options = {
        method: "PATCH",
        body: JSON.stringify({ status: "done"}),
        headers: header
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}

async function deleteTask(key){
    const url = baseUrl + `/${key}.json`;

    const options = {
        method: "DELETE"
    };

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}

export {getTasks, addTask, assignTask, taskDone, deleteTask};
