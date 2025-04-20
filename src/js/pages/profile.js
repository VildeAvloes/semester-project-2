import { isLoggedIn, loadProfile } from '../api/auth/index.js';
import { renderMessage, renderWrapper } from '../components/common/index.js';
import {
  renderMyListings,
  renderProfileDetails,
  renderUpdateAvatar,
} from '../components/profile/index.js';

export async function profilePage() {
  document.title = 'Bid Society | My Profile';

  if (!isLoggedIn()) {
    location.hash = '#login';
    return;
  }

  const { container, row, col } = renderWrapper('My Profile', 'col-md-8');

  try {
    const userProfile = await loadProfile();
    if (!userProfile) {
      throw new Error('User profile could not be loaded');
    }

    const myListingsSection = await renderMyListings();

    col.append(
      renderProfileDetails(userProfile),
      renderUpdateAvatar(userProfile),
      myListingsSection
    );
  } catch (error) {
    console.error('Failed to load profile:', error);
    const errorMessage = renderMessage(
      'error',
      'Could not load your profile. Please try again later.'
    );
    col.append(errorMessage);
  }

  row.append(col);
  container.append(row);

  return container;
}
