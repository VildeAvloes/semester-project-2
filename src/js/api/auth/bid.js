import { API_BASE, API_LISTINGS } from '../constants.js';
import { authFetch } from '../fetch.js';

export async function placeBid(listingId, amount, token) {
  const response = await authFetch(
    `${API_BASE}${API_LISTINGS}${listingId}/bids`,
    {
      method: 'POST',
      body: JSON.stringify({ amount }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to place bid');
  }

  return await response.json();
}
