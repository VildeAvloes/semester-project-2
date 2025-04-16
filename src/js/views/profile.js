import { isLoggedIn, loadProfile } from '../api/auth/state.js';
import { renderWrapper } from '../components/common/wrapper.js';
import { renderMyListings } from '../components/profile/myListings.js';
import { renderProfileDetails } from '../components/profile/profileDetails.js';
import { renderUpdateAvatar } from '../components/profile/avatarComp.js';

export async function profilePage() {
  if (!isLoggedIn()) {
    location.hash = '#login';
    return;
  }

  const userProfile = loadProfile();
  if (!userProfile) {
    location.hash = '#login';
    return;
  }

  console.log(userProfile);
  const { container, row, col } = renderWrapper('My Profile', 'col-md-8');

  const myListingsSection = await renderMyListings();

  col.append(
    renderProfileDetails(userProfile),
    renderUpdateAvatar(userProfile),
    myListingsSection
  );

  row.appendChild(col);
  container.appendChild(row);

  return container;
}
