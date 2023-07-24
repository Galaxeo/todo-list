import card from './card.js';
import createProject from './project.js';
const formEle = document.querySelector("div[val]");
const mainEle = document.querySelector(".main");
const noProj = document.querySelector("#none");
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

function checkProjects(arr, entry, task) {
  for (const i in arr) {
    if (projects[i].name == 'p7' + entry) {
      projects[i].addTask(task);
      return true; // true means found project
    } else {
      continue;
    }
  }
  const newProj = createProject('p7' + entry);
  newProj.addTask(task);
  projects.push(newProj);
  return false; // false means did not find project
}

submitBut.onclick = (event) => {
  event.preventDefault;
  formEle.classList.toggle('hidden');
  document.querySelector(".main").classList.toggle('blur');

  const taskEntry = formEle.querySelector("input[id='Task']").value;
  const dueEntry = formEle.querySelector("input[id='Due']").value;
  const projectEntry = formEle.querySelector("input[id='Project']").value;
  const detailEntry = formEle.querySelector("input[id='Details']").value;

  const cardEle = card(taskEntry, dueEntry, projectEntry, detailEntry);

  // Project Logic
  if (!checkProjects(projects, projectEntry, taskEntry)) {
    const newProjDiv = document.createElement('div');
    newProjDiv.setAttribute('class', 'cardProject');
    mainEle.appendChild(newProjDiv);
    newProjDiv.id = 'p7' + projectEntry;
    newProjDiv.appendChild(cardEle);
  } else {
    const existingProj = mainEle.querySelectorAll("div[class='cardProject']");
    console.log("existing");
    for (const i in existingProj) {
      console.log(existingProj[i]);
      if (existingProj[i].id == 'p7' + projectEntry) {
        console.log('here');
        existingProj[i].appendChild(cardEle);
        break;
      }
    }
  }
}
