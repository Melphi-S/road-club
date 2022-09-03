// const slider = document.querySelector('.surfaces__slider-wrapper');
// const slides = Array.from(slider.querySelectorAll('.surface'));
// const nextButton = document.querySelector('.surfaces__button_type_next');
// const prevButton = document.querySelector('.surfaces__button_type_previous');
// let index = 0;
// let currentSlide = slides[index];
// let nextSlide = slides[index + 1];

// const togglingElements = function(slide) {
//     return [slide.querySelector('.surface__title'), slide.querySelector('.surface__subtitle'), slide.querySelector('.surface__scheme-container')]
// }

// moveSlides('highway')

// function enableElements() {
//     currentSlide.classList.add('surface_position_active');
//     togglingElements(currentSlide).forEach((element) => element.style.display = 'flex')
//     nextSlide.classList.add('surface_position_next');
// }

// function disableElements() {
//     togglingElements(currentSlide).forEach((element) =>  element.style.display = 'none')
//     currentSlide.classList.remove('surface_position_active');
//     nextSlide.classList.remove('surface_position_next');
// }

// function setVisibleSlides(direction) {
//     if (direction === "next") {
//         if (slides.indexOf(currentSlide) < slides.length - 1) {
//             index += 1;
//         }
//         else {
//             index = 0;
//         }
//         currentSlide = slides[index];
//     }

//     else if (direction === "prev") {
//         if (slides.indexOf(currentSlide) !== 0) {
//             index -= 1;
//         }
//         else {
//             index = slides.length - 1;
//         }
//         currentSlide = slides[index];
//     }

//     else {
//         currentSlide = slider.querySelector(`#surface-${direction}`);
//     }

//     if (slides.indexOf(currentSlide) < slides.length - 1) {
//         nextSlide = slides[index + 1];
//     }
//     else {
//         nextSlide = slides[0];
//     }
// }


// function moveSlides(direction) {
//     disableElements();
//     setVisibleSlides(direction);
//     enableElements();;
// }

import { Slider } from "../components/Slider.js";

const surfacesSlider = new Slider('#surface', '.surface', 
{currentSlide: {
    selector: 'surface_position_active',
    invisibleElements: false
},
 nextSlide: {
    selector: 'surface_position_next',
    invisibleElements: true
}},
['.surface__title', '.surface__subtitle', '.surface__scheme-container']
)

surfacesSlider.activateSlider('flex');

const bikesGroupSlider = new Slider('#bike-group', '.bikes__group-container', 
{currentSlide: {
    selector: 'bikes__group-container_active',
    invisibleElements: false
}
}
)

bikesGroupSlider.activateSlider('flex');

const nextButton = document.querySelector('.surfaces__button_type_next');
const prevButton = document.querySelector('.surfaces__button_type_previous');
const highwayButton = document.querySelector('#button-highway');
const gravelButton = document.querySelector('#button-gravel');
const ttButton = document.querySelector('#button-tt');

nextButton.addEventListener('mousedown', () => {
    surfacesSlider.moveSlides('next', 'flex');
    bikesGroupSlider.moveSlides('next', 'block');
});
prevButton.addEventListener('mousedown', () => {
    surfacesSlider.moveSlides('prev', 'flex');
    bikesGroupSlider.moveSlides('prev', 'block');
});
highwayButton.addEventListener('mousedown', () => {
    surfacesSlider.moveSlides('highway', 'flex');
    bikesGroupSlider.moveSlides('highway', 'block');
});
gravelButton.addEventListener('mousedown', () => {
    surfacesSlider.moveSlides('gravel', 'flex');
    bikesGroupSlider.moveSlides('gravel', 'block');
});
ttButton.addEventListener('mousedown', () => {
    surfacesSlider.moveSlides('tt', 'flex');
    bikesGroupSlider.moveSlides('tt', 'block');
});