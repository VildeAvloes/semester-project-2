import { renderInputGroup } from '../components/forms/inputs.js';
import { renderButtonGroup } from '../components/forms/buttons.js';
import { renderForm } from '../components/forms/form.js';
import { onAuth } from '../ui/events/onAuth.js';
import { validateLoginForm } from '../ui/forms/validateForm.js';
import { renderMessage } from '../components/common/message.js';
import { renderWrapper } from '../components/common/wrapper.js';

export function loginPage() {
  const { container, col } = renderWrapper('Log In', 'col-md-6');
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

    const previousMessage = form.querySelector('.message-container');
    if (previousMessage) previousMessage.remove();

    const isValid = validateLoginForm([
      { group: emailGroup, field: 'email' },
      { group: passwordGroup, field: 'password' },
    ]);

    if (isValid) {
      onAuth(event).catch((error) => {
        const errorMessage = renderMessage(
          'error',
          'Invalid email or password'
        );
        errorMessage.classList.add('d-flex', 'justify-content-center');
        form.prepend(errorMessage);
        throw new Error('Invalid email or password', error);
      });
    }
  });

  col.append(form);

  return container;
}
