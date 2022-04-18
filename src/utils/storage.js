export function setStorageItem(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function getStorageItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeStorageItem(key) {
  localStorage.removeItem(key);
}
