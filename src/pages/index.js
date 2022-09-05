import { Slider } from "../components/Slider.js";
import { FormValidator } from "../components/FormValidator.js";

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

const nextButton = document.querySelector(".surfaces__button_type_next");
const prevButton = document.querySelector(".surfaces__button_type_previous");
const highwayButton = document.querySelector("#button-highway");
const gravelButton = document.querySelector("#button-gravel");
const ttButton = document.querySelector("#button-tt");
const surfaceButtons = [highwayButton, gravelButton, ttButton];

nextButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("next");
  bikesGroupSlider.moveSlides("next");
});
prevButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("prev");
  bikesGroupSlider.moveSlides("prev");
});
highwayButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("highway");
  bikesGroupSlider.moveSlides("highway");
});
gravelButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("gravel");
  bikesGroupSlider.moveSlides("gravel");
});
ttButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("tt", "flex");
  bikesGroupSlider.moveSlides("tt");
});

function clearStyle(elements, selector) {
    elements.forEach((element) => {
        element.classList.remove(selector);
    })
}

function setStyle(element, selector) {
    element.classList.add(selector);
}

setStyle(highwayButton, 'bikes__button_active');

surfaceButtons.forEach((button) =>
{ button.addEventListener('mousedown', () => {
    clearStyle(surfaceButtons, 'bikes__button_active');
    setStyle(button, 'bikes__button_active');
})
})

const body = document.querySelector('.body');
const subtitles = Array.from(document.querySelectorAll('.section__subtitle'));
const quoteAuthor = document.querySelector('.intro__author-profession');
const arrowButtons = Array.from(document.querySelectorAll('.surfaces__button'));
const bikesButtons = Array.from(document.querySelectorAll('.bikes__button'));
const bikesActiveButton = document.querySelector('.bikes__active-button');
const copyright = document.querySelector('.footer__copyright');
const themeLogos = Array.from(document.querySelectorAll('.theme-toggle__logo'));
const themeButtonLabels = Array.from(document.querySelectorAll('.theme-toggle__button-label'));
const emailInput = document.querySelector('.footer__email-input');
const links = Array.from(document.querySelectorAll('.link'));

const themeElements = new Map ([
  [body, 'body_theme'],
  [quoteAuthor, 'intro__author-profession_theme'],
  [subtitles, 'section__subtitle_theme'],
  [arrowButtons, 'surfaces__button_theme'],
  [bikesButtons, 'bikes__button_theme'],
  [copyright, 'footer__copyright_theme'],
  [themeLogos, 'theme-toggle__logo_theme'],
  [themeButtonLabels, 'theme-toggle__button-label_theme'],
  [emailInput, 'footer__email-input_theme'],
  [links, 'link_theme_']

])

let lightTheme = true;

function toggleTheme() {
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

const themeToggleButton = document.querySelector('.theme-toggle__button');
themeToggleButton.addEventListener('change', toggleTheme);
const form = document.querySelector('.footer__email-form');
const currentValidationObject = {
  inputSelector: '.footer__email-input',
  submitButtonSelector: '.footer__email-button',
  inactiveButtonClass: 'footer__email-button_inactive'
}

const formValidator = new FormValidator(form, currentValidationObject);
formValidator.enableValidation();




