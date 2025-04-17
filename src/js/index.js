import { renderFooter, renderNavbar } from './components/common/index.js';
import { initRouter } from '../js/routes/routes.js';

export function updateNavbar() {
  const navBarContainer = document.getElementById('nav-bar');
  navBarContainer.innerHTML = '';
  const navbar = renderNavbar();
  navBarContainer.append(navbar);
}

export function updateFooter() {
  const footerContainer = document.getElementById('footer');
  footerContainer.innerHTML = '';
  const footer = renderFooter();
  footerContainer.append(footer);
}

document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();
  updateFooter();
  initRouter();
});
