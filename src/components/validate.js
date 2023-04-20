function enableValidation(options) {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, options);
  });
};

function setEventListeners(formElement, options) {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, options);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, options);
      toggleButtonState(inputList, buttonElement, options);
    });
  });
};

function checkInputValidity(inputElement, options) {
  inputElement.setCustomValidity((inputElement.validity.patternMismatch) ? inputElement.dataset.errorMessage : "");
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, options);
  } else {
    hideInputError(inputElement, options);
  }
};

function toggleButtonState(inputList, buttonElement, options) {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, options);
  } else {
    enableButton(buttonElement, options);
  }
};

function disableButton(button, options) {
  button.classList.add(options.inactiveButtonClass);
  button.disabled = true;
}

function enableButton(button, options) {
  button.classList.remove(options.inactiveButtonClass);
  button.disabled = false;
}

const showInputError = (inputElement, errorMessage, options) => {
  const errorElement = inputElement.parentNode.querySelector(options.errorClass);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.classList.add(options.errorClassActive);
  errorElement.textContent = errorMessage;
};

const hideInputError = (inputElement, options) => {
  const errorElement = inputElement.parentNode.querySelector(options.errorClass);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClassActive);
  errorElement.textContent = '';
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

export {enableValidation, toggleButtonState, disableButton};