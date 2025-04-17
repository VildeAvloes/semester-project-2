import { renderMessage } from '../../components/common/index.js';
import { validateInput } from './index.js';

export function validateRegisterForm(fields = []) {
  let isValid = true;

  fields.forEach(({ group, field }) => {
    const input = group.querySelector('input');
    const value = input?.value?.trim() || '';

    const fieldIsValid = validateInput(group, value, field);
    if (!fieldIsValid) {
      isValid = false;
    }
  });

  return isValid;
}

export function validateLoginForm(fields = []) {
  let isValid = true;

  fields.forEach(({ group, field }) => {
    const input = group.querySelector('input');
    const value = input?.value?.trim() || '';
    const messageContainer = group.querySelector(`#${field}-message`);

    messageContainer.innerHTML = '';

    if (!value) {
      input.classList.add('is-invalid');
      messageContainer.append(
        renderMessage('error', 'This field is required.')
      );
      isValid = false;
    } else {
      messageContainer.innerHTML = '';
      input.classList.remove('is-invalid');
    }
  });

  return isValid;
}
