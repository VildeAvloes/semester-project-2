import { API_BASE, API_LISTINGS, authFetch } from '../../index.js';

export async function getListing(id) {
  const response = await authFetch(
    `${API_BASE}${API_LISTINGS}${id}?_bids=true&_seller=true`
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
