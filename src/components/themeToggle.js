let lightTheme = true;

function toggleTheme(themeElements) {
  themeElements.forEach((selector, elementSet) => {
    if (lightTheme) {
      if (Array.isArray(elementSet)) {
        elementSet.forEach((element) => {
          element.classList.remove(`${selector}_light`);
          element.classList.add(`${selector}_dark`);
        })
      }
      else {
        elementSet.classList.remove(`${selector}_light`);
        elementSet.classList.add(`${selector}_dark`);
      }
    }
    else {
      if (Array.isArray(elementSet)) {
        elementSet.forEach((element) => {
          element.classList.remove(`${selector}_dark`);
          element.classList.add(`${selector}_light`);
        })
      }
      else {
        elementSet.classList.remove(`${selector}_dark`);
        elementSet.classList.add(`${selector}_light`);
      }
    }
  })
    lightTheme ? lightTheme = false : lightTheme = true;
}

export { toggleTheme };