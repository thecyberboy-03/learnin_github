const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;
    span.contentEditable = false;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('btn', 'edit-btn');
    editBtn.onclick = () => editTask(index, span, editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn', 'delete-btn');
    deleteBtn.onclick = () => deleteTask(index);

    const btnContainer = document.createElement('div');
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    taskInput.value = '';
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index, span, button) {
  if (button.textContent === 'Edit') {
    span.contentEditable = true;
    span.focus();
    button.textContent = 'Save';
  } else {
    tasks[index] = span.textContent.trim();
    span.contentEditable = false;
    button.textContent = 'Edit';
  }
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

renderTasks();