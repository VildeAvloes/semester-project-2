import { onAuth } from '../ui/events/onAuth.js';

export function registerPage() {
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');

  container.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="mb-4 text-center text-dark">Register</h1>
        <form name="auth" class="card p-4 shadow-sm rounded">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Name" required />
            <div id="nameError" class="invalid-feedback">Name must be at least 8 characters long.</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required />
            <div id="emailError" class="invalid-feedback">Email must end with @stud.noroff.no.</div>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
            <div id="passwordError" class="invalid-feedback">Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.</div>
          </div>

          <div class="d-flex flex-column align-items-center ">
            <button type="submit" data-auth="register" class="btn btn-primary">Register</button>
            <p class="mt-3">Do you already have an account?</p>
            <button type="button" data-auth="login" class="btn btn-outline-secondary">Log in</button>
          </div>
        </form>
      </div>
    </div>
  `;

  const loginButton = container.querySelector('[data-auth="login"]');
  loginButton.addEventListener('click', () => {
    location.hash = '#login';
  });

  // Validate the form on submit
  const form = container.querySelector('form[name="auth"]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    let valid = true;

    if (name.length < 8) {
      valid = false;
      document.getElementById('nameError').style.display = 'block';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
    if (!emailRegex.test(email)) {
      valid = false;
      document.getElementById('emailError').style.display = 'block';
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(password)) {
      valid = false;
      document.getElementById('passwordError').style.display = 'block';
    }

    if (valid) {
      onAuth(event);
    }
  });

  return container;
}
