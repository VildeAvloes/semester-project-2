import { renderMessage } from '../../components/common/message.js';
import { validateName, validateEmail, validatePassword } from './rules.js';

export function validateInput(inputGroup, value, field) {
  let errorMessage;

  switch (field) {
    case 'name':
      errorMessage = validateName(value);
      break;
    case 'email':
      errorMessage = validateEmail(value);
      break;
    case 'password':
      errorMessage = validatePassword(value);
      break;
    default:
      errorMessage = null;
  }

  const input = inputGroup.querySelector('input');
  const messageContainer = inputGroup.querySelector(`#${field}-message`);

  messageContainer.innerHTML = '';

  if (errorMessage) {
    input.classList.add('is-invalid');
    messageContainer.append(renderMessage('error', errorMessage));
    return false;
  }
  messageContainer.innerHTML = '';
  input.classList.remove('is-invalid');
  return true;
}
