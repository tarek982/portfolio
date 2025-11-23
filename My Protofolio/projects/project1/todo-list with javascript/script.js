const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <div class="actions">
        <button onclick="editTask(${index})">Edit</button>
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    saveTasks();
    renderTasks();
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    saveTasks();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

renderTasks();
