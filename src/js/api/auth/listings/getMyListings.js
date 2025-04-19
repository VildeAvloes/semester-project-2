import { API_BASE, API_PROFILES } from '../../constants.js';
import { authFetch } from '../../fetch.js';
import { loadProfile } from '../index.js';

export async function getMyListings() {
  console.log('🧠 Henter fra localStorage:', loadProfile());
  const profile = loadProfile();
  const name = profile?.name;

  if (!name) throw new Error('User not found');

  const response = await authFetch(
    `${API_BASE}${API_PROFILES}${name}/listings`
  );

  if (!response.ok) {
    console.log('not okey my listing', !response.ok);
    throw new Error('Failed to fetch user listings');
  }

  const { data } = await response.json();
  return data;
}
