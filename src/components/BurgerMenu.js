class BurgerMenu {
	constructor(options) {
        this._options = options;
        this._burger = document.querySelector(options.burgerSelector);
		this._burgerButton = document.querySelector(options.burgerButtonSelector);
		this._burgerButtonElements = this._burgerButton.querySelectorAll(options.burgerButtonElementSelector);
        this._maxValidWidth = options.maxValidWidth;
	}

	open() {
		this._burger.classList.add(this._options.burgerActiveClass);
		this._setEventListeners();
		this._activateBurgerButton();
	}

	close() {
		this._burger.classList.remove(this._options.burgerActiveClass);
		this._removeEventListeners();
		this._deactivateBurgerButton();
	}

    handleScreenWidth() {
        const screenWidth = window.innerWidth;
        if (  screenWidth > this._maxValidWidth) {
            this.close();
        }
    }

	toggleBurgerMenu = () => {
		this._burger.classList.contains(this._options.burgerActiveClass) ? this.close() : this.open();
	}

    _handlePressEsc = (evt) => {
		evt.preventDefault()
		if (evt.key === "Escape") {
			this.close();
		}
	};

	// _handlePressClick = (evt) => {
	// 	if (!evt.target.classList.contains("popup_opened") &&
	// 		!evt.target.classList.contains("logo_type_header-animals") &&
	// 		!evt.target.classList.contains('burger-button') &&
	// 		!evt.target.classList.contains('burger-button__line-element')
	// 	) {
	// 		setTimeout(() => {this.close()}, 100);
	// 	}
	// };

	_setEventListeners() {
		// document.addEventListener("mousedown", this._handlePressClick);
		document.addEventListener("keydown", this._handlePressEsc);
	}

	_removeEventListeners() {
		// document.removeEventListener("mousedown", this._handlePressClick);
		document.removeEventListener("keydown", this._handlePressEsc);
	}

	_deactivateBurgerButton() {
		this._burgerButtonElements.forEach((element) => {
			element.classList.remove(this._options.burgerButtonActiveElementClass);

		});
	}

	_activateBurgerButton() {
		this._burgerButtonElements.forEach((element) => {
			element.classList.add(this._options.burgerButtonActiveElementClass);
		});
	}
}

export { BurgerMenu }