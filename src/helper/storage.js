export const setItem = (key, item) => {
  try {
    localStorage.setItem(key, item);
  } catch (error) {
    console.log("error");
  }
};
