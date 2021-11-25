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

function closeFilter(filter, isFilterOpen) {
  document.getElementById(`${filter}-filter-dropdown`).style.height = "0";
  isFilterOpen[filter] = false;
}
function openFilter(filter, isFilterOpen) {
  document.getElementById(`${filter}-filter-dropdown`).style.height = "auto";
  isFilterOpen[filter] = true;
}

export const createFilterToggles = (isFilterOpen) => {
  for (const filterName in isFilterOpen) {
    document
      .getElementById(`${filterName}-filter`)
      .addEventListener("click", () =>
        isFilterOpen[`${filterName}`]
          ? closeFilter(`${filterName}`, isFilterOpen)
          : openFilter(`${filterName}`, isFilterOpen)
      );
  }
};
