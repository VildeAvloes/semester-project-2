import { logout } from '../../api/auth/logout.js';

export function renderLogoutButton() {
  const logoutButton = document.createElement('button');
  logoutButton.classList.add('btn', 'btn-primary', 'w-100', 'mb-4');
  logoutButton.textContent = 'Log Out';
  logoutButton.addEventListener('click', () => {
    logout();
    location.hash = '#login';
  });
  return logoutButton;
}
