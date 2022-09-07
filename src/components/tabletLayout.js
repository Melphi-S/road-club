import { tabletWidth } from "../utils/constants.js";
import { toggleButtonStyles } from "../components/buttonStyles.js";
import { Slider } from "../components/Slider.js";

function changeOption(select) {
    const activeSurface = document.querySelector('.surface_position_active').getAttribute('id').split('-')[1];
    select.value = activeSurface;
}
  
function activateSelect(select, sliders) {
    const screenWidth = window.innerWidth;
    if (screenWidth <= tabletWidth) {
      select.addEventListener('change', function() {
        const surface = this.value;
        sliders.forEach((slider) => {
            slider.moveSlides(surface);
            slider.moveSlides(surface);
        })
        activateBikeToggles();
      })
    }
}

function activateBikeToggles() {
    const activeSurface = document.querySelector('.bikes__group-container_active')
    const bikeToggleContainer = activeSurface.querySelector('.bikes__toggle-container');
    const toggleButtons = Array.from(bikeToggleContainer.querySelectorAll('.bikes__toggle'));
    const id = activeSurface.querySelector('.bikes__bike-container_active').getAttribute('id');
    toggleButtonStyles(toggleButtons, 'bikes__toggle_active', `#${id}`);
}

const bikeContainers = Array.from(document.querySelectorAll('.bikes__group-container'));

function activateBikeSliders() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= tabletWidth) {
    bikeContainers.forEach((container) => {
      const containerId = container.getAttribute('id');
      const bikeSlider = new Slider (`#${containerId}`, '.bikes__bike-container', {
        currentSlide: {
          selector: "bikes__bike-container_active",
          invisibleElements: false,
          display: "block",
        }
      })
      bikeSlider.activateSlider();
      activateBikeToggles();
      adjustToggles(bikeSlider);
    })
  }
}

function adjustToggles(sliderInstance) {
  const toggleButtons = Array.from(sliderInstance.slider.querySelectorAll('.bikes__toggle'))
  toggleButtons.forEach((button) => {
    button.addEventListener('mousedown', () => {
      const id = button.getAttribute('id').split('-').slice(-1);
      sliderInstance.moveSlides(`${id}`);
      activateBikeToggles();
    })
  })
}


export { changeOption, activateSelect, activateBikeToggles, activateBikeSliders }
