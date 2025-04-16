import { updateNavbar } from '../../index.js';
import { remove } from '../../storage/remove.js';

export function logout() {
  remove('token');
  updateNavbar();
  location.hash = '#home';
}
