import { renderNavbar } from './components/common/index.js';
import { initRouter } from '../js/routes/routes.js';

export function updateNavbar() {
  const navBarContainer = document.getElementById('nav-bar');
  navBarContainer.innerHTML = '';
  const navbar = renderNavbar();
  navBarContainer.append(navbar);
}

document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();

  initRouter();
});
