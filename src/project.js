class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  getTasks() {
    return this.tasks;
  }
  removeTask(taskID) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].task == taskID) {
        this.tasks.splice(i, 1);
      }
    }
  }
  getTask() {
    return this.tasks;
  }
  getName() {
    return this.name;
  }
}

function createProject(name) {
  return new Project(name);
}
export default createProject;
