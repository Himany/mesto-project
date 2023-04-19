export default class FormValidator {
  constructor(options, form) {
    this._options = options;
    this._form = form;

    this._inputs = Array.from(this._form.querySelectorAll(this._options.inputSelector));
    this._button = this._form.querySelector(this._options.submitButtonSelector);
  }

  _disableButton() {
    this._button.classList.add(this._options.inactiveButtonClass);
    this._button.disabled = true;
  }
  _enableButton() {
    this._button.classList.remove(this._options.inactiveButtonClass);
    this._button.disabled = false;
  }
  _hasInvalidInput() {
    return this._inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };
  _showInputError(inputElement, errorMessage) {
    const errorElement = inputElement.parentNode.querySelector(this._options.errorClass);
    inputElement.classList.add(this._options.inputErrorClass);
    errorElement.classList.add(this._options.errorClassActive);
    errorElement.textContent = errorMessage;
  };
  _hideInputError(inputElement) {
    const errorElement = inputElement.parentNode.querySelector(this._options.errorClass);
    inputElement.classList.remove(this._options.inputErrorClass);
    errorElement.classList.remove(this._options.errorClassActive);
    errorElement.textContent = '';
  };
  _checkInputValidity(inputElement) {
    inputElement.setCustomValidity((inputElement.validity.patternMismatch) ? inputElement.dataset.errorMessage : "");
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  _setEventListeners() {
    this._toggleButtonState();
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  prepareFormToOpen() {
    this._toggleButtonState();
    this._inputs.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
  enableValidation() {
    this._setEventListeners();
  }
}
