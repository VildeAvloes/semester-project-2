import { API_BASE, API_PROFILES } from '../../constants.js';
import { authFetch } from '../../fetch.js';

export async function updateAvatar(avatarUrl, token, username) {
  const response = await authFetch(`${API_BASE}${API_PROFILES}${username}`, {
    method: 'PUT',
    body: JSON.stringify({
      avatar: {
        url: avatarUrl,
        alt: 'User avatar', // valgfritt
      },
    }),
  });

  if (response.ok) {
    const responseData = await response.json();
    console.log('API response:', responseData);
    return responseData;
  }

  throw new Error(response.statusText);
}
