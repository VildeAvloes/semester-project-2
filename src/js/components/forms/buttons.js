export function renderButtons(view = 'register') {
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('d-flex', 'flex-column', 'align-items-center');

  if (view === 'register') {
    const registerButton = document.createElement('button');
    registerButton.setAttribute('type', 'submit');
    registerButton.setAttribute('data-auth', 'register');
    registerButton.classList.add('btn', 'btn-primary', 'min-w-150');
    registerButton.textContent = 'Register';

    const registerText = document.createElement('p');
    registerText.classList.add('mt-3');
    registerText.textContent = 'Do you already have an account?';

    const loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'button');
    loginButton.setAttribute('data-auth', 'login');
    loginButton.classList.add('btn', 'btn-outline-secondary', 'min-w-150');
    loginButton.textContent = 'Log in';

    loginButton.addEventListener('click', () => {
      location.hash = '#login';
    });

    buttonWrapper.append(registerButton, registerText, loginButton);
  }

  if (view === 'login') {
    const loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'submit');
    loginButton.setAttribute('data-auth', 'login');
    loginButton.classList.add('btn', 'btn-primary', 'min-w-150');
    loginButton.textContent = 'Log in';

    const registerText = document.createElement('p');
    registerText.classList.add('mt-3');
    registerText.textContent = "Don't have an account?";

    const registerButton = document.createElement('button');
    registerButton.setAttribute('type', 'button');
    registerButton.setAttribute('data-auth', 'register');
    registerButton.classList.add('btn', 'btn-outline-secondary', 'min-w-150');
    registerButton.textContent = 'Register';

    registerButton.addEventListener('click', () => {
      location.hash = '#register';
    });

    buttonWrapper.append(loginButton, registerText, registerButton);
  }

  return buttonWrapper;
}
