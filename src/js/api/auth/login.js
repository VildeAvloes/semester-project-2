import { API_AUTH, API_BASE, API_LOGIN, API_PROFILES } from '../constants.js';
import { authFetch } from '../fetch.js';
import { save } from '../../storage/index.js';
import { updateNavbar } from '../../index.js';
import { saveProfile } from './state.js';

export async function login(email, password) {
  const response = await authFetch(API_BASE + API_AUTH + API_LOGIN, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { accessToken, ...userData } = (await response.json()).data;
  save('token', accessToken);

  const fetchProfile = await authFetch(
    `${API_BASE}${API_PROFILES}${userData.name}?_listings=true&_bids=true`
  );

  if (!fetchProfile.ok) {
    throw new Error('Failed to fetch full profile');
  }

  const userProfile = await fetchProfile.json();
  saveProfile(userProfile);

  updateNavbar();
  return userProfile;
}
