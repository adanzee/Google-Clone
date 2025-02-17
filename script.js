document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.querySelector("#addtask button");
    const mainContainer = document.querySelector("main");
    
    const taskList = document.createElement("div");
    taskList.classList.add("mt-4", "space-y-2");
    mainContainer.appendChild(taskList);

    addTaskButton.addEventListener("click", function () {
        const taskText = prompt("Enter task:");
        if (taskText && taskText.trim() !== "") {
            addTask(taskText);
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("flex", "justify-between", "items-center", "p-2", "bg-gray-100", "rounded", "shadow-sm");
        
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);
        
        const taskActions = document.createElement("div");
        taskActions.classList.add("space-x-2");

        const editButton = document.createElement("button");
        editButton.textContent = "✏️";
        editButton.classList.add("text-blue-500", "hover:underline");
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit task:", taskContent.textContent);
            if (newText && newText.trim() !== "") {
                taskContent.textContent = newText;
            }
        });

        const completeButton = document.createElement("button");
        completeButton.textContent = "✅";
        completeButton.classList.add("text-green-500", "hover:underline");
        completeButton.addEventListener("click", function () {
            taskContent.classList.toggle("line-through");
            taskContent.classList.toggle("text-gray-400");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.classList.add("text-red-500", "hover:underline");
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });

        taskActions.appendChild(editButton);
        taskActions.appendChild(completeButton);
        taskActions.appendChild(deleteButton);
        
        taskItem.appendChild(taskActions);
        taskList.appendChild(taskItem);
    }
});
