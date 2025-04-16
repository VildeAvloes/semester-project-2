import { renderWrapper } from '../components/common/wrapper.js';
import { renderInput } from '../components/forms/inputs.js';
import { renderButtons } from '../components/forms/buttons.js';
import { renderForm } from '../components/forms/form.js';
import { onAuth } from '../utils/events/onAuth.js';
import { validateRegisterForm } from '../utils/forms/validateForm.js';
import { isLoggedIn } from '../api/auth/state.js';

export function registerPage() {
  if (isLoggedIn()) {
    location.hash = '#profile';
    return;
  }

  const { container, col } = renderWrapper('Register', 'col-md-6');
  const form = renderForm();

  const nameGroup = renderInput({
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
  });

  const emailGroup = renderInput({
    id: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'E-mail',
  });

  const passwordGroup = renderInput({
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
  });

  const buttonGroup = renderButtons('register');

  form.append(nameGroup, emailGroup, passwordGroup, buttonGroup);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = validateRegisterForm([
      { group: nameGroup, field: 'name' },
      { group: emailGroup, field: 'email' },
      { group: passwordGroup, field: 'password' },
    ]);

    if (isValid) {
      onAuth(event);
    }
  });

  col.append(form);

  return container;
}
