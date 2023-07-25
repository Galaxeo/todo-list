import './style.css';
import createForm from './form.js';

const formEle = createForm();
const mainEle = document.querySelector(".main");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

// encyrpt word effect, credit to hyperplexed
document.querySelector(".headerText").onclick = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
};

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};
//
const openbtn = document.querySelector(".openbtn");
const sidebarBtn = document.getElementById("sidebarBtn");
sidebarBtn.addEventListener("click", () => {
  if (sidebarBtn.classList.contains('closebtn')) {
    closeNav();
  } else {
    openNav();
  }
  sidebarBtn.classList.toggle('closebtn');
});

const closebtn = document.querySelector(".closebtn");
closebtn.addEventListener("click", closeNav);


document.body.appendChild(formEle);

