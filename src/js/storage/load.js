export function load(key) {
  const loadedKey = localStorage.getItem(key);

  if (!loadedKey || loadedKey === 'undefined') {
    return null;
  }

  return JSON.parse(loadedKey);
}
