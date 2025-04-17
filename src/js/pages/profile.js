import { isLoggedIn, loadProfile } from '../api/auth/index.js';
import { renderWrapper } from '../components/common/index.js';
import {
  renderMyListings,
  renderProfileDetails,
  renderUpdateAvatar,
} from '../components/profile/index.js';

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
