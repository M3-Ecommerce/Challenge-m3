const modalAction = () => {
  const uriToCloseModal = `${location.origin}${location.pathname}#`;
  const isOpenModal = location.hash !== "";

  if (isOpenModal) {
    location.href = uriToCloseModal;
  }
};

export default modalAction;
