class Slider {
    constructor(sliderId, slidesSelector, visibleSlidesOptions, togglingElementsSelectors = null) {
        this._sliderId = sliderId;
        this._slider = document.querySelector(sliderId);
        this._slides = Array.from(this._slider.querySelectorAll(slidesSelector));
        this._visibleSlidesOptions = visibleSlidesOptions;
        this._togglingElementsSelectors = togglingElementsSelectors;
        this._visibleSlides = {};
    }

    activateSlider(display) {
        let index = 0;
        for (let slide in this._visibleSlidesOptions) {
            this._visibleSlides[slide] = this._slides[index];
            index += 1;
        }
        this._enableElements(display);
    }

    _toggleElements(slide) {
        if (this._togglingElementsSelectors) {
            const togglingElements = [];
            this._togglingElementsSelectors.forEach((selector) => {
                togglingElements.push(this._visibleSlides[slide].querySelector(selector))
            })
            return togglingElements;
        }
    }

    _enableElements(display) {
        for (let slide in this._visibleSlidesOptions) {
            this._visibleSlides[slide].classList.add(this._visibleSlidesOptions[slide].selector);
            if (this._togglingElementsSelectors) {
                if (this._visibleSlidesOptions[slide].invisibleElements === false) {
                    this._toggleElements(slide).forEach((element) => element.style.display = display)
                }
            }
        }
    }

    _disableElements() {
        for (let slide in this._visibleSlidesOptions) {
            if (this._togglingElementsSelectors) {
                this._toggleElements(slide).forEach((element) => element.style.display = 'none')
            }
            this._visibleSlides[slide].classList.remove(this._visibleSlidesOptions[slide].selector);
        }
    }

    _moveForward() {
        let nextCircleIndex = 0;
        for (let slide in this._visibleSlides){
            let index = this._slides.indexOf(this._visibleSlides[slide]);
            if (index < this._slides.length - 1) {
                index += 1;
            }
            else {
                index = nextCircleIndex;
                nextCircleIndex += 1;
            }
            this._visibleSlides[slide] = this._slides[index];
        }
    }

    _moveBack() {
        let nextCircleIndex = this._slides.length - 1;
        for (let slide in this._visibleSlides){
            let index = this._slides.indexOf(this._visibleSlides[slide]);
            if (index !== 0) {
                index -= 1;
            }
            else {
                index = nextCircleIndex;
                nextCircleIndex -= 1;
            }
            this._visibleSlides[slide] = this._slides[index];
        }
    }

    _setVisibleSlides(direction) {
        if (direction === "next") {
            this._moveForward()
        }
    
        else if (direction === "prev") {
            this._moveBack()
        }
    
        else {
            let index = this._slides.indexOf(this._slider.querySelector(`${this._sliderId}-${direction}`));
            console.log(this._sliderId);
            let nextCircleIndex = 0;
            for (let slide in this._visibleSlides){
                this._visibleSlides[slide] = this._slides[index];
                if (index < this._slides.length - 1) {
                    index += 1;
                }
                else {
                    index = nextCircleIndex;
                    nextCircleIndex += 1;
                }
            }
        }
    }

    moveSlides(direction, display) {
        this._disableElements();
        this._setVisibleSlides(direction);
        this._enableElements(display);
    }
}

export { Slider }
