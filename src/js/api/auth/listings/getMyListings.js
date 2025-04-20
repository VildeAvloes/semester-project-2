import { API_BASE, API_PROFILES, authFetch } from '../../index.js';
import { loadProfile } from '../index.js';

export async function getMyListings() {
  const profile = loadProfile();
  const name = profile?.name;

  if (!name) throw new Error('User not found');

  const response = await authFetch(
    `${API_BASE}${API_PROFILES}${name}/listings`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch user listings');
  }

  const { data } = await response.json();
  return data;
}
