import { load, save } from '../../storage/index.js';

export const isLoggedIn = () => Boolean(load('token'));

export const loadProfile = () => {
  const profile = load('profile');
  return profile?.data ?? profile;
};

export const saveProfile = (profile) => save('profile', profile);
