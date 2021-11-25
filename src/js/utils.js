export const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
export const isMobile = () => {
  return screen.width < 768;
};

export const uniqueValues = (value, index, selfArray) => {
  return selfArray.indexOf(value) === index;
};
