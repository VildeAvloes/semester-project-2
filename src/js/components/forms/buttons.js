export function renderButtonGroup(view = 'register') {
  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('d-flex', 'flex-column', 'align-items-center');

  if (view === 'register') {
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

    loginButton.addEventListener('click', () => {
      location.hash = '#login';
    });

    buttonGroup.append(registerButton, registerText, loginButton);
  }

  if (view === 'login') {
    const loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'submit');
    loginButton.setAttribute('data-auth', 'login');
    loginButton.classList.add('btn', 'btn-primary');
    loginButton.textContent = 'Log in';

    const registerText = document.createElement('p');
    registerText.classList.add('mt-3');
    registerText.textContent = "Don't have an account?";

    const registerButton = document.createElement('button');
    registerButton.setAttribute('type', 'button');
    registerButton.setAttribute('data-auth', 'register');
    registerButton.classList.add('btn', 'btn-outline-secondary');
    registerButton.textContent = 'Register';

    registerButton.addEventListener('click', () => {
      location.hash = '#register';
    });

    buttonGroup.append(loginButton, registerText, registerButton);
  }

  return buttonGroup;
}
