function clearStyle(elements, selector) {
    elements.forEach((element) => {
        element.classList.remove(selector);
    })
}

function setStyle(element, selector) {
    element.classList.add(selector);
}

function setActiveButton(activeContainerSelector) {
  const activeId = document.querySelector(activeContainerSelector).getAttribute('id').split('-').slice(1).join('-');
  const activeButton = document.querySelector(`#button-${activeId}`);
  return activeButton;
}

function toggleButtonStyles(buttons, activeButtonSelector, activeContainerSelector) {
  clearStyle(buttons, activeButtonSelector);
  const activeButton = setActiveButton(activeContainerSelector);
  setStyle(activeButton, activeButtonSelector);
}

export { toggleButtonStyles }