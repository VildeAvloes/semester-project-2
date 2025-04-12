import { onAuth } from '../ui/events/onAuth.js';

export function loginPage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  container.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="mb-4 text-center">Log in</h1>
        <form name="auth" class="card p-4 shadow-sm rounded">
        
          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
          </div>

          <div class="d-flex flex-column align-items-center ">
          <button type="submit" data-auth="login" class="btn btn-primary">Log in</button>
            <p class="mt-3">Do you not have an account yet?</p>
              <button type="button" data-auth="register" class="btn btn-outline-secondary">Registrer</button>
          </div>
        </form>
    </div>
  `;

  const registerButton = container.querySelector('[data-auth="register"]');
  registerButton.addEventListener('click', () => {
    location.hash = '#register';
  });

  const form = container.querySelector('form[name="auth"]');
  form.addEventListener('submit', onAuth);

  return container;
}
