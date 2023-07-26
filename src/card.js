class Card {
  constructor(task, dueDate, details) {
    this.task = task;
    this.dueDate = dueDate;
    this.details = details;
  }
  getVals() {
    return [this.task, this.dueDate, this.details];
  }
}
function createPart(ele, myClass) {
  const myEle = document.createElement(ele);
  myEle.classList.add(myClass);
  return myEle
}
function card(task, due, detail) {
  // const cardEle = new Card(task, due, detail, project);
  const cardClass = new Card(task, due, detail);
  const cardEle = createPart('div', 'cardCont');
  const taskEle = createPart('h1', 'cardTask');
  taskEle.textContent = task;
  const dueEle = createPart('p', 'cardDue');
  dueEle.textContent = due;
  const detailEle = createPart('p', 'cardDetail');
  detailEle.textContent = detail;
  cardEle.append(taskEle, dueEle, detailEle);
  const cardID = task.replace(/\s/g, "");
  cardEle.id = cardID;
  return [cardClass, cardEle];
}
export default card;
