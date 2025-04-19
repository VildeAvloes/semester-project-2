export function load(key) {
  const raw = localStorage.getItem(key);

  if (!raw || raw === 'undefined') {
    return null;
  }

  return JSON.parse(raw);
}
