class Card {
  constructor(task, dueDate, details, project) {
    this.task = task;
    this.dueDate = dueDate;
    this.details = details;
    this.project = project;
  }
}
function createPart(ele, myClass) {
  const myEle = document.createElement(ele);
  myEle.classList.add(myClass);
  return myEle
}
function card(task, due, detail) {
  // const cardEle = new Card(task, due, detail, project);
  const cardEle = createPart('div', 'cardCont');
  const taskEle = createPart('h1', 'cardTask');
  taskEle.textContent = task;
  const dueEle = createPart('p', 'cardDue');
  dueEle.textContent = due;
  const detailEle = createPart('p', 'cardDetail');
  detailEle.textContent = detail;
  cardEle.append(taskEle, dueEle, detailEle);
  return cardEle;
}
export default card;
