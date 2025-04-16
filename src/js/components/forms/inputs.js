export function renderInput({ id, label, type, placeholder }) {
  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('mb-3');

  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', id);
  labelElement.classList.add('form-label');
  labelElement.textContent = label;

  const input =
    type === 'textarea'
      ? document.createElement('textarea')
      : document.createElement('input');

  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  input.classList.add('form-control');
  input.required = true;

  if (type !== 'textarea') {
    input.type = type;
  }

  const messageContainer = document.createElement('div');
  messageContainer.id = `${id}-message`;
  messageContainer.classList.add('mt-2');

  inputWrapper.append(labelElement, input, messageContainer);

  return inputWrapper;
}
