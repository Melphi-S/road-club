class FormValidator {
  constructor(formElement, validationObject) {
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(validationObject.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      validationObject.submitButtonSelector
    );
    this._inactiveButtonClass = validationObject.inactiveButtonClass;
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _setEventListeners() {
    this._disableButton();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState();
      });
    });
    this._formElement.addEventListener("reset", () => {
      this._disableButton();
    });

  }

  enableValidation() {
    this._setEventListeners();
  }
}

export { FormValidator };
