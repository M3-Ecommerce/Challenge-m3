const getScreenSize = () => {
  const elementQuery = matchMedia("(min-width: 1024px)");
  return elementQuery.matches;
};

export default getScreenSize;
