function formHelper(name, type = 'text', val) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('gridRow');

  const label = document.createElement('label');
  const input = document.createElement('input');
  label.for = name;
  label.innerHTML = name;
  input.id = name;
  input.name = name;
  input.placeholder = name;
  if (type != 'text') {
    input.onfocus = () => {
      input.type = type;
    }
    input.onblur = () => {
      input.type = 'text';
    }
  }

  gridRow.appendChild(input);
  gridRow.appendChild(label);

  return gridRow;
}
export default formHelper;
