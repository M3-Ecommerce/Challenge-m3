const buttonSizeActions = (e) => {
  const button = e.target;
  const isButtonSelected = button.classList.contains("selected");

  if (isButtonSelected) {
    button.classList.remove("selected");
  } else {
    button.classList.add("selected");
  }
};

export default buttonSizeActions;
