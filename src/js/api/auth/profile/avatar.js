import { save } from '../../../storage/index.js';
import { API_BASE, API_PROFILES } from '../../constants.js';
import { authFetch } from '../../fetch.js';

export async function updateAvatar(avatarUrl, token, username) {
  const response = await authFetch(`${API_BASE}${API_PROFILES}${username}/`, {
    method: 'PUT',
    body: JSON.stringify({
      avatar: {
        url: avatarUrl,
        alt: 'User avatar',
      },
    }),
  });

  if (!response.ok) throw new Error(response.statusText);

  const getResponse = await authFetch(
    `${API_BASE}${API_PROFILES}${username}/?_listings=true&_bids=true`
  );

  if (!getResponse.ok) throw new Error(getResponse.statusText);

  const fullProfile = await getResponse.json();
  console.log('🚀 Skal lagre i localStorage:', fullProfile);
  save('profile', fullProfile);
  console.log('🔐 Lagret profil i localStorage:', fullProfile);

  return fullProfile;
}
