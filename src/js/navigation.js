const sidePanelNode = document.getElementById("side-panel");
const sidePanelTitleNode = document.getElementById("side-panel-title");
const mobileFilterContainer = document.getElementById("filter-container");
const mobileOrderContainer = document.getElementById("order-container");

export const openNav = (title) => {
  sidePanelNode.style.width = "100vw";
  sidePanelTitleNode.textContent = title;
};

export const closeNav = () => {
  sidePanelNode.style.width = "0";
  mobileFilterContainer.className = "hide";
  mobileOrderContainer.className = "hide";
  document.getElementById("side-panel-title").textContent = "";
};
