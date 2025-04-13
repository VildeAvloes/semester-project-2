import { validateInput } from './inputValidation.js';

export function validateRegisterForm(fields = []) {
  let valid = true;

  fields.forEach(({ group, field }) => {
    const value = group.querySelector('input')?.value || '';
    valid &= validateInput(group, value, field);
  });

  return Boolean(valid);
}

export function validateLoginForm(fields = []) {
  let valid = true;

  fields.forEach(({ group }) => {
    const input = group.querySelector('input');
    const errorDiv = group.querySelector('.invalid-feedback');

    if (!input.value.trim()) {
      input.classList.add('is-invalid');
      errorDiv.textContent = 'This field is required.';
      errorDiv.style.visibility = 'visible';
      valid = false;
    } else {
      input.classList.remove('is-invalid');
      errorDiv.style.visibility = 'hidden';
    }
  });

  return valid;
}
