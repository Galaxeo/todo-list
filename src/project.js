class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getTask() {
    return this.tasks;
  }
  getName() {
    return this.name;
  }
}

export function createProject(name) {
  return new Project(name);
}
export function addTask(project, task) {
  project.tasks.push(task);
}
export function removeTask(project, taskID) {
  for (var i = 1; i < project.tasks.length; i++) {
    if (project.tasks[i].task.replace(/\s/g, "") == taskID) {
      project.tasks.splice(i, 1);
    }
  }
}
export default createProject;
