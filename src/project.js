class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  getTask() {
    return this.tasks;
  }
}

function createProject(name) {
  return new Project(name);
}
export default createProject;
