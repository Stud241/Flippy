const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Prevent adding empty tasks

    // Create task item elements
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("task-text");
    taskTextElement.textContent = taskText;

    // Add complete functionality
    taskTextElement.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    // Append elements to task item
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    // Append task item to task list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = "";
}

// Event listener for adding task on button click
addTaskButton.addEventListener("click", addTask);

// Optional: Add task on pressing "Enter" key
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});
