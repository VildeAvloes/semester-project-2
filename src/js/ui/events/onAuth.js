import { register } from '../../api/auth/register.js';
import { login } from '../../api/auth/login.js';

export async function onAuth(event) {
  event.preventDefault();
  const name = event.target.name?.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  if (event.submitter.dataset.auth === 'login') {
    try {
      await login(email, password);
      location.hash = '#profile';
    } catch (error) {
      throw new Error('Invalid email or password', error);
    }
  } else if (event.submitter.dataset.auth === 'register') {
    try {
      await register(name, email, password);
      await login(email, password);
      location.hash = '#profile';
    } catch (error) {
      throw new Error('Registration failed', error);
    }
  }
}
