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

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const previousMessage = form.querySelector('.message-container');
    if (previousMessage) previousMessage.remove();

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
        errorMessage.classList.add('d-flex', 'justify-content-center');
        form.prepend(errorMessage);
        throw new Error('Invalid email or password', error);
      });
    }
  });

  col.append(form);

  return container;
}
