import { createFormLayout } from '../components/forms/layout.js';
import { createInputGroup } from '../components/forms/inputs.js';
import { createButtonGroup } from '../components/forms/buttons.js';
import { formWrapper } from '../components/forms/wrapper.js';
import { onAuth } from '../ui/events/onAuth.js';

import { validateLoginForm } from '../ui/forms/validateForm.js';

export function loginPage() {
  const { container, col } = createFormLayout('Log In');

  const emailGroup = createInputGroup({
    id: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'E-mail',
  });
  const passwordGroup = createInputGroup({
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
  });

  const buttonGroup = createButtonGroup('login');

  const form = formWrapper([emailGroup, passwordGroup, buttonGroup]);

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
