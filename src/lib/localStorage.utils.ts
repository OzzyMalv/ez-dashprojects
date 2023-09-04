export const setInLS = (key: string, value: string) =>
  localStorage.setItem(key, value);
export const getFromLS = (key: string) => localStorage.getItem(key);
export const removeFromLS = (key: string) => localStorage.removeItem(key);
export const clearLS = () => localStorage.clear();
