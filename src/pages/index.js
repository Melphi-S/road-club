const slider = document.querySelector('.surfaces__slider-wrapper');
const slides = Array.from(slider.querySelectorAll('.surface'));
const nextButton = document.querySelector('.surfaces__button_type_next');
const prevButton = document.querySelector('.surfaces__button_type_previous');
let index = 0;
let currentSlide = slides[index];
let nextSlide = slides[index + 1];

const togglingElements = function(slide) {
    return [slide.querySelector('.surface__title'), slide.querySelector('.surface__subtitle'), slide.querySelector('.surface__scheme-container')]
}

moveSlides('highway')

function enableElements() {
    currentSlide.classList.add('surface_position_active');
    togglingElements(currentSlide).forEach((element) => element.style.display = 'flex')
    nextSlide.classList.add('surface_position_next');
}

function disableElements() {
    togglingElements(currentSlide).forEach((element) =>  element.style.display = 'none')
    currentSlide.classList.remove('surface_position_active');
    nextSlide.classList.remove('surface_position_next');
}

function setVisibleSlides(direction) {
    if (direction === "next") {
        if (slides.indexOf(currentSlide) < slides.length - 1) {
            index += 1;
        }
        else {
            index = 0;
        }
        currentSlide = slides[index];
    }

    else if (direction === "prev") {
        if (slides.indexOf(currentSlide) !== 0) {
            index -= 1;
        }
        else {
            index = slides.length - 1;
        }
        currentSlide = slides[index];
    }

    else {
        currentSlide = slider.querySelector(`#surface-${direction}`);
    }

    if (slides.indexOf(currentSlide) < slides.length - 1) {
        nextSlide = slides[index + 1];
    }
    else {
        nextSlide = slides[0];
    }
}


function moveSlides(direction) {
    disableElements();
    setVisibleSlides(direction);
    enableElements();;
}

nextButton.addEventListener('mousedown', () => moveSlides('next'));
prevButton.addEventListener('mousedown', () => moveSlides('prev'));