    function addTask() {
        const taskText = document.getElementById('task-input').value;
        if (taskText) {
            const taskList = document.getElementById('task-list');
            const newTask = document.createElement('p');
            newTask.innerHTML = `${taskText} <button>Edit</button> <button class="red">Delete</button>`;
            
            taskList.appendChild(newTask);

            document.getElementById('task-input').value = '';

            addTaskListeners(newTask);
        }
    }

    function addTaskListeners(task) {
        task.querySelector('button').addEventListener('click', function() {
            const newTaskText = prompt('Edit task:', task.firstChild.textContent.trim());
            if (newTaskText !== null) {
                task.firstChild.textContent = newTaskText + ' ';
            }
        });

        task.querySelector('.red').addEventListener('click', function() {
            task.remove();
        });
    }

    document.getElementById('end-task-btn').addEventListener('click', function() {
        addTask();
    });

    document.querySelectorAll('#task-list p').forEach(addTaskListeners);

document.addEventListener('DOMContentLoaded', function() {;
});
