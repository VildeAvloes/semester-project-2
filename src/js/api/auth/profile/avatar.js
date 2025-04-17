import { save } from '../../../storage/index.js';
import { API_BASE, API_PROFILES } from '../../constants.js';
import { authFetch } from '../../fetch.js';

export async function updateAvatar(avatarUrl, token, username) {
  const response = await authFetch(API_BASE + API_PROFILES + `${username}`, {
    method: 'PUT',
    body: JSON.stringify({
      avatar: {
        url: avatarUrl,
        alt: 'User avatar',
      },
    }),
  });

  if (response.ok) {
    save('profileAvatar_' + username, avatarUrl);
    return await response.json();
  }

  throw new Error(response.statusText);
}
