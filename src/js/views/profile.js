import { logout } from '../api/auth/logout.js';
import { isLoggedIn, loadProfile } from '../api/auth/state.js';
import { renderWrapper } from '../components/common/wrapper.js';
import { renderLogoutButton } from '../components/profile/logout.js';
import { renderMyListings } from '../components/profile/myListings.js';
import { renderProfileDetails } from '../components/profile/profileDetails.js';
import { renderUpdateAvatarComp } from '../components/profile/avatarComp.js';

export function profilePage() {
  if (!isLoggedIn()) {
    location.hash = '#login';
    return;
  }

  const userProfile = loadProfile();
  if (!userProfile) {
    location.hash = '#login';
    return;
  }

  const { container, row, col } = renderWrapper('My Profile', 'col-md-10');

  col.append(
    renderProfileDetails(userProfile),
    renderUpdateAvatarComp(userProfile),
    renderLogoutButton(logout),
    renderMyListings()
  );

  row.appendChild(col);
  container.appendChild(row);

  return container;
}
