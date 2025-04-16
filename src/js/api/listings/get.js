import { API_BASE, API_LISTINGS } from '../constants.js';
import { authFetch } from '../fetch.js';

export async function getListings() {
  const response = await authFetch(API_BASE + API_LISTINGS);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getListing(id) {
  const response = await authFetch(
    `${API_BASE}${API_LISTINGS}/${id}?_bids=true&_seller=true`
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
