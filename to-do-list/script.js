// function AddTask(){
//     let task = document.getElementById("display");
//     const tasktext = task.value.trim();
//     if(tasktext=='') return ;
//     const li = document.createElement("li");
//     li.innerHTML= `<span onclick="togglecomplete(this)">${tasktext}</span>
//      <button class="delete-btn" onclick="deletetask(this)">Delete task </button>`
//      document.getElementById("tasklist").appendChild(li);
//      task.value='';
// }
// function deletetask(button){
//   const li = button.parentElement;
//   li.remove();
// }
// function togglecomplete(spanElement){
//     const li = spanElement.parentElement;
//      li.classList.toggle('completed');
//      spanElement.style.textDecoration = "line-through";
//   spanElement.style.color = "gray";
     
// }
// function markDone(spanElement) {
//   spanElement.style.textDecoration = "line-through";
//   spanElement.style.color = "gray";
// }
// 1. Load tasks from localStorage on page load
const feedbackMessages = [
  { min: 0, max: 0, messages: [" Parh laya karr , phone chla ke ya reelan dekh k placement ni laggni"] },
  { min: 1, max: 2, messages: ["Din ch 4 vaar tu bahr da kha lena te task tere tou 2 v chjj nal ni hunde"] },
  { min: 3, max: 5, messages: ["Chal shukar a thodi ta sharam ayi , karla poora ajj da v  task"] },
  { min: 6, max: 100, messages: [" Khich ke kamm 🚀🚀🚀"] }
];
function getMotivationalMessage(completedCount) {
  for (let group of feedbackMessages) {
    if (completedCount >= group.min && completedCount <= group.max) {
      const messages = group.messages;
      return messages[Math.floor(Math.random() * messages.length)];
    }
  }
  return "Keep going, you're doing great!";
}

window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => renderTask(task.text, task.completed));
};

// 2. Add new task
function AddTask() {
  let taskInput = document.getElementById("display");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  renderTask(taskText, false); // Add task to UI
  saveTasks();                 // Save tasks to localStorage
  taskInput.value = "";
}

// 3. Render task (used when adding and loading)
function renderTask(text, completed) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="togglecomplete(this)">${text}</span>
    <button class="delete-btn" onclick="deletetask(this)">Delete task</button>
  `;

  if (completed) {
    li.classList.add("completed");
    li.querySelector("span").style.textDecoration = "line-through";
    li.querySelector("span").style.color = "gray";
  }

  document.getElementById("tasklist").appendChild(li);
}

// 4. Delete task
function deletetask(button) {
  const li = button.parentElement;
  li.remove();
  saveTasks(); // Update storage after deletion
}

// 5. Toggle complete
function togglecomplete(spanElement) {
  const li = spanElement.parentElement;
  li.classList.toggle("completed");

  if (li.classList.contains("completed")) {
    spanElement.style.textDecoration = "line-through";
    spanElement.style.color = "gray";
  } else {
    spanElement.style.textDecoration = "none";
    spanElement.style.color = "black";
  }

  saveTasks(); // Update task completion state
}

// 6. Save all tasks to localStorage
function saveTasks() {
  const listItems = document.querySelectorAll("#tasklist li");
  const tasks = [];

  let completedCount = 0;

  listItems.forEach(li => {
    const text = li.querySelector("span").textContent;
    const completed = li.classList.contains("completed");
    if (completed) completedCount++;
    tasks.push({ text, completed });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Show feedback
  const feedback = getMotivationalMessage(completedCount);
  document.getElementById("feedback").innerText = `Hey Harman! ${feedback}`;
}
