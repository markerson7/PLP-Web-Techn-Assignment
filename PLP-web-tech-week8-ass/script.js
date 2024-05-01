const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

addTaskBtn.addEventListener("click", function() {
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText) {
    // Create a new list item for the task
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    // Create a span element to hold the task text
    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = newTaskText;

    // Create a button to remove the task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", function() {
      todoList.removeChild(listItem);
    });

    // Add the task text and remove button to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(removeBtn);

    // Add the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    newTaskInput.value = "";
  }
});
