export const getProducts = async (url) => {
  const response = await fetch(url);
  const products = await response.json();
  return products;
};
