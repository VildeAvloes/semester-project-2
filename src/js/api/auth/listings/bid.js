import { API_BASE, API_LISTINGS, authFetch } from '../../index.js';

export async function placeBid(listingId, amount) {
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
