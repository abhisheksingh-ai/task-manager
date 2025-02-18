//loadTask() will call displayTask()
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    // Accessing the DOM element using ID's
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;

    //if title is not in the input
    if (!title) {
        alert("Task title is required!");
        return;
    }

    //using the localStorage API
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    //here task is an object
    tasks.push({ title, description, dueDate, priority, completed: false });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";

    //calling displayTasks after adding the task
    displayTasks();
}

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = ""; // Clear previous tasks

    // task [{task1},{task2},......] looping on task array
    tasks.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        if (task.completed) taskDiv.classList.add("completed");

        taskDiv.innerHTML = `
            <div>
                <strong>${task.title}</strong> - ${task.description} 
                <br><small>Due: ${task.dueDate} | Priority: ${task.priority}</small>
            </div>
            <div>
                <button onclick="completeTask(${index})">✔</button>
                <button onclick="deleteTask(${index})">❌</button>
            </div>
        `;

        taskList.appendChild(taskDiv);
    });
}

function completeTask(index) {
    //getting task array from local storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed; //mark it false
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    //removing the task from the array using splice method 
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function loadTasks() {
    displayTasks();
}

function searchTasks() {
    let search = document.getElementById("search").value.toLowerCase();
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    //searching is tasks include search
    let filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search));
    
    document.getElementById("taskList").innerHTML = "";
    
    filteredTasks.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        if (task.completed) taskDiv.classList.add("completed");

        taskDiv.innerHTML = `
            <div>
                <strong>${task.title}</strong> - ${task.description} 
                <br><small>Due: ${task.dueDate} | Priority: ${task.priority}</small>
            </div>
            <div>
                <button onclick="completeTask(${index})">✔</button>
                <button onclick="deleteTask(${index})">❌</button>
            </div>
        `;

        document.getElementById("taskList").appendChild(taskDiv);
    });
}

function filterTasks() {
    let filter = document.getElementById("filter").value;
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    if (filter !== "all") {
        tasks = filter === "completed" ? tasks.filter(task => task.completed) : tasks.filter(task => task.priority === filter);
    }

    document.getElementById("taskList").innerHTML = "";
    tasks.forEach((task, index) => displayTasks());
}
