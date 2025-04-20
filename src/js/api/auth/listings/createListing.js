import { API_BASE, API_LISTINGS, authFetch } from '../../index.js';

export async function createListing(data) {
  const response = await authFetch(API_BASE + API_LISTINGS, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors?.[0]?.message || 'Failed to create listing');
  }

  return await response.json();
}
