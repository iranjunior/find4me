import { keys } from './storageKeys';

export const set = (value) => localStorage.setItem(keys.GLOBAL_STORE, JSON.stringify(value));
export const clear = () => localStorage.setItem(keys.GLOBAL_STORE, null);
export function get() {
  try {
    return JSON.parse(localStorage.getItem(keys.GLOBAL_STORE));
  } catch (err) {
    return undefined;
  }
}

export const setToken = (value) => localStorage.setItem(keys.TOKEN, JSON.stringify(value));
export const clearToken = () => localStorage.setItem(keys.TOKEN, null);
export function getToken() {
  return JSON.parse(localStorage.getItem(keys.TOKEN)) || '';
}
export const setUser = (value) => localStorage.setItem(keys.USER, JSON.stringify(value));
export const clearUser = () => localStorage.setItem(keys.USER, null);
export function getUser() {
  return JSON.parse(localStorage.getItem(keys.USER)) || '';
}
