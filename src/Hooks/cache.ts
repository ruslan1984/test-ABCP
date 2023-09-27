export const getCache = <T>(id: number, key: string): T | undefined => {
  const lsData = localStorage.getItem(key);
  if (!lsData) return undefined;
  const data = JSON.parse(lsData);
  return data[id];
};

export const setCache = <T>(id: number, value: T, key: string) => {
  const lsData = localStorage.getItem(key);
  const data = lsData ? JSON.parse(lsData) : {};
  data[id] = value;
  const newData = JSON.stringify(data);
  localStorage.setItem(key, newData);
};
