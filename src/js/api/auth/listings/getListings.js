import { API_BASE, API_LISTINGS, authFetch } from '../../index.js';

export async function getListings() {
  const response = await authFetch(
    `${API_BASE}${API_LISTINGS}?sort=created&sortOrder=desc`
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
