import { updateNavbar } from '../../index.js';
import { remove } from '../../storage/index.js';

export function logout() {
  remove('profile');
  remove('token');
  updateNavbar();
  location.hash = '#home';
}
