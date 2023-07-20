class Card {
  constructor(task, dueDate, details, project) {
    this.task = task;
    this.dueDate = dueDate;
    this.details = details;
    this.project = project;
  }
}
function card(task, due, detail, project) {
  const cardEle = new Card(task, due, detail, project);
  return cardEle;
}
export default card;
