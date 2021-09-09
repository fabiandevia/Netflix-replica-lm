export const saveToLocalStorage = (key = '', value = '') => {
  const _value = typeof value === 'object' ? JSON.stringify(value) : value;
  localStorage.setItem(key, _value);
};

export const getFromLocalStorage = (key = '', isJSON = false) => {
  const value = localStorage.getItem(key);
  return isJSON ? JSON.parse(value) : localStorage.getItem(value);
};
