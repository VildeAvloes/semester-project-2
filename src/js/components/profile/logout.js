import { logout } from '../../api/auth/logout.js';

export function renderLogoutButton() {
  const logOutButtonWrapper = document.createElement('div');
  logOutButtonWrapper.classList.add('d-flex', 'justify-content-center');

  const logoutButton = document.createElement('button');
  logoutButton.classList.add('btn', 'btn-primary', 'mb-4');
  logoutButton.textContent = 'Log Out';
  logoutButton.addEventListener('click', () => {
    logout();
    location.hash = '#login';
  });

  logOutButtonWrapper.append(logoutButton);
  return logOutButtonWrapper;
}
