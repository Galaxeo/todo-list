import card from './card';
import moment from 'moment';
import createProject from './project.js';

const mainEle = document.querySelector(".main");
const sidebarProjs = document.querySelector('.projects');

function createCards(tasks, divCont) {
  for (var i = 0; i < tasks.length; i++) {
    const task = tasks[i].task;
    const due = tasks[i].dueDate;
    const details = tasks[i].details;
    const cardEle = card(task, due, details);
    divCont.appendChild(cardEle[1]);
  }
}

function createFromStorage(arr) {
  if (localStorage.getItem('projects') != null) {
    // Create project divs, then cards within those divs, and sidebar tabs
    const projects = JSON.parse(localStorage.getItem('projects'));
    for (var i = 0; i < projects.length; i++) {
      const currentProj = projects[i];
      if (currentProj.name == 'p7None') {
        const noProj = document.getElementById('p7None');
        createCards(currentProj.tasks, noProj);
      } else {
        // create project div container 
        const newProjDiv = document.createElement('div');
        newProjDiv.setAttribute('class', 'cardProject');
        mainEle.appendChild(newProjDiv);
        newProjDiv.id = currentProj.name;
        // create project bar label
        const newProjLink = document.createElement('a');
        newProjLink.innerHTML = currentProj.name.slice(2);
        newProjLink.setAttribute('class', 'sideLink');
        sidebarProjs.appendChild(newProjLink);
        //newProjDiv.appendChild(cardEle[1]); have to create elements and append
        //create cards 
        createCards(currentProj.tasks, newProjDiv);
      }
    }
  } else {
    // pass
  }
}
createFromStorage();
