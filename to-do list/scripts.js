document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('new-task');

    // Event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        addTask(); // Call addTask function
    });
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim(); // Get task input value and trim whitespace
    
    if (taskText === '') return; // If input is empty, do nothing

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li'); // Create new list item element
    taskItem.textContent = taskText; // Set the text content of the list item

    // Toggle 'completed' class on click
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button'); // Create delete button element
    deleteButton.textContent = 'X'; // Set button text content
    deleteButton.classList.add('delete-btn'); // Add 'delete-btn' class to button
    
    // Event listener for delete button click
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem); // Remove task item from task list
    });

    taskItem.appendChild(deleteButton); // Append delete button to task item
    taskList.appendChild(taskItem); // Append task item to task list

    taskInput.value = ''; // Clear input field
    filterTasks(document.querySelector('.filter-todo').value); // Update the list based on current filter
}

// Function to filter tasks based on completion status
function filterTasks(filter) {
    const tasks = document.querySelectorAll('#task-list li'); // Select all task list items
    tasks.forEach(task => {
        switch(filter) {
            case 'all':
                task.style.display = 'flex'; // Show all tasks
                break;
            case 'completed':
                if (task.classList.contains('completed')) {
                    task.style.display = 'flex'; // Show completed tasks
                } else {
                    task.style.display = 'none'; // Hide incomplete tasks
                }
                break;
            case 'incomplete':
                if (task.classList.contains('completed')) {
                    task.style.display = 'none'; // Hide completed tasks
                } else {
                    task.style.display = 'flex'; // Show incomplete tasks
                }
                break;
        }
    });
}
