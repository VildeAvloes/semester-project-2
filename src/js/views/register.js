import { createAuthFormWrapper } from '../components/forms/authFormWrapper.js';
import { createInputGroup } from '../components/forms/inputGroup.js';
import { onAuth } from '../ui/events/onAuth.js';

export function registerPage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  const row = document.createElement('div');
  row.classList.add('row', 'justify-content-center');

  const col = document.createElement('div');
  col.classList.add('col-md-6');

  const heading = document.createElement('h1');
  heading.classList.add('mb-4', 'text-center', 'text-dark');
  heading.textContent = 'Register';

  const hr = document.createElement('hr');
  hr.classList.add('mb-4');

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

  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('d-flex', 'flex-column', 'align-items-center');

  const registerButton = document.createElement('button');
  registerButton.setAttribute('type', 'submit');
  registerButton.setAttribute('data-auth', 'register');
  registerButton.classList.add('btn', 'btn-primary');
  registerButton.textContent = 'Register';

  const registerText = document.createElement('p');
  registerText.classList.add('mt-3');
  registerText.textContent = 'Do you already have an account?';

  const loginButton = document.createElement('button');
  loginButton.setAttribute('type', 'button');
  loginButton.setAttribute('data-auth', 'login');
  loginButton.classList.add('btn', 'btn-outline-secondary');
  loginButton.textContent = 'Log in';

  buttonGroup.append(registerButton, registerText, loginButton);

  const form = createAuthFormWrapper([
    nameGroup,
    emailGroup,
    passwordGroup,
    buttonGroup,
  ]);
  form.addEventListener('submit', onAuth);

  loginButton.addEventListener('click', () => {
    location.hash = '#login';
  });

  col.append(heading, hr, form);
  row.append(col);
  container.append(row);

  return container;
}
