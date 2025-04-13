import { logout } from '../api/auth/logout.js';
import { isLoggedIn, profile } from '../api/auth/state.js';
import { renderWrapper } from '../components/common/wrapper.js';
import { renderLogoutButton } from '../components/profile/logout.js';
import { renderMyListings } from '../components/profile/myListings.js';
import { renderProfileDetails } from '../components/profile/profileDetails.js';
import { renderUpdateAvatar } from '../components/profile/updateAvatar.js';

export function profilePage() {
  if (!isLoggedIn()) {
    location.hash = '#login';
    return;
  }

  const userProfile = profile();
  if (!userProfile) {
    location.hash = '#login';
    return;
  }

  const { container, row, col } = renderWrapper('My Profile');

  // Legg til de ulike komponentene i col (kolonnen)
  col.append(
    renderProfileDetails(userProfile),
    renderUpdateAvatar(userProfile),
    renderLogoutButton(logout),
    renderMyListings()
  );

  row.appendChild(col);
  container.appendChild(row);

  return container;
}
