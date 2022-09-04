import { Slider } from "../components/Slider.js";

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


