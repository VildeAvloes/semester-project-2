export function renderInputGroup({ id, label, type, placeholder }) {
  const group = document.createElement('div');
  group.classList.add('mb-3');

  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', id);
  labelElement.classList.add('form-label');
  labelElement.textContent = label;

  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  input.classList.add('form-control');
  input.required = true;

  const messageContainer = document.createElement('div');
  messageContainer.id = `${id}-message`;
  messageContainer.classList.add('mt-2');

  group.append(labelElement, input, messageContainer);

  return group;
}
