import card from './card.js';
import createProject from './project.js';
const formEle = document.querySelector("div[val]");
const mainEle = document.querySelector(".main");
const noProj = document.querySelector("#p7All");
const submitBut = document.querySelector("button[class='submitBut']");
const projects = [createProject('none')];

document.querySelector(".createTask").onclick = (event) => {
  formEle.classList.toggle('hidden');
  document.querySelector(".main").classList.toggle('blur');
  event.stopPropagation();
}
document.querySelector(".main").onclick = () => {
  if (mainEle.classList.contains("blur")) {
    formEle.classList.toggle('hidden');
    document.querySelector(".main").classList.toggle('blur');
  } else {
    // pass
  }
};

function checkProjects(arr, projName, task) {
  if (projName == "") {
    return true;
  }
  for (const i in arr) {
    if (projects[i].name == 'p7' + projName) {
      projects[i].addTask(task);
      return true; // true means found project
    } else {
      continue;
    }
  }
  const newProj = createProject('p7' + projName);
  newProj.addTask(task);
  projects.push(newProj);
  return false; // false means did not find project
}

const sidebarProjs = document.querySelector('.projects');

submitBut.onclick = (event) => {
  // Blur background behind the form
  event.preventDefault;
  formEle.classList.toggle('hidden');
  document.querySelector(".main").classList.toggle('blur');
  // Read the form values into variables
  const taskEntry = formEle.querySelector("input[id='Task']").value;
  const dueEntry = formEle.querySelector("input[id='Due']").value;
  const projectEntry = formEle.querySelector("input[id='Project']").value;
  const detailEntry = formEle.querySelector("input[id='Details']").value;
  const existingProj = mainEle.querySelectorAll("div[class='cardProject']");
  // Create the task card element
  const cardEle = card(taskEntry, dueEntry, detailEntry);

  // Project Logic

  // If the project is not found, create a new div for the checkProjects and new tab in sidebar
  if (!checkProjects(projects, projectEntry, taskEntry)) {
    const newProjDiv = document.createElement('div');
    const newProjLink = document.createElement('a');
    newProjLink.innerHTML = projectEntry;
    newProjDiv.setAttribute('class', 'cardProject');
    newProjLink.setAttribute('class', 'sideLink');
    sidebarProjs.appendChild(newProjLink);
    mainEle.appendChild(newProjDiv);
    newProjDiv.id = 'p7' + projectEntry;
    newProjDiv.appendChild(cardEle);
  } else {
    // If the project is found, find that project and append the card element to it.
    if (projectEntry == "") {
      noProj.appendChild(cardEle);
    }
    for (var i = 0; i < existingProj.length; i++) {
      if (existingProj[i].id == 'p7' + projectEntry) {
        existingProj[i].appendChild(cardEle);
        break;
      }
    }
  }
}
// Sidebar tab Logic
const sidebarTab = document.getElementById('mySidebar').addEventListener("click", (e) => {
  // Have to redefine existingProj to have updated list
  const existingProj = mainEle.querySelectorAll("div.cardProject");
  const target = e.target.closest(".sideLink");
  if (target) {
    console.log(existingProj);
    for (var i = 0; i < existingProj.length; i++) {
      existingProj[i].classList.add("hidden");
      if (existingProj[i].id == 'p7' + target.innerHTML || target.innerHTML == 'All') {
        existingProj[i].classList.remove("hidden");
      }
    };
  }
});
