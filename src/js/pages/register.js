import { isLoggedIn } from '../api/auth/index.js';
import { renderWrapper } from '../components/common/index.js';
import {
  renderButtons,
  renderForm,
  renderInput,
} from '../components/forms/index.js';
import { onAuth } from '../utils/events/onAuth.js';
import { validateRegisterForm } from '../utils/forms/index.js';

export function registerPage() {
  if (isLoggedIn()) {
    location.hash = '#profile';
    return;
  }

  const { container, col } = renderWrapper('Register', 'col-md-6');
  const form = renderForm();

  const name = renderInput({
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
  });

  const email = renderInput({
    id: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'E-mail',
  });

  const password = renderInput({
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
  });

  const buttons = renderButtons('register');

  form.append(name, email, password, buttons);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = validateRegisterForm([
      { group: name, field: 'name' },
      { group: email, field: 'email' },
      { group: password, field: 'password' },
    ]);

    if (isValid) {
      onAuth(event);
    }
  });

  col.append(form);

  return container;
}
