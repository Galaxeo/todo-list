import formHelper from './formHelper.js';
function createForm() {
  const formCont = document.createElement('div');
  formCont.classList.add('formCont');
  formCont.classList.add('hidden');

  const form = document.createElement('form');
  form.classList.add('cardForm');
  const taskRow = formHelper('Task');
  form.appendChild(taskRow);

  const dueRow = formHelper('Due', 'datetime-local');
  form.appendChild(dueRow);

  const detailRow = formHelper('Details');
  form.appendChild(detailRow);

  const projectRow = formHelper('Project');
  form.appendChild(projectRow);

  const submitBut = document.createElement('button');
  submitBut.classList.add('submitBut');
  submitBut.innerHTML = "Create task!";
  submitBut.type = 'button';
  form.appendChild(submitBut);

  formCont.appendChild(form);
  return formCont;
}
export default createForm;
