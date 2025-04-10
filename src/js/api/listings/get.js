import { API_BASE, API_LISTINGS } from '../constants.js';
import { authFetch } from '../fetch.js';

export async function getListings() {
  const response = await authFetch(API_BASE + API_LISTINGS);
  return await response.json();
}
