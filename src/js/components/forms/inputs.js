export function renderInputGroup({
  id,
  label,
  type,
  placeholder,
  errorMessage,
}) {
  const group = document.createElement('div');
  group.classList.add('mb-3');

  const labelEl = document.createElement('label');
  labelEl.setAttribute('for', id);
  labelEl.classList.add('form-label');
  labelEl.textContent = label;

  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('name', id);
  input.setAttribute('placeholder', placeholder);
  input.classList.add('form-control');
  input.required = true;

  const errorDiv = document.createElement('div');
  errorDiv.id = `${id}Error`;
  errorDiv.classList.add('invalid-feedback');
  errorDiv.textContent = errorMessage;

  errorDiv.style.minHeight = '1.25rem';
  errorDiv.style.visibility = 'hidden';
  errorDiv.style.display = 'block';

  group.append(labelEl, input, errorDiv);

  return group;
}
