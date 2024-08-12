document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Function to create a new task element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';

        // Event listener for delete button
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);

        return li;
    }

    // Event listener for add button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = '';
    });

    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
