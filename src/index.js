import './style.css';
import createForm from './form.js';

const formEle = createForm();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const main = document.querySelector('.main');

//credit to hyperplexed
document.querySelector("h1").onclick = event => {
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
document.querySelector(".createTask").onclick = () => {
  formEle.classList.toggle('hidden');
  document.querySelector(".main").classList.toggle('blur');
}
document.body.appendChild(formEle);
