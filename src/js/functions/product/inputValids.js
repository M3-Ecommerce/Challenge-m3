const inputValids = (element) => {
  const classes = [
    "accordion__input-color",
    "sizes-grid__button",
    "accordion__input-range",
  ];

  return (
    element.classList.contains(classes[0]) ||
    element.classList.contains(classes[1]) ||
    element.classList.contains(classes[2])
  );
};

export default inputValids;
