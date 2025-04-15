import { renderNavbar } from './components/common/nav.js';
import { initRouter } from './routes/routes.js';

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
