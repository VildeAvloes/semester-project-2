import { createAuthFormWrapper } from '../components/forms/authFormWrapper.js';
import { createInputGroup } from '../components/forms/inputGroup.js';
import { onAuth } from '../ui/events/onAuth.js';

export function loginPage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  const row = document.createElement('div');
  row.classList.add('row', 'justify-content-center');

  const col = document.createElement('div');
  col.classList.add('col-md-6');

  const heading = document.createElement('h1');
  heading.classList.add('mb-4', 'text-center', 'text-dark');
  heading.textContent = 'Log in';

  const hr = document.createElement('hr');
  hr.classList.add('mb-4');

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

  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('d-flex', 'flex-column', 'align-items-center');

  const loginButton = document.createElement('button');
  loginButton.setAttribute('type', 'submit');
  loginButton.setAttribute('data-auth', 'login');
  loginButton.classList.add('btn', 'btn-primary');
  loginButton.textContent = 'Log in';

  const loginText = document.createElement('p');
  loginText.classList.add('mt-3');
  loginText.textContent = 'Do you not have an account yet?';

  const registerButton = document.createElement('button');
  registerButton.setAttribute('type', 'button');
  registerButton.setAttribute('data-auth', 'register');
  registerButton.classList.add('btn', 'btn-outline-primary');
  registerButton.textContent = 'Register';

  buttonGroup.append(loginButton, loginText, registerButton);

  const form = createAuthFormWrapper([emailGroup, passwordGroup, buttonGroup]);
  form.addEventListener('submit', onAuth);

  col.append(heading, hr, form);
  row.append(col);
  container.append(row);

  registerButton.addEventListener('click', () => {
    location.hash = '#register';
  });

  return container;
}
