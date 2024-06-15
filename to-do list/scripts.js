document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('new-task');

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        addTask();
    });
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    filterTasks(document.querySelector('.filter-todo').value); // Update the list to show tasks based on the current filter
}

function filterTasks(filter) {
    const tasks = document.querySelectorAll('#task-list li');
    tasks.forEach(task => {
        switch(filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                if (task.classList.contains('completed')) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
                break;
            case 'incomplete':
                if (task.classList.contains('completed')) {
                    task.style.display = 'none';
                } else {
                    task.style.display = 'flex';
                }
                break;
        }
    });
}
