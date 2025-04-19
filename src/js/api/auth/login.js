import { API_AUTH, API_BASE, API_LOGIN } from '../constants.js';
import { authFetch } from '../fetch.js';
import { save } from '../../storage/index.js';
import { loadProfile } from './index.js';
import { updateNavbar } from '../../index.js';

export async function login(email, password) {
  const response = await authFetch(API_BASE + API_AUTH + API_LOGIN, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save('token', accessToken);

    const existingProfile = loadProfile();
    console.log('existingProfile login', existingProfile);
    console.log('loadProfile() login', loadProfile());
    if (existingProfile) {
      profile.credits = existingProfile.credits;
    }

    save('profile', profile);
    updateNavbar();
    return profile;
  }

  throw new Error(response.statusText);
}
