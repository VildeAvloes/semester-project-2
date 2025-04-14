import { load, save } from '../../storage/index.js';

export const isLoggedIn = () => Boolean(load('token'));

export const loadProfile = () => load('profile');

export const saveProfile = (profile) => save('profile', profile);
