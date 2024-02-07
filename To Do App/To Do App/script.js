const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // For delete purpose
    li.appendChild(span);
  }
  inputBox.value = ""; // To clear the input box
  saveData();
}

// Click function
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("taskList", listContainer.innerHTML);
}

function showTasks() {
  if (localStorage.getItem("taskList")) {
    listContainer.innerHTML = localStorage.getItem("taskList");
  }
}

showTasks();
