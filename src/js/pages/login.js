import { renderMessage, renderWrapper } from '../components/common/index.js';
import {
  renderButtons,
  renderForm,
  renderInput,
} from '../components/forms/index.js';
import { onAuth } from '../utils/events/onAuth.js';
import { validateLoginForm } from '../utils/forms/index.js';

export function loginPage() {
  document.title = 'Bid Society | Log In';

  const { container, col } = renderWrapper('Log In', 'col-md-6');
  const form = renderForm();

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

  const buttonGroup = renderButtons('login');

  form.append(email, password, buttonGroup);

  const messageWrapper = document.createElement('div');
  messageWrapper.classList.add('w-100', 'mt-2');
  form.append(messageWrapper);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    messageWrapper.innerHTML = '';

    const isValid = validateLoginForm([
      { group: email, field: 'email' },
      { group: password, field: 'password' },
    ]);

    if (isValid) {
      onAuth(event).catch((error) => {
        const errorMessage = renderMessage(
          'error',
          'Invalid email or password'
        );
        messageWrapper.append(errorMessage);
        console.error('Invalid email or password', error);
      });
    } else {
      const errorMessage = renderMessage(
        'error',
        'Please fill out all fields correctly'
      );
      messageWrapper.append(errorMessage);
    }
  });

  col.append(form);

  return container;
}
