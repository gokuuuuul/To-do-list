//script.js
window.onload = function() {
    //get ref to elem
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    //to add a new task when the button is clicked
    addButton.onclick = function() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a something!");
            return;
        }

        //create a new item
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;
        li.appendChild(span);

        //delete button
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(delBtn);

        //adding to list
        taskList.appendChild(li);

        //clear inputs
        taskInput.value = "";
        taskInput.focus();
    };

    //pressing enter to add the task
    taskInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
};
//the end!!!