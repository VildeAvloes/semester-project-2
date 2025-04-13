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

  const errorDiv = inputGroup.querySelector('.invalid-feedback');
  if (errorMessage) {
    inputGroup.querySelector('input').classList.add('is-invalid');
    errorDiv.textContent = errorMessage;
    errorDiv.style.visibility = 'visible';
  } else {
    inputGroup.querySelector('input').classList.remove('is-invalid');
    errorDiv.style.visibility = 'hidden';
  }

  return !errorMessage;
}
