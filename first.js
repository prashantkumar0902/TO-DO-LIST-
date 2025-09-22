const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

 function addTask () {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function() {
    li.classList.toggle("completed");

  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.addEventListener("click", function (e) {
   e.stopPropagation();
   li.remove();
  });

  li.appendChild(delBtn);
  
  taskList.appendChild(li);

  taskInput.value = "";

 }

 taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
 });
 
