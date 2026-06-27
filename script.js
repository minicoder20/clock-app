// Grab references to DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to handle adding a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty items
    if (taskText === "") {
        alert("Please write something to do!");
        return;
    }

    // 1. Create the <li> element for the task
    const li = document.createElement('li');
    li.innerText = taskText;

    // 2. Create the Delete Button inside the <li>
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    // 3. Click event to toggle "completed" styling
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // 4. Click event to delete the task entirely
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents triggering the 'completed' toggle on parent li
        li.remove();
    });

    // 5. Append the newly created task to our list
    taskList.appendChild(li);

    // 6. Clear input box for the next entry
    taskInput.value = "";
}

// Trigger addTask when clicking the button
addBtn.addEventListener('click', addTask);

// Trigger addTask when pressing the 'Enter' key inside the input box
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});