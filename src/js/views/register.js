import { createFormLayout } from '../components/forms/layout.js';
import { createInputGroup } from '../components/forms/inputs.js';
import { createButtonGroup } from '../components/forms/buttons.js';
import { formWrapper } from '../components/forms/wrapper.js';
import { onAuth } from '../ui/events/onAuth.js';
import { validateRegisterForm } from '../ui/forms/validateForm.js';

export function registerPage() {
  const { container, col } = createFormLayout('Register');

  const nameGroup = createInputGroup({
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
  });

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

  const buttonGroup = createButtonGroup('register');

  const form = formWrapper([nameGroup, emailGroup, passwordGroup, buttonGroup]);

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
