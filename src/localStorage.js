import card from './card';
import moment from 'moment';
import createProject from './project.js';

const mainEle = document.querySelector(".main");
const sidebarProjs = document.querySelector('.projects');

function createFromStorage() {
  if (localStorage.getItem('projects') != null) {
    // Create project divs, then cards within those divs, and sidebar tabs
    const projects = JSON.parse(localStorage.getItem('projects'));
    for (var i = 0; i < projects.length; i++) {
      const currentProj = projects[i];
      if (currentProj.name == 'none') {

      } else {
        // create project div container 
        const newProjDiv = document.createElement('div');
        newProjDiv.setAttribute('class', 'cardProject');
        mainEle.appendChild(newProjDiv);
        newProjDiv.id = currentProj.name;
        console.log("here");
        // create project bar label
        const newProjLink = document.createElement('a');
        newProjLink.innerHTML = currentProj.name.slice(2);
        newProjLink.setAttribute('class', 'sideLink');
        sidebarProjs.appendChild(newProjLink);
        //newProjDiv.appendChild(cardEle[1]); have to create elements and append
        //create cards 

      }
    }
  } else {
    // pass
  }
}
createFromStorage();
