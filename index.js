document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("taskInput")
    .addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        addTask();
      }
    });
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskInput.value}</span><button onclick="removeTask(this)">Remove</button><button onclick="saveTask(this)">Save</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function removeTask(button) {
  const taskList = document.getElementById("taskList");
  const li = button.parentNode;
  taskList.removeChild(li);
}

function saveTask(button) {
  const taskList = document.getElementById("taskList");
  const li = button.parentNode;
  const span = li.querySelector("span");
  const taskText = span.innerText;

  // You can implement saving logic here, for example, store tasks in local storage.
  // For simplicity, let's log the task text to the console.
  console.log("Task saved:", taskText);
}

function saveTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = [];

  // Extract task texts from the list
  taskList.querySelectorAll("li span").forEach((span) => {
    tasks.push(span.innerText);
  });

  // You can implement saving logic here, for example, store tasks in local storage.
  // For simplicity, let's log the tasks array to the console.
  console.log("All tasks saved:", tasks);
}
