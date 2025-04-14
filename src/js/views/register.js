import { renderWrapper } from '../components/common/wrapper.js';
import { renderInputGroup } from '../components/forms/inputs.js';
import { renderButtonGroup } from '../components/forms/buttons.js';
import { renderForm } from '../components/forms/form.js';
import { onAuth } from '../ui/events/onAuth.js';
import { validateRegisterForm } from '../ui/forms/validateForm.js';

export function registerPage() {
  const { container, col } = renderWrapper('Register', 'col-md-6');
  const form = renderForm();

  const nameGroup = renderInputGroup({
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
  });

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

  const buttonGroup = renderButtonGroup('register');

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
