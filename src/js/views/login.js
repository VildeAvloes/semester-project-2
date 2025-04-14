import { renderWrapper } from '../components/forms/wrapper.js';
import { renderInputGroup } from '../components/forms/inputs.js';
import { renderButtonGroup } from '../components/forms/buttons.js';
import { renderForm } from '../components/forms/form.js';
import { onAuth } from '../ui/events/onAuth.js';
import { validateLoginForm } from '../ui/forms/validateForm.js';

export function loginPage() {
  const { container, col } = renderWrapper('Log In');
  const form = renderForm();

  const emailGroup = renderInputGroup({
    id: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'E-mail',
  });
  const passwordGroup = renderInputGroup({
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
  });

  const buttonGroup = renderButtonGroup('login');

  form.append(emailGroup, passwordGroup, buttonGroup);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = validateLoginForm([
      { group: emailGroup },
      { group: passwordGroup },
    ]);

    if (isValid) {
      onAuth(event);
    }
  });

  col.append(form);

  return container;
}
