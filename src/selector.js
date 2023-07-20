import card from './card.js';
const formEle = document.querySelector("div[val]");
const mainEle = document.querySelector(".main");
const submitBut = document.querySelector("button[class='submitBut']");
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

submitBut.onclick = (event) => {
  event.preventDefault;
  formEle.classList.toggle('hidden');
  document.querySelector(".main").classList.toggle('blur');
  const taskEntry = formEle.querySelector("input[id='Task']").value;
  const dueEntry = formEle.querySelector("input[id='Due']").value;
  const detailEntry = formEle.querySelector("input[id='Details']").value;
  const projectEntry = formEle.querySelector("input[id='Project']").value;
  console.log(card(taskEntry, dueEntry, detailEntry, projectEntry));
}
