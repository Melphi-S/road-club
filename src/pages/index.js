import { Slider } from "../components/Slider.js";
import { FormValidator } from "../components/FormValidator.js";
import { BurgerMenu } from "../components/BurgerMenu.js";
import { toggleButtonStyles } from "../components/buttonStyles.js";
import { toggleTheme } from "../components/themeToggle.js";
import { changeOption, activateSelect, activateBikeToggles, activateBikeSliders } from "../components/tabletLayout.js";
import { scrollToAnchor } from "../utils/anchorLinkScroll.js";
import { sliderButtons, surfaceButtons, themeToggleButtons, form, currentValidationObject, currentThemeElements, headerBurgerOptions, burgerButton } from "../utils/constants.js";

const surfacesSlider = new Slider(
  "#surface",
  ".surface",
  {
    currentSlide: {
      selector: "surface_position_active",
      invisibleElements: false,
      display: "flex",
    },
    nextSlide: {
      selector: "surface_position_next",
      invisibleElements: true,
      display: "flex",
    },
  },
  [".surface__title", ".surface__subtitle", ".surface__scheme-container"]
);

surfacesSlider.activateSlider();

const bikesGroupSlider = new Slider("#bike-group", ".bikes__group-container", {
  currentSlide: {
    selector: "bikes__group-container_active",
    invisibleElements: false,
    display: "block",
  },
});

bikesGroupSlider.activateSlider();

sliderButtons.nextButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("next");
  bikesGroupSlider.moveSlides("next");
  toggleButtonStyles(surfaceButtons,'bikes__button_active', '.surface_position_active');
  changeOption(sliderButtons.selectBikes);
  activateBikeToggles();
});
sliderButtons.prevButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("prev");
  bikesGroupSlider.moveSlides("prev");
  toggleButtonStyles(surfaceButtons,'bikes__button_active', '.surface_position_active');
  changeOption(sliderButtons.selectBikes);
  activateBikeToggles();
});
sliderButtons.highwayButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("highway");
  bikesGroupSlider.moveSlides("highway");
  toggleButtonStyles(surfaceButtons,'bikes__button_active', '.surface_position_active');
});
sliderButtons.gravelButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("gravel");
  bikesGroupSlider.moveSlides("gravel");
  toggleButtonStyles(surfaceButtons,'bikes__button_active', '.surface_position_active');
});
sliderButtons.ttButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("tt", "flex");
  bikesGroupSlider.moveSlides("tt");
  toggleButtonStyles(surfaceButtons,'bikes__button_active', '.surface_position_active');
});

toggleButtonStyles(surfaceButtons,'bikes__button_active', '.surface_position_active')

themeToggleButtons.forEach((button) => {
  button.addEventListener('change', () => {
    toggleTheme(currentThemeElements);
    if (document.body.classList.contains('body_theme_dark')) {
      themeToggleButtons.forEach((button) => {
        button.checked = true;
      })
    }
    else {
      themeToggleButtons.forEach((button) => {
        button.checked = false;
      })
    }
  } )})

const formValidator = new FormValidator(form, currentValidationObject);
formValidator.enableValidation();

const headerBurgerMenu = new BurgerMenu(headerBurgerOptions);
burgerButton.addEventListener('mousedown', headerBurgerMenu.toggleBurgerMenu)

activateSelect(sliderButtons.selectBikes, [surfacesSlider, bikesGroupSlider]);
activateBikeSliders();

window.addEventListener('resize', () => {
    activateBikeSliders();
    activateSelect(sliderButtons.selectBikes, [surfacesSlider, bikesGroupSlider]);
    headerBurgerMenu.handleScreenWidth();
});

document.querySelectorAll('a[href^="#"').forEach( (link) => scrollToAnchor(link, '.header'));

