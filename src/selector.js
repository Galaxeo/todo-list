import moment from 'moment';
import card from './card.js';
import { createProject, addTask, removeTask } from './project.js';
const formEle = document.querySelector("div[val]");
const mainEle = document.querySelector(".main");
const noProj = document.querySelector("#p7None");
const submitBut = document.querySelector("button[class='submitBut']");
var projects = [createProject('p7None')];
const sidebarProjs = document.querySelector('.projects');
const sidebar = document.getElementById('mySidebar');

if (localStorage.getItem('projects') != null) {
  projects = JSON.parse(localStorage.getItem('projects'));
}

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
  if (projName == "" || projName == "None") {
    addTask(projects[0], task);
    return true;
  }
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].name == 'p7' + projName) {
      addTask(projects[i], task);
      return true; // true means found project
    } else {
      continue;
    }
  }
  const newProj = createProject('p7' + projName);
  addTask(newProj, task);
  projects.push(newProj);
  return false; // false means did not find project
}

submitBut.onclick = (event) => {
  // Blur background behind the form
  event.preventDefault;
  formEle.classList.toggle('hidden');
  document.querySelector(".main").classList.toggle('blur');
  // Read the form values into variables
  const taskEntry = formEle.querySelector("input[id='Task']").value;
  var dueEntry = formEle.querySelector("input[id='Due']").value;
  dueEntry = moment(dueEntry).format('MMMM Do YYYY, h:mm:ss a');
  const projectEntry = formEle.querySelector("input[id='Project']").value;
  const detailEntry = formEle.querySelector("input[id='Details']").value;
  const existingProj = mainEle.querySelectorAll("div[class='cardProject']");
  // Create the task card element, array of [class, element]
  const cardEle = card(taskEntry, dueEntry, detailEntry);

  // Project Logic

  // If the project is not found, create a new div for the checkProjects and new tab in sidebar
  if (!checkProjects(projects, projectEntry, cardEle[0])) {
    const newProjDiv = document.createElement('div');
    const newProjLink = document.createElement('a');
    newProjLink.innerHTML = projectEntry;
    newProjDiv.setAttribute('class', 'cardProject');
    newProjLink.setAttribute('class', 'sideLink');
    sidebarProjs.appendChild(newProjLink);
    mainEle.appendChild(newProjDiv);
    newProjDiv.id = 'p7' + projectEntry;
    newProjDiv.appendChild(cardEle[1]);
  } else {
    // If the project is found, find that project and append the card element to it.
    if (projectEntry == "") {
      noProj.appendChild(cardEle[1]);
    }
    for (var i = 0; i < existingProj.length; i++) {
      if (existingProj[i].id == 'p7' + projectEntry) {
        existingProj[i].appendChild(cardEle[1]);
        break;
      }
    }
  }
  let projectsStr = JSON.stringify(projects);
  localStorage.setItem("projects", projectsStr);
}
// Sidebar tab Logic
const sidebarTab = sidebar.addEventListener("click", (e) => {
  // Have to redefine existingProj to have updated list
  const existingProj = mainEle.querySelectorAll("div.cardProject");
  const target = e.target.closest(".sideLink");
  if (target) {
    for (var i = 0; i < existingProj.length; i++) {
      existingProj[i].classList.add("hidden");
      if (existingProj[i].id == 'p7' + target.innerHTML || target.innerHTML == 'All') {
        const proj = existingProj[i];
        setTimeout(() => {
          proj.classList.remove("hidden")
        }, 150);
      }
    };
  }
});
// Remove cards logic 

const cardListener = mainEle.addEventListener("click", (e) => {
  const target = e.target.closest('.cardCont');
  if (target) {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].name == target.parentNode.id) {
        removeTask(projects[i], target.id);
      }
    }
    target.classList.add('deleting');
    setTimeout(() => {
      target.remove();
    }, 150)
  }
  let projectsStr = JSON.stringify(projects);
  localStorage.setItem("projects", projectsStr);
});
