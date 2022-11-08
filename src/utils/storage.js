export const getStorageItem = (item) => JSON.parse(localStorage.getItem(item)) || {};
export const setStorageItem = (item, property) => {
  const currentStorageItem = getStorageItem(item);

  localStorage.setItem(item, JSON.stringify({...currentStorageItem, ...property}));
}