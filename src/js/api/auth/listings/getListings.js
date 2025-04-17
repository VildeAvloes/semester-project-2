import { API_BASE, API_LISTINGS } from '../../constants.js';
import { authFetch } from '../../fetch.js';

export async function getListings() {
  const response = await authFetch(
    `${API_BASE}${API_LISTINGS}?sort=created&sortOrder=desc`
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
