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
const select = document.querySelector('.bikes__select');

nextButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("next");
  bikesGroupSlider.moveSlides("next");
  toggleButtonStyles();
  changeOption();
});
prevButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("prev");
  bikesGroupSlider.moveSlides("prev");
  toggleButtonStyles();
  changeOption();
});
highwayButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("highway");
  bikesGroupSlider.moveSlides("highway");
  toggleButtonStyles();
});
gravelButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("gravel");
  bikesGroupSlider.moveSlides("gravel");
  toggleButtonStyles();
});
ttButton.addEventListener("mousedown", () => {
  surfacesSlider.moveSlides("tt", "flex");
  bikesGroupSlider.moveSlides("tt");
  toggleButtonStyles();
});

const tabletWidth = 768;

function changeOption() {
  const activeSurface = document.querySelector('.surface_position_active').getAttribute('id').split('-')[1];
  select.value = activeSurface;
}

function activateSelect() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= tabletWidth) {
    select.addEventListener('change', function() {
      const surface = this.value;
      surfacesSlider.moveSlides(surface);
      bikesGroupSlider.moveSlides(surface);
    })
  }
}

activateSelect();

function clearStyle(elements, selector) {
    elements.forEach((element) => {
        element.classList.remove(selector);
    })
}

function setStyle(element, selector) {
    element.classList.add(selector);
}

function toggleButtonStyles() {
  clearStyle(surfaceButtons, 'bikes__button_active');
  const activeSurface = document.querySelector('.surface_position_active').getAttribute('id').split('-')[1];
  const activeButton = document.querySelector(`#button-${activeSurface}`);
  setStyle(activeButton, 'bikes__button_active');
}

toggleButtonStyles();

const body = document.querySelector('.body');
const subtitles = Array.from(document.querySelectorAll('.section__subtitle'));
const quoteAuthor = document.querySelector('.intro__author-profession');
const arrowButtons = Array.from(document.querySelectorAll('.surfaces__button'));
const bikesButtons = Array.from(document.querySelectorAll('.bikes__button'));
const copyright = document.querySelector('.footer__copyright');
const themeLogos = Array.from(document.querySelectorAll('.theme-toggle__logo'));
const themeButtonLabels = Array.from(document.querySelectorAll('.theme-toggle__button-label'));
const emailInput = document.querySelector('.footer__email-input');
const links = Array.from(document.querySelectorAll('.link'));
const sections = Array.from(document.querySelectorAll('.section'));

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
  [links, 'link_theme'],
  [sections, 'section_theme']

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

const bikeContainers = Array.from(document.querySelectorAll('.bikes__group-container'));

function toggleBikeContainer() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= tabletWidth) {
    bikeContainers.forEach((container) => {
      const bikes = container.querySelectorAll('.bikes__bike-container');
      bikes.forEach((bike, index) => 
        {if (index > 0) {
          bike.classList.add('bikes__bike-container_hidden')
        }}
      )
    })
  }
  else {
    bikeContainers.forEach((container) => {
      const bikes = container.querySelectorAll('.bikes__bike-container');
      bikes.forEach((bike, index) => 
        {if (index > 0) {
          bike.classList.remove('bikes__bike-container_hidden')
        }}
      )
    })
  }
}

toggleBikeContainer();

window.addEventListener('resize', () => {
    toggleBikeContainer();
    activateSelect();
});
