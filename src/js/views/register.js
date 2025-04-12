export function registerPage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  container.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="mb-4 text-center">Register</h1>
        <form name="auth" class="card p-4 shadow-sm rounded">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Name" required />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
          </div>

          <div class="d-flex flex-column align-items-center ">
            <button type="submit" data-auth="register" class="btn btn-primary">Registrer</button>
            <p class="mt-3">Do you already have an account?</p>
            <button type="button" data-auth="login" class="btn btn-outline-secondary">Log in</button>
          </div>
        </form>
      </div>
    </div>
  `;

  const loginButton = container.querySelector('[data-auth="login"]');
  loginButton.addEventListener('click', () => {
    location.hash = '#profile';
  });

  return container;
}
