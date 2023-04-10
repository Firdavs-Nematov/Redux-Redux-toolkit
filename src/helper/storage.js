export const setItem = (key, item) => {
  try {
    localStorage.setItem(key, item);
  } catch (error) {
    console.log("Error set data");
  }
};

export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("Error get data");
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log("Error remove data");
  }
};
