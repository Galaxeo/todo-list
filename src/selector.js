import card from './card.js';
import createProject from './project.js';
const formEle = document.querySelector("div[val]");
const mainEle = document.querySelector(".main");
const noProj = document.querySelector("#p7All");
const submitBut = document.querySelector("button[class='submitBut']");
const projects = [createProject('none')];
const sidebarProjs = document.querySelector('.projects');
const sidebar = document.getElementById('mySidebar');

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
    target.classList.add('deleting');
    setTimeout(() => {
      target.remove();
    }, 150)
  }
});
