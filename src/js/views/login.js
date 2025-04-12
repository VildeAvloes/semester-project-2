export function loginView() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  container.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="mb-4 text-center">Registrer deg</h1>
        <form name="auth" class="card p-4 shadow-sm rounded">
          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
          </div>

          <div class="d-flex justify-content-between">
            <button type="submit" data-auth="register" class="btn btn-primary">Login</button>
            <button type="submit" data-auth="login" class="btn btn-outline-secondary">Register</button>
          </div>
        </form>
      </div>
    </div>
  `;

  return container;
}
